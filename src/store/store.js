import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from '@redux-saga/core'
import { all } from 'redux-saga/effects'

import { autocompleteReducer } from './autocomplete/autocomplete.slice'
import { locationReducer } from './location/location.slice'
import { autocompleteSaga } from './autocomplete/autocomplete.saga'
import { locationSaga } from './location/location.saga'

const sagaMiddleware = createSagaMiddleware()
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]

const rootReducer = {
  autocomplete: autocompleteReducer,
  location: locationReducer,
}

function* rootSaga() {
  yield all([autocompleteSaga(), locationSaga()])
}

const store = configureStore({
  reducer: rootReducer,
  middleware,
})

sagaMiddleware.run(rootSaga)

export default store
