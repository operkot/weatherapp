import { delay, put, takeLatest } from 'redux-saga/effects'

import { autocompleteActions } from './autocomplete.slice'
import { fetchSuggestionsByName } from 'services/autocomplete.service'
import { isEmptyStr } from 'utils/common.utils'

function* fetchSuggestions({ payload }) {
  if (isEmptyStr(payload)) {
    yield put(autocompleteActions.inputReset())
    return
  }

  yield delay(500)
  yield put(autocompleteActions.fetch())

  try {
    const suggestions = yield fetchSuggestionsByName(payload)

    yield put(autocompleteActions.fetchSuccess(suggestions))
  } catch (error) {
    yield put(autocompleteActions.fetchFailure(error))
  }
}

export function* autocompleteSaga() {
  yield takeLatest(autocompleteActions.inputChanges.type, fetchSuggestions)
}
