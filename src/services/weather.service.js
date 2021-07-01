const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
const WEATHER_URL = process.env.REACT_APP_WEATHER_URL

export const fetchWeatherOneCall = ({ lat, lng }) =>
  fetch(
    `${WEATHER_URL}?lat=${lat}&lon=${lng}&exclude=minutely,hourly&units=metric&appid=${API_KEY}`
  ).then(res => res.json())
