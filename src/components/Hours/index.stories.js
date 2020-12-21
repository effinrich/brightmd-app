import React from 'react'
import { FieldArray, reduxForm } from 'redux-form/immutable'
import { Provider } from 'react-redux'

import createStore from 'store'

import Hours from '.'

const store = createStore()

const MockForm = reduxForm()(({ children }) => <form>{children}</form>)

const mockHours = [
  {
    close: {
      time: 1200,
      day: 0,
    },
    open: {
      time: 1200,
      day: 0,
    },
  },
  {
    close: {
      time: 1200,
      day: 1,
    },
    open: {
      time: 1200,
      day: 1,
    },
  },
  {
    close: {
      time: 1200,
      day: 2,
    },
    open: {
      time: 1200,
      day: 2,
    },
  },
  {
    close: {
      time: 100,
      day: 3,
    },
    open: {
      time: 1200,
      day: 3,
    },
  },
  {
    close: {
      time: 100,
      day: 4,
    },
    open: {
      time: 1200,
      day: 4,
    },
  },
  {
    close: {
      time: 100,
      day: 5,
    },
    open: {
      time: 1100,
      day: 5,
    },
  },
  {
    close: {
      time: 2300,
      day: 6,
    },
    open: {
      time: 1030,
      day: 6,
    },
  },
]

const WrappedHours = (props) => (
  <Provider store={store}>
    <MockForm
      form="hoursMock"
      initialValues={
        props.initialValues ? props.initialValues.mapForReduxForm() : undefined
      }
    >
      <FieldArray name="hours" component={Hours} {...props} />
    </MockForm>
  </Provider>
)

// storiesOf('Hours', module)
//   .addDecorator(Decorator)
//   .add('split hours', () => (
//     <Padding>
//       <WrappedHours initialValues={mockHours} />
//     </Padding>
//   ))
//   .add('hours w/no initial values', () => (
//     <Padding>
//       <WrappedHours initialValues={mockHours} />
//     </Padding>
//   ))
//   .add('hours w/error', () => (
//     <Padding>
//       <WrappedHours
//         initialValues={mockHours}
//         meta={{
//           submitFailed: true,
//           dirty: true,
//           error: 'It broke',
//         }}
//       />
//     </Padding>
//   ))
//   .add('hours w/warning', () => (
//     <Padding>
//       <WrappedHours
//         initialValues={mockHours}
//         meta={{
//           submitFailed: true,
//           dirty: true,
//           warning: "You've been warned",
//         }}
//       />
//     </Padding>
//   ))

export default {
  title: 'Components/Hours',
  component: Hours,
}

const Template = (args) => <WrappedHours initialValues={mockHours} {...args} />

export const Default = Template.bind({})
// Default.args = {
//   primary: true,
//   label: 'Button',
// }
