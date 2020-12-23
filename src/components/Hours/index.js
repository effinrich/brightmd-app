import * as React from 'react'
import PropTypes from 'prop-types'
import { Field, FieldArray, change } from 'redux-form'
import { connect } from 'react-redux'
import { lifecycle, compose, renameProp } from 'recompose'
import { Map } from 'immutable'
import { Box, Flex } from 'reflexbox'

import ToggleField from 'components/ToggleField'

import StyledHours, { StyledHoursMessage } from './style'

import TimeSlotField from './partials/TimeSlotField'

class Hours extends React.PureComponent {
  static propTypes = {
    fields: PropTypes.object,
    change: PropTypes.func,
    initialValues: PropTypes.object,
    meta: PropTypes.shape({
      touched: PropTypes.bool,
      error: PropTypes.string,
      warning: PropTypes.string,
      submitFailed: PropTypes.bool
    })
  }

  static defaultProps = {
    mt: 0
  }

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
          <Flex key={index} justifyContent="space-between" width={[1, 1 / 2]}>
            <Box width={[1 / 2, 1 / 2]}>
              <Field
                name={`${day}.enabled`}
                component={ToggleField}
                mt={4}
                label={dayFields.get(index).enabled ? 'OPEN' : 'CLOSED'}
                labelPosition="right"
              />
            </Box>
            <Box width={[3 / 4, 1 / 2]}>
              {dayFields.get(index).enabled && (
                <FieldArray
                  name={`${day}.hours`}
                  dayIndex={index}
                  component={TimeSlotsFieldArray}
                  rerenderOnEveryChange
                />
              )}
            </Box>
          </Flex>
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
            close: new Map({
              day: this.props.dayIndex
            }),
            open: new Map({
              day: this.props.dayIndex
            })
          })
        )
      }
    }
  })
)(props => {
  return props.hoursFields.map((hour, index) => (
    <TimeSlotField fieldName={hour} fieldIndex={index} key={index} {...props} />
  ))
})

TimeSlotsFieldArray.displayName = 'TimeSlotsFieldArray'
