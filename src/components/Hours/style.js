import styled from 'styled-components'
import { space, fontSize, width, color } from 'styled-system'

import theme from 'theme'

export const StyledHoursMessage = styled.div`
  ${space};
  font-size: 16px;
   margin-top: 8px;
  padding-left: 4px; 
  border-radius: 4px;
  color: ${({ error, warning }) => {
    if (error) return theme.errorColor
    if (warning) return theme.warningColor
  }};
  /* background-color: ${({ error, warning }) => {
    if (error) return theme.errorColor
    if (warning) return theme.warningColor
  }}; */
`

export default styled.div`
  ${space};
  ${fontSize};
  ${width};
  ${color};
`
