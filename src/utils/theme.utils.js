import * as R from 'ramda'

import { theme } from 'styles/theme.styles'
import {
  WEATHER,
  RAINY_WEATHERS,
  THUNDER_WEATHERS,
} from 'constants/weather.constants'

export const getBgColorByWeatherName = R.cond([
  [R.equals(WEATHER.CLEAR), R.always(theme.colors.jaggedice)],
  [R.equals(WEATHER.CLOUDS), R.always(theme.colors.ebonyclay)],
  [R.includes(R.__, THUNDER_WEATHERS), R.always(theme.colors.santasgray)],
  [R.includes(R.__, RAINY_WEATHERS), R.always(theme.colors.mischka)],
  [R.T, R.always(theme.colors.parchment)],
])

export const getTextColorByWeatherName = R.ifElse(
  R.includes(R.__, [...THUNDER_WEATHERS, WEATHER.CLOUDS]),
  R.always(theme.colors.white),
  R.always(theme.colors.black)
)
