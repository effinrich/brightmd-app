import React from 'react'
import PropTypes from 'prop-types'

import theme from 'theme'

import StyledSmallCopy from './style'

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.node
  ]),
  textAlign: PropTypes.oneOf(['left', 'center', 'right'])
}

const defaultProps = {
  textAlign: 'left',
  // See https://github.com/jxnblk/styled-system for syntax
  fontSize: 1,
  mt: 1,
  mb: 0.5,
  color: theme.medGrey
}

const SmallCopy = props => {
  const { children, ...styledProps } = props
  return <StyledSmallCopy {...styledProps}>{children}</StyledSmallCopy>
}

SmallCopy.propTypes = propTypes
SmallCopy.defaultProps = defaultProps

export default SmallCopy
