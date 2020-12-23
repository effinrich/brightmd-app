import styled, { css } from 'styled-components'
import { space, fontSize, width } from 'styled-system'
import theme from 'theme'

const standardMixin = css`
  border-bottom: 2px solid ${props => props.theme.brandColor};
  font-size: 18px;
`

const bigboxMixin = css`
  width: 100%;
  box-sizing: border-box;
  transition: background-color 0.5s;
  background-color: white;
  border: 1px solid ${props => props.theme.lightMedGrey};
  font-size: ${props => props.theme.fontSizes[4]}px;

  &:disabled {
    background-color: ${props => props.theme.superLightGrey};
    border: 1px solid ${props => props.theme.lightMedGrey};
  }
`

const smallboxMixin = css`
  width: 100%;
  box-sizing: border-box;
  transition: background-color 0.5s;
  background-color: white;
  border: 1px solid ${props => props.theme.lightMedGrey};
  font-size: ${props => props.theme.fontSizes[1]}px;
  border-radius: ${props => (props.rounded ? '3px' : 'none')};

  &:disabled {
    background-color: ${props => props.theme.superLightGrey};
    border: 1px solid ${props => props.theme.lightMedGrey};
  }
`

const StyledInput = styled.input`
  display: block;
  background-color: transparent;
  border: none;
  outline: none;
  ${props => {
    switch (props.inputTheme) {
      case 'bigbox': {
        return bigboxMixin
      }
      case 'smallbox': {
        return smallboxMixin
      }
      default: {
        return standardMixin
      }
    }
  }};

  &::placeholder {
    color: props.theme.lightMedGrey;
  }

  ${space};
  ${fontSize};
  ${width};
`

StyledInput.defaultProps = { theme }

export default StyledInput
