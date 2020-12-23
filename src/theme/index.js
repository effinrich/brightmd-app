export const SMALL_MOBILE = 320
export const MOBILE = 640
export const TABLET = 832
export const DESKTOP = 1208
export const BREAKPOINT_UNIT = 'px'

export default {
  // Viewport sizes
  viewportMaxWidth: '900px',

  // This gives us 4 breakpoints to work with
  breakpoints: [
    `${MOBILE}${BREAKPOINT_UNIT}`,
    `${TABLET}${BREAKPOINT_UNIT}`,
    `${DESKTOP}${BREAKPOINT_UNIT}`
  ],

  // Styled-System
  space: [0, 8, 16, 32, 64], // eslint-disable-line no-magic-numbers
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72], // eslint-disable-line no-magic-numbers

  // Colors
  brandColor: '#6162FF',
  textColor: 'rgb(122, 122, 122)',
  errorColor: 'rgb(202, 25, 0)',
  warningColor: 'rgb(255, 152, 0)',
  successColor: 'rgb(98, 169, 116)',
  infoColor: 'rgb(91, 152, 210)',
  medGrey: '#A2A2A2',
  lightMedGrey: 'rgb(197, 197, 197)',
  primaryButtonUpBg: '#6162FF',
  primaryButtonUpText: 'white',
  primaryButtonOverBg: '#65A5FF',
  primaryButtonOverText: 'white',
  dangerButtonUpBg: 'rgb(202, 25, 0)',
  dangerButtonUpText: 'white',
  dangerButtonOverBg: 'rgb(223, 41, 0)',
  dangerButtonOverText: 'white',
  successButtonUpBg: 'rgb(138, 226, 159)',
  successButtonUpText: 'white',
  successButtonOverBg: 'rgb(164, 234, 180)',
  successButtonOverText: 'white',
  disabledButtonBg: 'rgb(240, 240, 240)',
  disabledButtonText: 'rgb(204, 204, 204)',
  backgroundColor: '#ffffff',
  bodyBackgroundColor: '#ffffff',

  // Font Weights
  fontSizeLight: 300,
  fontSizeRegular: 400,
  fontSizeSemiBold: 600,
  fontSizeBold: 700,

  radii: {
    default: 4
  },
  shadows: {
    card: '0 0 4px rgba(0, 0, 0, 0.2)'
  },
  variants: {
    card: {
      p: [2, 3],
      borderRadius: 'default',
      bg: 'white',
      boxShadow: 'card'
    }
  }
}
