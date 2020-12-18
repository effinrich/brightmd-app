export const SMALL_MOBILE = 320
export const MOBILE = 640
export const TABLET = 832
export const DESKTOP = 1208
export const BREAKPOINT_UNIT = 'px'

const themeVars = {
  // Viewport sizes
  viewportMaxWidth: '1200px',

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
  brandColor: 'rgb(70, 55, 134)',
  superLightBrandColor: 'rgb(152, 142, 197)',
  brightBrandColor: 'rgb(218, 214, 234)',
  superLightGrey: 'rgb(251, 250, 252)',
  lightGrey: 'rgb(216, 216, 216)',
  lightGrey2: 'rgb(235, 235, 235)',
  lightMedGrey: 'rgb(197, 197, 197)',
  medGrey: 'rgb(170, 170, 170)',
  darkMedGrey: 'rgb(122, 122, 122)',
  darkGrey: 'rgb(101,113,121)',
  superDarkGrey: 'rgb(58, 58, 59)',
  lightBlueGrey: 'rgb(194, 215, 225)',
  errorColor: 'rgb(202, 25, 0)',
  warningColor: 'rgb(255, 152, 0)',
  successColor: 'rgb(138, 226, 159)',
  darkSuccessColor: 'rgb(98, 169, 116)',
  infoColor: 'rgb(91, 152, 210)',
  lightInfoColor: 'rgb(166, 207, 246)',
  primaryButtonUpBg: 'rgb(70, 55, 134)',
  primaryButtonUpText: 'white',
  primaryButtonOverBg: 'rgb(114, 97, 186)',
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
  backgroundColor: 'rgb(251,250,252)',
  bodyBackgroundColor: 'rgb(244,243,250)',
  get defaultTextColor() {
    return this.darkGrey
  },

  // Font Weights
  fontSizeLight: 300,
  fontSizeRegular: 400,
  fontSizeSemiBold: 600,
  fontSizeBold: 700
}

export default themeVars
