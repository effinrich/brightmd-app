import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import customer from './customer'

const reducer = combineReducers({
  customer,
})

const store = configureStore({
  reducer,
})

export default store
