/** @format */

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'emotion-theming'
import loadable from '@loadable/component'
import LogRocket from 'logrocket'

import theme from 'theme'
import store from 'store'

import reportWebVitals from './reportWebVitals'

// @loadable/component provides the same benefit of React's Lazy/Suspense code-splitting components, but doesn't require the Suspense component, so is a bit more efficient.
const App = loadable(/* istanbul ignore next */ () => import('views/App'))

// app monitoring service
LogRocket.init('8jgrsv/brightmd')

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// eslint-disable-next-line no-console
reportWebVitals(console.log)
