const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY
const GEOCODE_URL = process.env.REACT_APP_GEOCODE_URL
const GEOLOCATE_URL = process.env.REACT_APP_GEOLOCATION_URL

export const fetchLocationByIP = () =>
  fetch(GEOLOCATE_URL).then(res => res.json())

export const fetchLocationByID = locationId =>
  fetch(
    `${GEOCODE_URL}?place_id=${locationId}&language=en&key=${API_KEY}`
  ).then(res => res.json())

export const fetchLocationByName = locationName =>
  fetch(
    `${GEOCODE_URL}?address=${locationName}&language=en&key=${API_KEY}`
  ).then(res => res.json())
