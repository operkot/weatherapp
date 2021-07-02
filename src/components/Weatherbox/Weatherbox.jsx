import { useSelector } from 'react-redux'

import {
  getCurentWeather,
  getWeatherStatus,
} from 'store/weather/weather.selectors'
import { getWeatherIcon } from 'utils/weather.utils'

import { Preloader } from 'components'

import {
  WeatherboxWrapper,
  WeatherboxTemp,
  WeatherboxList,
  WeatherboxListItem,
  WeatherboxIcon,
} from './Weatherbox.styles'

export const WeatherboxInfo = ({ data }) => (
  <>
    <WeatherboxIcon
      src={`${process.env.PUBLIC_URL}${getWeatherIcon(data.weather)}`}
      alt={data.weather}
    />
    <WeatherboxTemp>{data.temp}&deg;</WeatherboxTemp>
    <WeatherboxList>
      <WeatherboxListItem>{data.weather}</WeatherboxListItem>
      <WeatherboxListItem>feels like {data.feels_like}&deg;</WeatherboxListItem>
    </WeatherboxList>
  </>
)

export const Weatherbox = () => {
  const isLoading = useSelector(getWeatherStatus)
  const weather = useSelector(getCurentWeather)

  return (
    <WeatherboxWrapper>
      {isLoading || !weather ? (
        <Preloader />
      ) : (
        <WeatherboxInfo data={weather} />
      )}
    </WeatherboxWrapper>
  )
}
