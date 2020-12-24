import React from 'react'

import MockReduxFormField from 'utils/testing/MockReduxFormField'

import InputField from './index'

export default {
  title: 'UI Library/InputField',
  component: InputField
}

const Template = args => (
  <MockReduxFormField>
    <InputField {...args} />
  </MockReduxFormField>
)

export const Default = Template.bind({})
Default.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  input: { name: 'field' },
  type: 'text'
}

export const HelpText = Template.bind({})
HelpText.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  input: { name: 'field' },
  type: 'text',
  helpText: 'This is some help text'
}

export const Error = Template.bind({})
Error.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  input: { name: 'field' },
  type: 'text',
  meta: {
    touched: true,
    error: 'This is a super long mega crazy extravagantly huge Error Message'
  }
}

export const Warning = Template.bind({})
Warning.args = {
  label: 'Label',
  placeholder: 'Placeholder',
  input: { name: 'field' },
  type: 'text',
  meta: {
    touched: true,
    warning: 'Warning Message'
  }
}
