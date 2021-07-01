import * as R from 'ramda'

export const getWeatherData = R.path(['weather', 'data'])
export const getWeatherError = R.path(['weather', 'error'])
export const getWeatherStatus = R.path(['weather', 'loading'])

const getWeatherName = R.compose(R.toLower, R.prop('main'), R.head)

export const extractCurentWeather = R.compose(
  R.evolve({
    weather: getWeatherName,
    temp: Math.floor,
    feels_like: Math.floor,
  }),
  R.pick(['temp', 'feels_like', 'weather']),
  R.prop('current')
)

export const getCurentWeather = R.compose(
  R.unless(R.isNil, extractCurentWeather),
  getWeatherData
)
