import React from 'react'
import PropTypes from 'prop-types'

import StyledBaseToggleableField, {
  StyledBaseToggleableFieldLabelContainer,
  StyledBaseToggleableFieldInputContainer,
  StyledBaseToggleableFieldMessageContainer,
  StyledBaseToggleableFieldMessage
} from './style'

export const sharedPropTypes = {
  input: PropTypes.object.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  labelPosition: PropTypes.oneOf(['left', 'right']),
  disabled: PropTypes.bool,
  maxW: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.string
  ]),
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
    warning: PropTypes.string
  })
}

const propTypes = {
  ...sharedPropTypes,
  children: PropTypes.node.isRequired
}

const defaultProps = {
  labelPosition: 'left',
  fontSize: 2,
  mb: 1
}

const BaseToggleableField = props => {
  const {
    label,
    helpText,
    input,
    meta,
    disabled,
    labelPosition,
    children,
    type,
    ...styledProps
  } = props
  const styledLogicProps = { labelPosition, disabled, meta }

  return (
    <StyledBaseToggleableField {...styledProps}>
      <StyledBaseToggleableFieldInputContainer {...styledLogicProps}>
        <StyledBaseToggleableFieldLabelContainer {...styledLogicProps}>
          <label htmlFor={input.name}>{label}</label>
          <StyledBaseToggleableFieldMessageContainer>
            {meta.touched &&
              ((meta.error && (
                <StyledBaseToggleableFieldMessage error>
                  {meta.error}
                </StyledBaseToggleableFieldMessage>
              )) ||
                (meta.warning && (
                  <StyledBaseToggleableFieldMessage warning>
                    {meta.warning}
                  </StyledBaseToggleableFieldMessage>
                )))}
            {helpText && (
              <StyledBaseToggleableFieldMessage>
                {helpText}
              </StyledBaseToggleableFieldMessage>
            )}
          </StyledBaseToggleableFieldMessageContainer>
        </StyledBaseToggleableFieldLabelContainer>
        {children}
      </StyledBaseToggleableFieldInputContainer>
    </StyledBaseToggleableField>
  )
}

BaseToggleableField.propTypes = propTypes
BaseToggleableField.defaultProps = defaultProps

export default BaseToggleableField
