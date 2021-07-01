import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  error: null,
  data: null,
}

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    fetch(state) {
      state.loading = true
      state.error = null
    },
    fetchSuccess(state, action) {
      state.loading = false
      state.error = null
      state.data = action.payload
    },
    fetchFailure(state, action) {
      state.loading = false
      state.error = action.payload
      state.data = null
    },
  },
})

export const { actions: weatherActions, reducer: weatherReducer } = weatherSlice
