import { WEATHER } from 'constants/weather.constants'

const icons = {
  [WEATHER.CLOUDS]: '/icons/clouds.svg',
  [WEATHER.CLEAR]: '/icons/clear.svg',
}

export const WeatherIcon = ({ weather }) => (
  <img src={`${process.env.PUBLIC_URL}${icons[weather]}`} alt={weather} />
)
