import React from 'react'
import { shallow, mount } from 'enzyme'

import Image from '../'

describe('Image', () => {
  it('renders without crashing', () => {
    shallow(<Image src={'http://test.com/test.png'} alt={'test'} />)
  })

  it('updates state on handleImageError', () => {
    const wrapper = mount(<Image src={'http://testImgUrl/test.png'} alt={'test'} />)
    const instance = wrapper.instance()
    instance.handleImageError()
    expect(wrapper.state().error).toEqual(true)
    expect(wrapper.state().loaded).toEqual(false)
  })

  it('updates state on handleImageLoaded', () => {
    const wrapper = shallow(<Image src={'http://testImgUrl/test.png'} alt={'test'} />)
    const instance = wrapper.instance()
    instance.handleImageLoaded()
    expect(wrapper.state().loaded).toEqual(true)
    expect(wrapper.state().error).toEqual(false)
  })
})
