import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'reflexbox'
import { reduxForm, FieldArray } from 'redux-form'

import Hours from 'components/Hours'

const EditHours = props => {
  const { handleSubmit, initialValues, error: submissionError } = props
  return (
    <form onSubmit={handleSubmit}>
      {submissionError && <Box my={2}>{submissionError}</Box>}
      <FieldArray
        name="hours"
        component={Hours}
        rerenderOnEveryChange
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
