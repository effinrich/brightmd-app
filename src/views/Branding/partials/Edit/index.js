import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'reflexbox'
import { reduxForm, Field } from 'redux-form'

import InputField from 'components/InputField'
import { required } from 'utils/validations'

const validationRules = {
  // business details
  fullName: [required('Full Name is required')],
  shortName: [required('Short Name')],
  welcomeText: [required('Welcome Text is required')]
}

const EditBranding = props => {
  const { handleSubmit, error: submissionError } = props
  return (
    <form onSubmit={handleSubmit}>
      {submissionError && <Box my={2}>{submissionError}</Box>}
      <Field
        label="Full Name"
        name="fullName"
        component={InputField}
        validate={validationRules.fullName}
        type="text"
        placeholder="Full Name"
        width={1}
      />
      <Field
        label="Short Name"
        name="shortName"
        component={InputField}
        validate={validationRules.shortName}
        type="text"
        placeholder="Short Name"
        width={1}
      />
      <Field
        label="Welcome Text"
        name="welcomeText"
        component={InputField}
        validate={validationRules.welcomeText}
        type="text"
        placeholder="Welcome Text"
        width={1}
      />
    </form>
  )
}

EditBranding.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
  dirty: PropTypes.bool,
  submitting: PropTypes.bool,
  pristine: PropTypes.bool,
  initialValues: PropTypes.object
}

export default reduxForm({
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: false
})(EditBranding)
