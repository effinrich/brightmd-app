import React from 'react'
import PropTypes from 'prop-types'

import StyledFlatButton from './style'

const propTypes = {
  // This component implements styled-system
  // See props available at: https://github.com/jxnblk/styled-system
  textAlign: PropTypes.oneOf(['left', 'right', 'center']),
  onClick: PropTypes.func,
  overBg: PropTypes.string,
  overColor: PropTypes.string,
  overStyles: PropTypes.object,
  theme: PropTypes.shape({
    lightMedGrey: PropTypes.string
  }),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  primary: PropTypes.bool,
  primaryInvert: PropTypes.bool,
  small: PropTypes.bool,
  danger: PropTypes.bool,
  success: PropTypes.bool,
  cancel: PropTypes.bool,
  lightGrey: PropTypes.bool,
  circle: PropTypes.bool,
  href: PropTypes.string,
  // for use if react-router Link
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  transparent: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  submitting: PropTypes.bool,
  active: PropTypes.bool,
  // Used to get access to the ref of whatever the trigger component would be
  triggerRef: PropTypes.func,
  p: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
  ]),
  fontSize: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
  ])
}

const defaultProps = {
  textAlign: 'center',
  height: 'auto',
  bg: 'transparent',
  transparent: false,
  primary: false,
  danger: false,
  success: false,
  lightGrey: false,
  small: false,
  cancel: false,
  circle: false,
  fullWidth: false,
  disabled: false,
  active: false,
  overStyles: {}
}

const FlatButton = props => {
  const {
    children,
    onClick,
    href,
    to,
    submitting,
    p,
    fontSize,
    small,
    ...styledProps
  } = props

  let htmlAtt
  if (href) {
    htmlAtt = 'a'
  } else {
    htmlAtt = 'button'
  }

  let padding = p
  if (p || p === 0) {
    padding = p
  } else if (small) {
    padding = 1
  } else {
    padding = 2
  }

  return (
    <StyledFlatButton
      component={htmlAtt}
      onClick={onClick}
      href={href}
      to={to}
      p={padding}
      fontSize={fontSize || (small ? 1 : 2)}
      small={small}
      {...styledProps}
    >
      {children}
    </StyledFlatButton>
  )
}

FlatButton.propTypes = propTypes
FlatButton.defaultProps = defaultProps

export default FlatButton
