import styled from 'styled-components'
import { space, fontSize, width, color } from 'styled-system'

export const StyledHoursMessage = styled.div`
  font-size: 14px;
  margin: 0 0 8px;
  padding: 4px;
  text-align: center;
  color: ${({ theme, error, warning }) => {
    if (error) return 'white'
    if (warning) return 'white'
  }};
  background-color: ${({ theme, error, warning }) => {
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
