/* eslint-disable react/prop-types */

import React from 'react'
import styled from 'styled-components'
import { style } from 'styled-system'

export const display = style({ prop: 'd', cssProperty: 'display' })

export const overflow = style({
  prop: 'overflow',
  cssProperty: 'overflow'
})

export const height = style({ prop: 'h', cssProperty: 'height' })

export const maxHeight = style({
  prop: 'maxH',
  cssProperty: 'maxHeight'
})

export const maxWidth = style({
  prop: 'maxW',
  cssProperty: 'maxWidth'
})

export const minHeight = style({
  prop: 'minH',
  cssProperty: 'minHeight'
})

export const minWidth = style({
  prop: 'minW',
  cssProperty: 'minWidth'
})

export const omitStyled = (WrappedComponent, omitProps = []) => {
  const Wrapper = ({ children, ...props }) => {
    omitProps.forEach(propName => {
      delete props[propName]
    })
    return <WrappedComponent {...props}>{children}</WrappedComponent>
  }
  return styled(Wrapper)
}
