import React from 'react'

import Toggle from '../Toggle'
import BaseToggleableField, {
  sharedPropTypes as BaseToggleableFieldPropTypes
} from '../BaseToggleableField'

const propTypes = {
  ...BaseToggleableFieldPropTypes
}

const defaultProps = {}

const ToggleField = props => {
  const { toggleText, ...passProps } = props
  const { input, meta, disabled } = passProps
  return (
    <BaseToggleableField {...passProps}>
      <Toggle
        {...input}
        toggleText={toggleText}
        checked={input.value}
        error={!!meta.error}
        warning={!!meta.warning}
        disabled={disabled}
      />
    </BaseToggleableField>
  )
}

ToggleField.propTypes = propTypes
ToggleField.defaultProps = defaultProps

export default ToggleField
