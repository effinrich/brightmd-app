import React from 'react'
import { shallow } from 'enzyme'

import BodyCopy from '../'

describe('BodyCopy', () => {
  it('renders without crashing', () => {
    shallow(<BodyCopy>Body</BodyCopy>)
  })
})
