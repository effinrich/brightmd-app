import styled from 'styled-components'
import { space, fontSize, width, color } from 'styled-system'

import theme from 'theme'

export const StyledHoursMessage = styled.div`
  ${space};
  font-size: 14px;
  margin: 8px 0 8px;
  padding: 4px;
  text-align: center;
  border-radius: 4px;
  color: ${({ error, warning }) => {
    if (error) return 'white'
    if (warning) return 'white'
  }};
  background-color: ${({ error, warning }) => {
    if (error) return theme.errorColor
    if (warning) return theme.warningColor
  }};
`

export default styled.div`
  ${space};
  ${fontSize};
  ${width};
  ${color};
`
