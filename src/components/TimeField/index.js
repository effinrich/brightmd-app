import React from 'react'
import PropTypes from 'prop-types'
import Flatpickr from 'react-flatpickr'
import 'flatpickr/dist/flatpickr.min.css'
import moment from 'moment'

import StyledTimeField, {
  StyledTimeFieldLabel,
  StyledTimeFieldPlaceholder,
  StyledTimeFieldContainer,
  StyledTimeFieldMessageContainer,
  StyledTimeFieldMessage
} from './style'

const propTypes = {
  input: PropTypes.object,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
    warning: PropTypes.string
  }),
  name: PropTypes.string,
  label: PropTypes.string,
  enableTime: PropTypes.bool,
  noCalendar: PropTypes.bool,
  dateFormat: PropTypes.string,
  defaultHour: PropTypes.number,
  defaultMinute: PropTypes.number,
  altInput: PropTypes.bool,
  expandLabel: PropTypes.bool
}

const defaultProps = {
  enableTime: true,
  noCalendar: true,
  dateFormat: 'h:i K',
  defaultHour: 12,
  defaultMinute: 0,
  altInput: false,
  expandLabel: false
}

const TimeField = props => {
  const {
    input,
    meta,
    name,
    label,
    placeholder,
    enableTime,
    noCalendar,
    dateFormat,
    altInput,
    defaultHour,
    defaultMinute,
    expandLabel
  } = props

  const hasValue = input.value && input.value.length > 0
  const styleLogicProps = { hasValue, meta }
  return (
    <StyledTimeField hasValue={hasValue} {...props}>
      <StyledTimeFieldLabel
        htmlFor={name}
        expandLabel={expandLabel}
        {...styleLogicProps}
      >
        {label}
      </StyledTimeFieldLabel>
      <StyledTimeFieldPlaceholder {...styleLogicProps}>
        {placeholder}
      </StyledTimeFieldPlaceholder>
      <StyledTimeFieldContainer {...styleLogicProps}>
        <Flatpickr
          {...input}
          onBlur={
            /* istanbul ignore next */ event =>
              noCalendar && input.onBlur([moment(event.target.value, 'h:m A')])
          }
          options={{
            enableTime: enableTime,
            noCalendar: noCalendar,
            altInput: altInput,
            altFormat: dateFormat,
            time_24hr: false,
            dateFormat: dateFormat,
            defaultHour: defaultHour,
            defaultMinute: defaultMinute
          }}
        />
      </StyledTimeFieldContainer>
      <StyledTimeFieldMessageContainer>
        {meta.touched &&
          ((meta.error && (
            <StyledTimeFieldMessage error>{meta.error}</StyledTimeFieldMessage>
          )) ||
            (meta.warning && (
              <StyledTimeFieldMessage warning>
                {meta.warning}
              </StyledTimeFieldMessage>
            )))}
      </StyledTimeFieldMessageContainer>
    </StyledTimeField>
  )
}

TimeField.propTypes = propTypes
TimeField.defaultProps = defaultProps

export default TimeField
