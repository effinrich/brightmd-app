import React from 'react'
import { shallow } from 'enzyme'

import ToggleField from '../'

describe('ToggleField', () => {
  it('renders without crashing', () => {
    shallow(<ToggleField input={{ name: 'test', checked: false }} meta={{ touched: false }} />)
  })
})
