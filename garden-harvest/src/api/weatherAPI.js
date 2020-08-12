const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
const SERVER_URL = `http://api.openweathermap.org/data/2.5/forecast/daily?appid=${API_KEY}&cnt=16&units=imperial&zip=`;

export function fetchForecastByZip(zip) {
  return fetch(`${SERVER_URL}${zip},us`).then(response => response.json());
}

export function fetchWeatherIconUrl(icon, size = 2) {
  return `http://openweathermap.org/img/wn/${icon}@${size}x.png`;
}
