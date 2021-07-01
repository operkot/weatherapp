import * as R from 'ramda'

export const isEmptyStr = R.compose(R.isEmpty, R.trim)

export const renameKeys = R.curry((keysMap, obj) =>
  R.reduce(
    (acc, key) => R.assoc(keysMap[key] || key, obj[key], acc),
    {},
    R.keys(obj)
  )
)

export const spreadPath = R.curryN(
  2,
  R.converge(R.merge, [R.dissocPath, R.pathOr({})])
)

export const parseQs = R.compose(
  R.fromPairs,
  R.map(R.split('=')),
  R.split('&'),
  R.tail
)
