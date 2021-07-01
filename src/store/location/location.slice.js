import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: true,
  error: null,
  name: null,
  coords: null,
}

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    detectByIP(state) {
      return state
    },
    detectByID(state) {
      return state
    },
    detectByName(state) {
      return state
    },
    detectPending(state) {
      state.loading = true
      state.error = null
    },
    detectSuccess(state, action) {
      state.loading = false
      state.error = null
      state.name = action.payload.name
      state.coords = action.payload.coords
    },
    detectFailure(state, action) {
      state.loading = false
      state.error = action.payload
      state.name = null
      state.coords = null
    },
  },
})

export const { actions: locationActions, reducer: locationReducer } =
  locationSlice
