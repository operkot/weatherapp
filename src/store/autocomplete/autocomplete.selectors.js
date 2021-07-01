import * as R from 'ramda'

import { renameKeys } from 'utils/common.utils'

export const getAutocompleteError = R.path(['autocomplete', 'error'])
export const getAutocompleteStatus = R.path(['autocomplete', 'loading'])
export const getAutocompleteSuggestions = R.path([
  'autocomplete',
  'suggestions',
])

export const getFormatedSuggestions = R.compose(
  R.map(renameKeys({ description: 'label', place_id: 'value' })),
  R.project(['description', 'place_id']),
  getAutocompleteSuggestions
)
