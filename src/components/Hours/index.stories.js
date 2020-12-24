import React from 'react'
import { FieldArray, reduxForm } from 'redux-form'
import { Provider } from 'react-redux'

import { Customer } from 'models'
import store from 'store'
import mockCustomer from './mock-customer.json'

import Hours from '.'

export default {
  title: 'UI Library/Hours',
  component: Hours
}

const mockLocationHours = new Customer(mockCustomer)
const MockForm = reduxForm()(({ children }) => <form>{children}</form>)

const Template = args => (
  <Provider store={store}>
    <MockForm form="hoursMock" initialValues={args.initialValues.toJS()}>
      <FieldArray name="hours" {...args} component={Hours} {...args} />
    </MockForm>
  </Provider>
)

export const Default = Template.bind({})
Default.args = {
  initialValues: mockLocationHours
}
