import { all, put, takeEvery } from 'redux-saga/effects'

import { locationActions } from './location.slice'
import {
  fetchLocationByID,
  fetchLocationByIP,
  fetchLocationByName,
} from 'services/location.service'
import {
  normalizeIPDetectionData,
  normalizeIdDetectionData,
} from 'utils/location.utils'
import { isEmptyStr } from 'utils/common.utils'

function* detectLocationByIp() {
  try {
    const response = yield fetchLocationByIP()
    const normalizedData = normalizeIPDetectionData(response)

    yield put(locationActions.detectSuccess(normalizedData))
  } catch (error) {
    yield put(locationActions.detectFailure(error))
  }
}

function* detectLocationById({ payload }) {
  if (isEmptyStr(payload)) return

  try {
    const response = yield fetchLocationByID(payload)
    const normalizedData = normalizeIdDetectionData(response)

    yield put(locationActions.detectSuccess(normalizedData))
  } catch (error) {
    yield put(locationActions.detectFailure(error))
  }
}

function* detectLocationByName({ payload }) {
  if (isEmptyStr(payload)) return

  try {
    const response = yield fetchLocationByName(payload)
    const normalizedData = normalizeIdDetectionData(response)

    yield put(locationActions.detectSuccess(normalizedData))
  } catch (error) {
    yield put(locationActions.detectFailure(error))
  }
}

function* detectByIpSaga() {
  yield takeEvery(locationActions.detectByIP.type, detectLocationByIp)
}

function* detectByIdSaga() {
  yield takeEvery(locationActions.detectByID.type, detectLocationById)
}

function* detectByNameSaga() {
  yield takeEvery(locationActions.detectByName.type, detectLocationByName)
}

export function* locationSaga() {
  yield all([detectByIpSaga(), detectByIdSaga(), detectByNameSaga()])
}
