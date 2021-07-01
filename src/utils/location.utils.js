import * as R from 'ramda'

import { renameKeys, spreadPath, parseQs } from './common.utils'

const createLocationName = R.compose(
  R.join(', '),
  R.juxt([R.prop('city'), R.prop('country_name')])
)

const createCoordsProp = R.compose(
  renameKeys({ latitude: 'lat', longitude: 'lng' }),
  R.pick(['latitude', 'longitude'])
)

export const normalizeIPDetectionData = R.compose(
  R.pick(['name', 'coords']),
  R.chain(R.assoc('name'), createLocationName),
  R.chain(R.assoc('coords'), createCoordsProp),
  R.pick(['city', 'country_name', 'latitude', 'longitude'])
)

export const normalizeIdDetectionData = R.compose(
  renameKeys({ formatted_address: 'name', location: 'coords' }),
  R.pick(['formatted_address', 'location']),
  spreadPath(['geometry']),
  R.head,
  R.prop('results')
)

export const getLocNameFromQueryStr = R.compose(
  R.propOr(null, 'location'),
  parseQs
)
