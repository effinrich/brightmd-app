import React from 'react'
import { shallow } from 'enzyme'

import Separator from '..'

describe('Separator', () => {
  it('renders without crashing', () => {
    shallow(<Separator />)
  })

  it('renders fullWidth with a custom color and solid bg', () => {
    shallow(<Separator solid fullWidth color={'#ccc'} />)
  })
})
