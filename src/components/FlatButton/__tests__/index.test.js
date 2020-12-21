import React from 'react'
import { shallow } from 'enzyme'

import FlatButton from '../'

describe('FlatButton', () => {
  it('renders without crashing', () => {
    shallow(<FlatButton submitting={false}>FlatButton</FlatButton>)
  })
  it('should render anchor tag if href prop available', () => {
    shallow(<FlatButton href="https://www.freebridrides.com" />)
  })
  it('should render Link component if to prop available', () => {
    shallow(<FlatButton to="/login" />)
  })
  it('should render loader animation if submitting', () => {
    shallow(<FlatButton submitting>FlatButton</FlatButton>)
  })
})
