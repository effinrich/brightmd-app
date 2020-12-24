import styled, { css } from 'styled-components'
import { width, space } from 'styled-system'

import theme from 'theme'

export default styled.div`
  ${width};
  ${space};

  position: relative;

  .flatpickr-time input {
    font-size: 16px;
  }

  .flatpickr-input {
    position: relative;
    min-height: 15px;
    height: 100%;
    width: 100%;
    background-color: transparent;
    outline: none;
    padding: 0;
    font-size: 16px;
    border: 0;
  }

  .flatpickr-calendar.showTimeInput.hasTime .flatpickr-time {
    border: 0;
  }

  .flatpickr-calendar {
    border-radius: 0 !important;
    border: 0 !important;
    font-size: 16px !important;
  }
`

export const StyledTimeFieldLabel = styled.label`
  position: absolute;
  font-size: 16px;
  transform-origin: top left;
  transition: transform 0.3s, color 0.3s;
  transform: translate(0, 2px) scale(1);
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
      transform: translate(0, -15px) scale(0.75);
    `};
`

export const StyledTimeFieldContainer = styled.div`
  position: relative;

  &:before,
  &:after {
    top: 31px;
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

export const StyledTimeFieldPlaceholder = styled.div`
  position: absolute;
  top: 8px;
  opacity: ${({ meta: active, hasValue }) => (active && !hasValue ? 1 : 0)};
  transition: opacity 0.3s;
  color: ${theme.lightMedGrey};
  z-index: -1;
`

export const StyledTimeFieldMessageContainer = styled.div`
  font-size: 12px;
  line-height: 15px;
  margin: 12px 0;
  position: absolute;
`

export const StyledTimeFieldMessage = styled.div`
  color: ${({ error, warning }) => {
    if (error) return theme.errorColor
    if (warning) return theme.warningColor
    return theme.medGrey
  }};
`
