import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'

import store from 'store'

import App from '..'

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  const appBarElement = screen.getByTestId(/app-bar/i)
  expect(appBarElement).toBeInTheDocument()
})
