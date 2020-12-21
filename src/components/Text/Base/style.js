import styled from 'styled-components'
import { color } from 'styled-system'

export default styled.span`
  ${color};
  text-align: ${props => props.textAlign};
`
