import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'reflexbox'
import { reduxForm, FieldArray } from 'redux-form'

import Hours from 'components/Hours'

const validationRules = {
  hours: (value, allValues) =>
    value && value.every(d => !d.enabled)
      ? 'You must enable at least one day'
      : undefined
}

const EditHours = props => {
  const { handleSubmit, initialValues, error: submissionError } = props
  return (
    <form onSubmit={handleSubmit}>
      {submissionError && (
        <Box my={2} color="black">
          {submissionError}
        </Box>
      )}
      <FieldArray
        name="hours"
        component={Hours}
        rerenderOnEveryChange
        validate={validationRules.hours}
        initialValues={initialValues}
        {...props}
      />
    </form>
  )
}

EditHours.propTypes = {
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
})(EditHours)
