# ToggleField

## Usage

```
import Button from '<path_to>/ToggleField'

<ToggleField
  label="This is a label"
  name="toggleField"
  onChange={this.handleChange}
  labelPosition="right"
  width="250px"
  disabled={false}
  type="checkbox"
/>
```

## Properties

* **input** (required) - Object containing input field attributes.
* **onChange** (optional) - Function that can be passed to toggle change event.
* **label** (optional) - String value for optional toggle label
* **width** (optional) - Width of toggle field.  Note: Max width is 250px and value must be in px. Ex: width="200px"
* **labelPosition** (optional) - Default: 'left' - Label position.  Options are 'left' or 'right'.  Default is 'left'.
* **disabled** (optional) - Default: false - Boolean that disables the toggle by muting color and preventing pointer events.
* **meta** (optional) - Shape containing touched, warning and error props from redux-form.

## Notes

* For this to work in redux-form the type must be set to checkbox, see example redux-form usage below

## Examples

```
import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import ToggleField from '../../../components/ToggleField'

const ExampleToggleForm = ({ handleSubmit, submitting }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        label="toggle"
        name="toggle"
        component={ToggleField}
        type="checkbox"
      />
      <button type="submit" disabled={submitting}>
        Submit
      </button>
    </form>
  )
}

ExampleToggleForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}

export default reduxForm({
  form: 'toggleForm'
})(ExampleToggleForm)

```
Add some examples...
