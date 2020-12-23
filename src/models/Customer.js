import { Record, Map, List } from 'immutable'

import { mapApiHoursToReduxForm, immutableize } from 'utils/formHelpers'

class CustomerDefaults extends Record({
  _id: null,
  fullName: null,
  shortName: null,
  welcomeText: null,
  hours: new List()
}) {}

class Customer extends CustomerDefaults {
  static mapFromNormalized(data, inputMap = new Map()) {
    const iData = immutableize(data) || new Map()
    return iData.reduce(
      (m, customer, id) => m.set(id, new Customer(customer)),
      inputMap
    )
  }

  constructor(values) {
    const iValues = immutableize(values)
    let record = super(iValues)

    return record
  }

  mapForReduxForm() {
    return this.set('hours', mapApiHoursToReduxForm(this.hours))
  }

  mapFromReduxForm() {
    return this.set(
      'hours',
      this.get('hours').reduce((newList, day) => {
        if (day.get('enabled')) {
          return newList.concat(day.get('hours'))
        }
        return newList
      }, new List())
    )
  }
}

export default Customer
