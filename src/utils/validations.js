import isBoolean from 'lodash/isBoolean'

export const required = (msg = 'Required') => value =>
  value === undefined ||
  value === null ||
  value === '' ||
  (isBoolean(value) && false)
    ? msg
    : undefined

export default {
  required
}
