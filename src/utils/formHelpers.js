import { List, Iterable, fromJS } from 'immutable'

export const mapApiHoursToReduxForm = hours =>
  new List().setSize(7).map((v, i) => {
    const prevHoursForDay = hours.filter(
      h => h && h.getIn(['open', 'day']) === i
    )
    return new Map({
      enabled: prevHoursForDay.size > 0,
      hours: prevHoursForDay
    })
  })

export const immutableize = state =>
  Iterable.isIterable(state) ? state : fromJS(state)
