import React from 'react'
import { shallow, mount } from 'enzyme'

import Toggle from 'components/Toggle'

describe('Toggle', () => {
  it('renders without crashing', () => {
    shallow(<Toggle name="test" checked={false} />)
  })

  it('should set checked to false if empty string', () => {
    const wrapper = shallow(<Toggle name="test" checked={''} />)
    expect(wrapper.state().checked).toEqual(false)
  })

  it('should update state on change', () => {
    const wrapper = shallow(<Toggle name="test" checked={''} />)
    const input = wrapper.find('StyledToggleInput')
    input.simulate('change', { stopPropagation: () => undefined })
    expect(wrapper.state().checked).toEqual(true)
  })

  it('it should call passed onChange prop if provided', () => {
    const mockOnChange = jest.fn()

    const wrapper = shallow(<Toggle name="test" onChange={mockOnChange} />)
    const input = wrapper.find('StyledToggleInput')
    input.simulate('change', { stopPropagation: () => undefined })
    expect(mockOnChange).toHaveBeenCalled()
  })

  it('it should call componentDidUpdate and change state', () => {
    const wrapper = mount(<Toggle name="test" />)

    wrapper.setProps({ checked: true })
    wrapper.instance().componentDidUpdate({ checked: true })
    expect(wrapper.state().checked).toEqual(true)
  })
})
