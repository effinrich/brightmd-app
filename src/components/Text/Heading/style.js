import React from 'react'
import styled, { css } from 'styled-components'
import omit from 'lodash/omit'
import { space, typography, color, lineHeight } from 'styled-system'

import theme from 'theme'

import StyledTextBase from '../Base/style'

export default styled(
  StyledTextBase.withComponent(props =>
    React.createElement(`h${props.size}`, omitProps(props))
  )
)`
  ${space};
  ${typography};
  ${color};
  ${lineHeight};
  ${props => {
    if (props.light) {
      return css`
        font-weight: ${theme.fontSizeLight};
      `
    }
    if (props.regular) {
      return css`
        font-weight: ${theme.fontSizeRegular};
      `
    }
    return null
  }};
`

const omitProps = props =>
  omit(props, ['textAlign', 'lineHeight', 'm', 'light', 'regular', 'p'])
