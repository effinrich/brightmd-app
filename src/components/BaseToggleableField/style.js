import styled, { css } from 'styled-components'
import { space, color, fontSize } from 'styled-system'
import { maxWidth } from 'utils/styled'

const flexStyleMap = {
  left: {
    justifyContent: 'space-between'
  },
  right: {
    justifyContent: 'flex-end',
    flexDirection: 'row-reverse'
  }
}

export const StyledBaseToggleableFieldInputContainer = styled.div`
  display: flex;
  ${({ labelPosition }) => flexStyleMap[labelPosition]};
`

export const StyledBaseToggleableFieldLabelContainer = styled.div`
  ${({ labelPosition }) =>
    labelPosition === 'right' &&
    css`
      padding-left: 8px;
    `};

  color: ${({ meta: { active, touched, error, warning }, disabled, theme }) => {
    if (!active && disabled) return theme.lightMedGrey
    if (touched && error) return theme.errorColor
    if (touched && warning) return theme.warningColor
    if (!active) return theme.darkGrey
    return theme.brandColor
  }};
`

export const StyledBaseToggleableFieldMessageContainer = styled.div`
  padding-top: 5px;
  font-size: 12px;
  line-height: 15px;
`

export const StyledBaseToggleableFieldMessage = styled.span`
  color: ${({ error, warning, theme }) => {
    if (error) return theme.errorColor
    if (warning) return theme.warningColor
    return theme.medGrey
  }};
`
StyledBaseToggleableFieldMessage.displayName =
  'StyledBaseToggleableFieldMessage'

export default styled.div`
  ${space};
  ${color};
  ${fontSize};
  ${maxWidth};
  position: relative;
  line-height: 24px;
  width: 100%;
`
