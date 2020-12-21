import styled from 'styled-components'

export default styled.hr`
  display: block;
  margin: 0 auto;
  width: ${props => (props.fullWidth ? '100%;' : '85%;')}
  border: 0;
  border-top: 3px solid ${props => props.color};
  border-radius: 5px;
  opacity: 0.25;
`
