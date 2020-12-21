import React from 'react'
import PropTypes from 'prop-types'

import StyledAppBar from './style'

const AppBar = ({ children, ...props }) => (
  <StyledAppBar
    flexDirection="row"
    alignItems="center"
    justifyItems="space-between"
    pl={20}
    {...props}
  >
    {children}
  </StyledAppBar>
)

AppBar.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
}

export default AppBar
