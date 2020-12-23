import { createSlice } from '@reduxjs/toolkit'

import api from './api'

// Slice
const slice = createSlice({
  name: 'customer',
  initialState: {
    customer: null,
    error: false
  },
  reducers: {
    fetchCustomerSuccess: (state, action) => {
      state.customer = action.payload
    },
    hasError: (state, action) => {
      state.error = action.payload
    },
    setCustomerSuccess: (state, action) => {
      state.customer = action.payload
    }
  }
})

export default slice.reducer

// Actions
const { fetchCustomerSuccess, hasError, setCustomerSuccess } = slice.actions

export const fetchCustomer = () => async dispatch => {
  try {
    const { data } = await api.get('./mock-customer.json')
    dispatch(fetchCustomerSuccess(data))
  } catch (e) {
    dispatch(hasError(e.response.data.message))
  }
}

export const setCustomer = mutatedCustomer => async dispatch => {
  try {
    dispatch(setCustomerSuccess(mutatedCustomer))
  } catch (e) {
    dispatch(hasError(e.response.data.message))
  }
}
