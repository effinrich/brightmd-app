import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

import StyledInput from './style'

const propTypes = {
  bigBox: PropTypes.oneOf(['standard', 'bigbox']),
  rounded: PropTypes.bool
}

const defaultProps = {
  inputTheme: 'standard',
  pr: 1,
  pl: 1,
  pt: 1,
  pb: 1,
  width: '100%',
  rounded: false
}

const Input = forwardRef((props, ref) => {
  return <StyledInput {...props} ref={ref} />
})

Input.propTypes = propTypes
Input.defaultProps = defaultProps

export default Input
