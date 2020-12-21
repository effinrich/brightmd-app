import React from 'react'
import { shallow } from 'enzyme'

import Checkbox from '../../Checkbox'

import BaseToggleableField from '../'

describe('BaseToggleableField', () => {
  it('renders without crashing', () => {
    const props = {
      input: { name: 'whammy' },
      meta: {},
      label: 'Whammmy'
    }
    shallow(
      <BaseToggleableField {...props}>
        <Checkbox name="whammmy" />
      </BaseToggleableField>
    )
  })
})
