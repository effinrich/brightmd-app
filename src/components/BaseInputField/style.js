import styled, { css } from 'styled-components'
import { width, maxWidth, space, fontSize, color } from 'styled-system'

import theme from 'theme'

export const StyledInputFieldLabelWrapper = styled.div`
  width: 100%;
  position: absolute;
`

export const StyledInputFieldLabel = styled.label`
  width: 100%;
  position: absolute;
  font-size: 16px;
  transform-origin: top left;
  transition: transform 0.3s, color 0.3s;
  transform: translate(
      ${({ hasAdornment }) => (hasAdornment ? '14px' : '0')},
      23px
    )
    scale(1);
  color: ${theme.lightMedGrey};

  ${({ meta: { active }, hasValue }) =>
    (active || hasValue) &&
    css`
      color: ${({ hasValue, meta: { touched, error, warning } }) => {
        if (touched && error) return theme.errorColor
        if (touched && warning) return theme.warningColor
        return theme.brandColor
      }};
    `};

  ${({ meta: { active }, hasValue, expandLabel }) =>
    (expandLabel || active || hasValue) &&
    css`
      transform: translate(0, 1.5px) scale(0.75);
    `};
`

export const StyledInputFieldInputContainer = styled.div`
  margin-top: ${({ inlineEdit }) => (inlineEdit ? '0' : '16px')}};
  position: relative;
  display: flex;
  align-content: center;

  &:before,
  &:after {
    content: '';
    position: absolute;
    height: 2px;
    left: 0;
    right: 0;
    bottom: 0;
    transition: transform 0.3s;
  }

  &:before {
    background-color: ${({ hasValue, meta: { touched, error, warning } }) => {
      if (touched && error) return theme.errorColor
      if (touched && warning) return theme.warningColor
      return theme.lightMedGrey
    }};
  }

  &:after {
    background-color: ${({ hasValue, meta: { touched, error, warning } }) => {
      if (touched && error) return theme.errorColor
      if (touched && warning) return theme.warningColor
      return theme.brandColor
    }};
    transform: scaleX(${({ meta: { active } }) => (active ? 1 : 0)});
  }
`

export const StyledInputFieldAdornment = styled.div`
  ${({ inlineEdit }) =>
    inlineEdit
      ? css`
          font-size: 13px;
          color: ${theme.brandColor};
          margin-top: 20px;
        `
      : css`
          padding: 8px 4px 8px 0;
        `}};
`

export const StyledInputFieldInput = styled.input`
  ${fontSize};
  ${color};
  border: 0;
  background-color: transparent;
  width: 100%;
  outline: none;
  padding: ${({ subAdornment }) => (subAdornment ? '3px 0' : '8px 0')}};

  &::placeholder {
    font-size: 16px;
    color: ${theme.lightMedGrey};
    transition: opacity 0.3s;
    opacity: ${({ meta: { active }, hasValue, expandLabel }) =>
      expandLabel || (active && !hasValue) ? 1 : 0};
  }
`

export const StyledInputFieldMessageContainer = styled.div`
  ${({ holdMessageSpace, inlineEdit }) => {
    if (holdMessageSpace && !inlineEdit) {
      return css`
        min-height: 22px;
      `
    }
    if (holdMessageSpace && inlineEdit) {
      return css`
        min-height: 0;
      `
    }
  }};
`

export const StyledInputFieldMessage = styled.div`
  font-size: 12px;
  margin: 4px 0;
  color: ${({ error, warning }) => {
    if (error) return theme.errorColor
    if (warning) return theme.warningColor
    return theme.medGrey
  }};
`
StyledInputFieldMessage.displayName = 'StyledInputFieldMessage'

export default styled.div`
  ${width};
  ${space};
  ${maxWidth};
  display: flex;
  flex-direction: column;
  position: relative;
  opacity: ${({ disabled }) => (disabled ? 0.65 : 1)}};
`
