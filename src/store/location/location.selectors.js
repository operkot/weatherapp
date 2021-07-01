import * as R from 'ramda'

export const getLocationName = R.path(['location', 'name'])
export const getLocationError = R.path(['location', 'error'])
export const getLocationStatus = R.path(['location', 'loading'])
