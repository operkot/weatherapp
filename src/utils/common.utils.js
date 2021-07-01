import * as R from 'ramda'

export const isEmptyStr = R.compose(R.isEmpty, R.trim)

export const renameKeys = R.curry((keysMap, obj) =>
  R.reduce(
    (acc, key) => R.assoc(keysMap[key] || key, obj[key], acc),
    {},
    R.keys(obj)
  )
)
