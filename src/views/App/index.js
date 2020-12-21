import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box } from 'reflexbox'
import { createGlobalStyle } from 'styled-components'
import loadable from '@loadable/component'

import theme from 'theme'
import AppBar from 'components/AppBar'
import Image from 'components/Image'
import Separator from 'components/Separator'
import Logo from 'assets/logo.png'

import { fetchCustomer } from 'store/customer'

import { StyledAppContainer } from './style'

const Hours = loadable(/* istanbul ignore next */ () => import('views/Hours'))
const Branding = loadable(
  /* istanbul ignore next */ () => import('views/Branding')
)

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
  }
  html { min-height: 100%; }
    background-color: ${theme.bodyBackgroundColor};
    color: ${theme.textColor};
    margin: 0;
    padding: 0;
    min-height: 100%;
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

const App = props => {
  const dispatch = useDispatch()
  const { customer } = useSelector(state => state.customer)

  useEffect(() => {
    const handleFetchCustomer = async () => {
      await dispatch(fetchCustomer())
    }

    handleFetchCustomer()
  }, [dispatch])

  return (
    <div>
      <AppBar data-testid="app-bar">
        <Box>
          <Image maxWidth={240} alt="logo" src={Logo} />
        </Box>
      </AppBar>
      <StyledAppContainer pt={[100, 150]} px={[0, 10]}>
        <Box variant="card">
          <Hours customer={customer} />
          <Box py={3}>
            <Separator color="#ccc" />
          </Box>
          <Branding customer={customer} />
        </Box>
      </StyledAppContainer>
      <GlobalStyle {...props} />
    </div>
  )
}

export default App
