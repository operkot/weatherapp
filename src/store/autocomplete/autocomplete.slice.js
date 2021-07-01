import { createSlice } from '@reduxjs/toolkit'

const getIntialState = () => ({
  loading: false,
  suggestions: [],
  error: null,
})

const autocompleteSlice = createSlice({
  name: 'autocomplete',
  initialState: getIntialState(),
  reducers: {
    inputChanges(state) {
      return state
    },
    inputReset() {
      return getIntialState()
    },
    fetch(state) {
      state.loading = true
      state.error = null
    },
    fetchSuccess(state, action) {
      state.loading = false
      state.suggestions = action.payload
      state.error = null
    },
    fetchFailure(state, action) {
      state.loading = false
      state.suggestions = []
      state.error = action.payload
    },
  },
})

export const { actions: autocompleteActions, reducer: autocompleteReducer } =
  autocompleteSlice
