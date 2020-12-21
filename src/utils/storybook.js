import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import theme from 'theme'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
  }
  body {
    background-color: ${theme.bodyBackgroundColor};
    color: ${theme.textColor};
  }
  
  a {
    color: ${theme.brandColor};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px #ffffff inset !important;
  }
`

export default (Decorator) => (
  <ThemeProvider theme={theme}>
    {Decorator()}
    <GlobalStyle />
  </ThemeProvider>
)
