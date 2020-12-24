import React from 'react'

import Input from './index'

export default {
  title: 'UI Library/Input',
  component: Input
}

const Template = args => <Input {...args} />

export const Default = Template.bind({})
Default.args = {}

export const Bigbox = Template.bind({})
Bigbox.args = {
  inputTheme: 'bigbox'
}

export const Smallbox = Template.bind({})
Smallbox.args = {
  inputTheme: 'smallbox'
}

export const Rounded = Template.bind({})
Rounded.args = {
  inputTheme: 'smallbox',
  rounded: true
}
