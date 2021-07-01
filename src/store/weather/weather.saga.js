import { put, takeEvery } from 'redux-saga/effects'
import { isEmpty } from 'ramda'

import { locationActions } from 'store/location/location.slice'
import { weatherActions } from './weather.slice'
import { fetchWeatherOneCall } from 'services/weather.service'

function* getWeatherByLocation({ payload }) {
  if (isEmpty(payload)) return

  yield put(weatherActions.fetch())

  try {
    const response = yield fetchWeatherOneCall(payload.coords)
    yield put(weatherActions.fetchSuccess(response))
  } catch (error) {
    yield put(weatherActions.fetchFailure(error))
  }
}

export function* weatherSaga() {
  yield takeEvery(locationActions.detectSuccess.type, getWeatherByLocation)
}
