import React from 'react'
import { action } from '@storybook/addon-actions'
import { MdWhatshot } from 'react-icons/md'

import FlatButton from './index'

export default {
  title: 'UI Library/FlatButton',
  component: FlatButton
}

const Template = args => <FlatButton {...args}>Click Me</FlatButton>
const TemplateCircle = args => (
  <FlatButton {...args}>
    <MdWhatshot size={34} />
  </FlatButton>
)

export const Default = Template.bind({})
Default.args = {
  onClick: action('clicked')
}

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
  onClick: action('clicked')
}

export const Danger = Template.bind({})
Danger.args = {
  danger: true,
  onClick: action('clicked')
}

export const Cancel = Template.bind({})
Cancel.args = {
  cancel: true,
  onClick: action('clicked')
}

export const Success = Template.bind({})
Success.args = {
  success: true,
  onClick: action('clicked')
}

export const Circle = TemplateCircle.bind({})
Circle.args = {
  circle: true,
  bg: 'black',
  color: 'white',
  overBg: 'pink',
  overColor: 'black',
  onClick: action('clicked')
}
