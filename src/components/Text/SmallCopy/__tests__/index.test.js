import React from 'react'
import { shallow } from 'enzyme'

import SmallCopy from '../'

describe('SmallCopy', () => {
  it('renders without crashing', () => {
    shallow(<SmallCopy>SmallCopy</SmallCopy>)
  })
})
