import React from 'react'
import MediaQuery from 'react-responsive'

import { BREAKPOINT_UNIT, MOBILE, SMALL_MOBILE, TABLET } from 'theme'

const OFFSET = 1

const MediaQueryFactory = props => (
  <MediaQuery device={window.__STATICMEDIAVALUES__} {...props} />
)

export const MobileDown = props =>
  MediaQueryFactory({ maxWidth: `${MOBILE}${BREAKPOINT_UNIT}`, ...props })

export const MobileUp = props =>
  MediaQueryFactory({
    minWidth: `${SMALL_MOBILE + OFFSET}${BREAKPOINT_UNIT}`,
    ...props
  })

export const TabletDown = props =>
  MediaQueryFactory({ maxWidth: `${TABLET}${BREAKPOINT_UNIT}`, ...props })

export const TabletUp = props =>
  MediaQueryFactory({
    minWidth: `${MOBILE + OFFSET}${BREAKPOINT_UNIT}`,
    ...props
  })

export const BigTabletUp = props =>
  MediaQueryFactory({
    minWidth: `${TABLET + OFFSET}${BREAKPOINT_UNIT}`,
    ...props
  })
