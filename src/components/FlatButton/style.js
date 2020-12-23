import React from 'react'
import styled, { css } from 'styled-components'
import {
  space,
  color,
  fontSize,
  width,
  boxShadow,
  flex,
  minWidth
} from 'styled-system'
import isNumber from 'lodash/isNumber'
import omit from 'lodash/omit'

import theme from 'theme'
import { display, minHeight } from 'utils/styled'

const activeMixin = css`
  background-color: ${props => props.overBg || theme.lightMedGrey};
  text-decoration: none;
  ${props =>
    props.overColor &&
    css`
      color: ${props.overColor};
    `};
  ${props => (props.primary ? primaryMixinOver : null)};
  ${props => (props.primaryInvert ? primaryInvertMixinOver : null)};
  ${props => (props.danger ? dangerMixinOver : null)};
  ${props => (props.success ? successMixinOver : null)};
  ${props => (props.cancel ? cancelMixinOver : null)};
  ${props => (props.lightGrey ? lightGreyMixinOver : null)};
  ${props => props.overStyles};
`

const baseStyles = styled.button`
  color: ${theme.textColor};
  display: ${props => (props.fullWidth ? 'block' : 'inline-block')};
  border: none;

  ${props =>
    props.fullWidth
      ? css`
          width: 100%;
        `
      : null};

  ${space};
  ${color};
  ${fontSize};
  ${width};
  ${boxShadow};
  ${display};
  ${flex};
  ${minHeight};
  ${minWidth};

  height: ${props =>
    isNumber(props.height) ? `${props.height}px` : props.height};
  box-sizing: border-box;
  text-align: ${props => props.textAlign};
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  outline: none;
  text-decoration: none;
  border-radius: ${({ circle }) => (circle ? '50%' : '4px')};

  & * {
    pointer-events: none;
  }

  &:hover {
    background-color: ${props => props.overBg || theme.lightMedGrey};
    ${props =>
      props.overColor &&
      css`
        color: ${props.overColor};
      `};
    ${props => (props.primary ? primaryMixinOver : null)};
    ${props => (props.primaryInvert ? primaryInvertMixinOver : null)} ${props =>
      props.danger ? dangerMixinOver : null};
    ${props => (props.success ? successMixinOver : null)};
    ${activeMixin};
  }

  ${props => (props.active ? activeMixin : null)};

  ${props => (props.primary ? primaryMixinUp : null)};
  ${props => (props.primaryInvert ? primaryInvertMixinUp : null)};
  ${props => (props.danger ? dangerMixinUp : null)};
  ${props => (props.success ? successMixinUp : null)};
  ${props => (props.cancel ? cancelMixinUp : null)};
  ${props => (props.lightGrey ? lightGreyMixinUp : null)};
  ${props => (props.disabled ? disabledMixin : null)};
`

export default baseStyles.withComponent(({ component, triggerRef, ...props }) =>
  React.createElement(component, { ...omitProps(props), ref: triggerRef })
)

const omitProps = props =>
  omit(props, [
    'textAlign',
    'primary',
    'primaryInvert',
    'cancel',
    'danger',
    'lightGrey',
    'small',
    'success',
    'active',
    'overBg',
    'overColor',
    'fullWidth',
    'overStyles',
    'boxShadow',
    'circle',
    'display',
    'transparent',
    'minH'
  ])

const primaryMixinUp = css`
  background-color: ${theme.primaryButtonUpBg};
  color: ${theme.primaryButtonUpText};
`

const primaryMixinOver = css`
  background-color: ${theme.primaryButtonOverBg};
  color: ${theme.primaryButtonOverText};
`

const dangerMixinUp = css`
  background-color: ${theme.dangerButtonUpBg};
  color: ${theme.dangerButtonUpText};
`

const dangerMixinOver = css`
  background-color: ${theme.dangerButtonOverBg};
  color: ${theme.dangerButtonOverText};
`

const successMixinUp = css`
  background-color: ${theme.successButtonUpBg};
  color: ${theme.successButtonUpText};
`

const successMixinOver = css`
  background-color: ${theme.successButtonOverBg};
  color: ${theme.successButtonOverText};
`

const primaryInvertMixinUp = css`
  background-color: white;
  color: ${theme.primaryButtonUpBg};
  border: ${({ small }) => (small ? 1 : 2)}px solid ${theme.primaryButtonUpBg};
`

const primaryInvertMixinOver = css`
  background-color: white;
  color: ${theme.primaryButtonOverBg};
  border: ${({ small }) => (small ? 1 : 2)}px solid ${theme.primaryButtonOverBg};
`

const cancelMixinUp = css`
  background-color: ${theme.lightMedGrey};
`

const cancelMixinOver = css`
  background-color: ${theme.lightGrey};
`

const lightGreyMixinUp = css`
  background-color: ${theme.superLightGrey};
`

const lightGreyMixinOver = css`
  background-color: ${theme.lightGrey};
`

const disabledMixin = css`
  background-color: ${props =>
    props.transparent ? 'transparent' : theme.disabledButtonBg};
  color: ${theme.disabledButtonText};
  cursor: not-allowed;
  pointer-events: none;
`
