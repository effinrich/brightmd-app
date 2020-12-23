import React from 'react'
import PropTypes from 'prop-types'
import isNumber from 'lodash/isNumber'

import BaseInputField, { BaseInputFieldProps } from '../BaseInputField'

import { StyledInputFieldInput } from '../BaseInputField/style'

const propTypes = {
  ...BaseInputFieldProps,
  input: PropTypes.object.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  disabled: PropTypes.bool
}

const defaultProps = {
  fontSize: 16
}

const InputField = props => {
  const {
    input,
    placeholder,
    fontSize,
    color,
    type,
    label,
    maxLength,
    meta,
    minLength,
    min,
    max,
    autoComplete,
    expandLabel,
    autoFocus,
    subAdornment,
    disabled,
    ...passthroughProps
  } = props

  if (input.value === 0) input.value = '0'

  const hasValue = !!(
    input.value &&
    (isNumber(input.value) || input.value.length > 0)
  )

  return (
    <BaseInputField
      name={input.name}
      label={label}
      meta={meta}
      hasValue={hasValue}
      expandLabel={expandLabel}
      {...passthroughProps}
    >
      <StyledInputFieldInput
        subAdornment={subAdornment}
        placeholder={placeholder}
        type={type}
        maxLength={maxLength}
        minLength={minLength}
        min={min}
        max={max}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        expandLabel={expandLabel}
        hasValue={hasValue}
        meta={meta}
        fontSize={fontSize}
        color={color}
        disabled={disabled}
        {...input}
      />
    </BaseInputField>
  )
}

InputField.propTypes = propTypes
InputField.defaultProps = defaultProps

export default InputField
