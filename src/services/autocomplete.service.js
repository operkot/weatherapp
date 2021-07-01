const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY
const AUTOCOMPLETE_URL = process.env.REACT_APP_AUTOCOMPLETE_URL

export const fetchSuggestionsByName = query =>
  fetch(
    `${AUTOCOMPLETE_URL}/json?input=${query}&types=(cities)&language=en&key=${API_KEY}`
  )
    .then(res => res.json())
    .then(res => res.predictions)
