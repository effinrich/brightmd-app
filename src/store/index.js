import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import customer from './customer'

const reducer = combineReducers({
  customer,
  form: formReducer
})

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      // Ignore these action types
      ignoredActions: [
        '@@redux-form/INITIALIZE',
        '@@redux-form/ARRAY_PUSH',
        '@@redux-form/REGISTER_FIELD',
        '@@redux-form/UNREGISTER_FIELD',
        '@@redux-form/CHANGE'
      ],
      // Ignore these field paths in all actions
      ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
      // Ignore these paths in the state
      ignoredPaths: ['items.dates']
    }
  })
})

export default store
