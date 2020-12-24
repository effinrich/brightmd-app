import React from 'react'
import PropTypes from 'prop-types'
import { Field, change } from 'redux-form'
import { connect } from 'react-redux'
import moment from 'moment'
import { Map } from 'immutable'
import padStart from 'lodash/padStart'
import { Flex, Box } from 'reflexbox'

import TimeField from 'components/TimeField'
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
      hoursFields.get(fieldIndex).close.time
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
      hoursFields.get(fieldIndex).open.time,
      currentValue
    )
    change(meta.form, `${fieldName}.close.day`, closeDay)
  },

  handleParseTime: props => ([time]) => {
    return parseInt(moment(time).format('HHmm'), 10)
  },

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
  const { fieldName } = props

  return (
    <TabletDown>
      {isTablet => (
        <Flex alignItems="center">
          <Box width={1 / 2} pr={1}>
            <Field
              className="__startTime__"
              name={`${fieldName}.open.time`}
              type="text"
              component={TimeField}
              parse={event => timeSlotHandlers.handleParseTime(props)(event)}
              format={event => timeSlotHandlers.handleFormatTime(props)(event)}
              onChange={(event, currentValue) =>
                timeSlotHandlers.handleStartTimeFieldChange(props)(
                  event,
                  currentValue
                )
              }
              expandLabel={isTablet}
            />
          </Box>
          <Box width={1 / 2} pl={1}>
            <Field
              className="__endTime__"
              name={`${fieldName}.close.time`}
              type="text"
              component={TimeField}
              parse={event => timeSlotHandlers.handleParseTime(props)(event)}
              format={event => timeSlotHandlers.handleFormatTime(props)(event)}
              onChange={(event, currentValue) =>
                timeSlotHandlers.handleEndTimeFieldChange(props)(
                  event,
                  currentValue
                )
              }
              expandLabel={isTablet}
            />
          </Box>
        </Flex>
      )}
    </TabletDown>
  )
}

const propTypes = {
  fieldName: PropTypes.string,
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

export default connect(null, { change })(TimeSlotField)
