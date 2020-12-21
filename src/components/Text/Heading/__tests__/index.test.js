import React from 'react'
import { shallow } from 'enzyme'

import Heading from '../'

describe('Heading', () => {
  it('renders without crashing', () => {
    shallow(<Heading>Heading</Heading>)
  })
})
