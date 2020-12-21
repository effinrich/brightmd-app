import React from 'react'
import PropTypes from 'prop-types'

import theme from 'theme'

import StyledBodyCopy from './style'

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.node
  ]),
  textAlign: PropTypes.oneOf(['left', 'center', 'right']),
  light: PropTypes.bool
}

const defaultProps = {
  textAlign: 'left',
  fontSize: 1,
  mt: 2,
  mb: 2,
  light: false,
  color: theme.textColor
}

const BodyCopy = props => {
  const { children, ...styledProps } = props
  return <StyledBodyCopy {...styledProps}>{children}</StyledBodyCopy>
}

BodyCopy.propTypes = propTypes
BodyCopy.defaultProps = defaultProps

export default BodyCopy
