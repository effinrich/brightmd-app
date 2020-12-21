import React from 'react'
import PropTypes from 'prop-types'

import theme from 'theme'

import StyledSeparator from './style'

const propTypes = {
  solid: PropTypes.bool,
  fullWidth: PropTypes.bool,
  color: PropTypes.string
}

const defaultProps = {
  solid: true,
  fullWidth: true,
  color: theme.medGrey
}

const Separator = props => {
  return <StyledSeparator {...props} />
}

Separator.propTypes = propTypes
Separator.defaultProps = defaultProps

export default Separator
