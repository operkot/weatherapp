import * as R from 'ramda'

import { WEATHER } from 'constants/weather.constants'

export const getWeatherIcon = R.cond([
  [R.equals(WEATHER.RAIN), R.always('/icons/rain.svg')],
  [R.equals(WEATHER.HAZE), R.always('/icons/haze.svg')],
  [R.equals(WEATHER.SMOKE), R.always('/icons/smoke.svg')],
  [R.equals(WEATHER.CLOUDS), R.always('/icons/clouds.svg')],
  [R.equals(WEATHER.DRIZZLE), R.always('/icons/drizzle.svg')],
  [R.equals(WEATHER.THUNDERSTORM), R.always('/icons/thunderstorm.svg')],
  [R.includes([WEATHER.MIST, WEATHER.FOG]), R.always('/icons/fog.svg')],
  [
    R.includes([WEATHER.TORNADO, WEATHER.SQUALL]),
    R.always('/icons/tornado.svg'),
  ],
  [
    R.includes([WEATHER.DUST, WEATHER.SAND, WEATHER.ASH]),
    R.always('/icons/dust.svg'),
  ],
  [R.T, R.always('/icons/clear.svg')],
])
