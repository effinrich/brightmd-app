import React from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { isPristine, isSubmitting, submit } from 'redux-form'
import { connect } from 'react-redux'

import FlatButton from 'components/FlatButton'

const SubmitButton = ({ submitting, pristine, form }) => {
  const dispatch = useDispatch()

  return (
    <FlatButton
      primary
      width={1}
      disabled={submitting || pristine}
      submitting={submitting}
      onClick={/* istanbul ignore next */ () => dispatch(submit(form))}
    >
      Save
    </FlatButton>
  )
}

SubmitButton.propTypes = {
  form: PropTypes.string,
  submit: PropTypes.func,
  submitting: PropTypes.bool,
  pristine: PropTypes.bool
}

export default connect(
  (state, props) => ({
    submitting: isSubmitting(props.form)(state),
    pristine: isPristine(props.form)(state)
  }),
  { submit }
)(SubmitButton)
