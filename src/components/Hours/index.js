import * as React from 'react'
import PropTypes from 'prop-types'
import { Field, FieldArray, change } from 'redux-form/immutable'
import { connect } from 'react-redux'
import { MdContentCopy } from 'react-icons/md'
import { lifecycle, compose, renameProp } from 'recompose'
import { Map } from 'immutable'
import { Flex } from 'reflexbox'

import theme from 'theme'
import ToggleField from 'components/ToggleField'
import Heading from 'components/Text/Heading'
import FlatButton from 'components/FlatButton'

import StyledHours, { StyledHoursMessage } from './style'

import getCloseDay from './utils/getCloseDay'
import TimeSlotField from './partials/TimeSlotField.js'

const dayMap = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
}

class Hours extends React.PureComponent {
  static propTypes = {
    fields: PropTypes.object,
    change: PropTypes.func,
    meta: PropTypes.shape({
      touched: PropTypes.bool,
      error: PropTypes.string,
      warning: PropTypes.string,
      submitFailed: PropTypes.bool,
    }),
  }

  static defaultProps = {
    mt: 3,
  }

  /* eslint-disable react/prop-types */
  handleCopyToAll = (dayIndexToCopy) => {
    const { fields, meta, change } = this.props
    const dataToCopy = fields.get(dayIndexToCopy)
    const newHours = fields.getAll().map((d, i) => {
      if (i === dayIndexToCopy) return d
      const modifiedHours = dataToCopy.get('hours').map((h) =>
        h.mergeIn(['open'], { day: i }).mergeIn(['close'], {
          day: getCloseDay(
            i,
            h.getIn(['open', 'time']),
            h.getIn(['close', 'time'])
          ),
        })
      )
      return dataToCopy.set('hours', modifiedHours)
    })
    change(meta.form, fields.name, newHours)
  }
  /* eslint-enable react/prop-types */

  render() {
    const { fields: dayFields, meta, ...restProps } = this.props

    return (
      <StyledHours {...restProps}>
        {/* eslint-disable react/prop-types */}
        {(meta.submitFailed || meta.dirty) &&
          ((meta.error && (
            <StyledHoursMessage error>{meta.error}</StyledHoursMessage>
          )) ||
            (meta.warning && (
              <StyledHoursMessage warning>{meta.warning}</StyledHoursMessage>
            )))}
        {/* eslint-enable react/prop-types */}
        {dayFields.map((day, index) => (
          <div key={index} style={{ paddingBottom: '13px' }}>
            <Flex alignItems="center" justifyContent="space-between">
              <Flex pr={1} alignItems="center">
                <Heading size={3} regular>
                  {dayMap[index]}
                </Heading>
                <FlatButton
                  circle
                  p="2px"
                  onClick={() => this.handleCopyToAll(index)}
                  style={{ lineHeight: 0 }}
                  overBg="transparent"
                  color={theme.primaryButtonUpBg}
                  overColor={theme.primaryButtonOverBg}
                  type="button"
                  ml={1}
                >
                  <MdContentCopy size={15} />
                </FlatButton>
              </Flex>
              <Flex alignItems="center">
                <Field name={`${day}.enabled`} component={ToggleField} mb={0} />
              </Flex>
            </Flex>
            {dayFields.get(index).get('enabled') && (
              <div>
                <FieldArray
                  name={`${day}.hours`}
                  dayIndex={index}
                  component={TimeSlotsFieldArray}
                  rerenderOnEveryChange
                />
              </div>
            )}
          </div>
        ))}
      </StyledHours>
    )
  }
}

export default connect(null, { change })(Hours)

export const TimeSlotsFieldArray = compose(
  renameProp('fields', 'hoursFields'),
  lifecycle({
    componentDidMount() {
      if (this.props.hoursFields.length === 0) {
        this.props.hoursFields.push(
          new Map({
            close: new Map({ day: this.props.dayIndex }),
            open: new Map({ day: this.props.dayIndex }),
          })
        )
      }
    },
  })
)((props) => {
  return props.hoursFields.map((hour, index) => (
    <TimeSlotField fieldName={hour} fieldIndex={index} key={index} {...props} />
  ))
})

TimeSlotsFieldArray.displayName = 'TimeSlotsFieldArray'
