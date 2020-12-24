import React from 'react'

import Image from './index'

export default {
  title: 'UI Library/Image',
  component: Image
}

const Template = args => <Image {...args} />

export const Default = Template.bind({})
Default.args = {
  src:
    'https://s-media-cache-ak0.pinimg.com/originals/6d/96/41/6d9641691af89520f3b19b26bca4b5fc.jpg',
  alt: 'kitty'
}

export const Thumb = Template.bind({})
Thumb.args = {
  src:
    'https://s-media-cache-ak0.pinimg.com/originals/6d/96/41/6d9641691af89520f3b19b26bca4b5fc.jpg',
  alt: 'kitty',
  thumb: true,
  maxWidth: 300
}

export const Border = Template.bind({})
Border.args = {
  src:
    'https://s-media-cache-ak0.pinimg.com/originals/6d/96/41/6d9641691af89520f3b19b26bca4b5fc.jpg',
  alt: 'kitty',
  border: true
}
