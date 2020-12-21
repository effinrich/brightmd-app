import React from 'react'
import PropTypes from 'prop-types'
import { Field, change } from 'redux-form/immutable'
import { connect } from 'react-redux'
import moment from 'moment'
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa'
import { Map } from 'immutable'
import padStart from 'lodash/padStart'
import { Flex } from 'reflexbox'

import theme from 'theme'
// import Flex from 'components/Flex'
import Container from 'components/Container'
import TimeField from 'components/TimeField'
import FlatButton from 'components/FlatButton'
import { TabletDown } from 'components/Responsive'

import getCloseDay from '../utils/getCloseDay'

export const timeSlotHandlers = {
  handleStartTimeFieldChange: /* istanbul ignore next */ props => (
    event,
    currentValue
  ) => {
    const { hoursFields, fieldIndex, fieldName, meta, change, dayIndex } = props
    const closeDay = getCloseDay(
      dayIndex,
      currentValue,
      hoursFields.get(fieldIndex).getIn(['close', 'time'])
    )
    change(meta.form, `${fieldName}.close.day`, closeDay)
  },

  handleEndTimeFieldChange: /* istanbul ignore next */ props => (
    event,
    currentValue
  ) => {
    const { hoursFields, fieldIndex, fieldName, meta, change, dayIndex } = props
    const closeDay = getCloseDay(
      dayIndex,
      hoursFields.get(fieldIndex).getIn(['open', 'time']),
      currentValue
    )
    change(meta.form, `${fieldName}.close.day`, closeDay)
  },

  handleParseTime: props => ([time]) =>
    parseInt(moment(time).format('HHmm'), 10),

  handleFormatTime: props => time => {
    if (time || time === 0) {
      return moment(padStart(time, 4, 0), 'Hmm').format('HH:mm')
    }
  },

  handleAddSlotClick: props => event => {
    const { hoursFields, dayIndex } = props
    event.preventDefault()
    hoursFields.push(
      new Map({
        close: new Map({ day: dayIndex }),
        open: new Map({ day: dayIndex })
      })
    )
  },

  handleRemoveSlotClick: props => event => {
    const { hoursFields, fieldIndex } = props
    event.preventDefault()
    hoursFields.remove(fieldIndex)
  }
}

const TimeSlotField = props => {
  const { fieldName, fieldIndex, hoursFields } = props

  return (
    <TabletDown>
      {isTablet => (
        <Flex pb={3} pt={3} alignItems="center">
          <Container width={1 / 2} pr={1}>
            <Field
              className="__startTime__"
              name={`${fieldName}.open.time`}
              type="text"
              component={TimeField}
              label="Start time"
              parse={event => timeSlotHandlers.handleParseTime(props)(event)}
              format={event => timeSlotHandlers.handleFormatTime(props)(event)}
              // validate={validationRules.hours}
              onChange={(event, currentValue) =>
                timeSlotHandlers.handleStartTimeFieldChange(props)(
                  event,
                  currentValue
                )
              }
              expandLabel={isTablet}
            />
          </Container>
          <Container width={1 / 2} pl={1}>
            <Field
              className="__endTime__"
              name={`${fieldName}.close.time`}
              type="text"
              component={TimeField}
              label="End time"
              parse={event => timeSlotHandlers.handleParseTime(props)(event)}
              format={event => timeSlotHandlers.handleFormatTime(props)(event)}
              // validate={validationRules.hours}
              onChange={(event, currentValue) =>
                timeSlotHandlers.handleEndTimeFieldChange(props)(
                  event,
                  currentValue
                )
              }
              expandLabel={isTablet}
            />
          </Container>
          {hoursFields.get(fieldIndex) === hoursFields.getAll().first() ? (
            <Container
              width={[1 / 8, 1 / 16]}
              pl={1}
              style={{ textAlign: 'right' }}
            >
              <FlatButton
                className="__addSlot__"
                circle
                primary
                p="2px"
                onClick={event =>
                  timeSlotHandlers.handleAddSlotClick(props)(event)
                }
                disabled={hoursFields.length > 1}
                color={
                  hoursFields.length > 1
                    ? theme.disabledButtonBg
                    : theme.brandColor
                }
                style={{ lineHeight: 0 }}
              >
                <FaPlusCircle size={20} />
              </FlatButton>
            </Container>
          ) : (
            <Container
              width={[1 / 8, 1 / 16]}
              pl={1}
              style={{ textAlign: 'right' }}
            >
              <FlatButton
                className="__removeSlot__"
                circle
                danger
                p="2px"
                onClick={event =>
                  timeSlotHandlers.handleRemoveSlotClick(props)(event)
                }
                color={theme.errorColor}
                style={{ lineHeight: 0 }}
              >
                <FaMinusCircle size={20} />
              </FlatButton>
            </Container>
          )}
        </Flex>
      )}
    </TabletDown>
  )
}

const propTypes = {
  fieldName: PropTypes.string,
  fieldIndex: PropTypes.number,
  hoursFields: PropTypes.object,
  dayIndex: PropTypes.number,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
    warning: PropTypes.string,
    submitFailed: PropTypes.bool,
    form: PropTypes.string
  })
}

TimeSlotField.propTypes = propTypes

export default connect(
  null,
  { change }
)(TimeSlotField)
