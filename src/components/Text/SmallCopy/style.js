import styled from 'styled-components'
import { color, fontSize, fontWeight, space, lineHeight } from 'styled-system'

export default styled.p`
  ${color};
  ${fontSize};
  ${fontWeight};
  ${space};
  ${lineHeight};
  text-align: ${props => props.textAlign};
`
