const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
const SERVER_URL = `http://api.openweathermap.org/data/2.5/forecast/daily?appid=${API_KEY}&cnt=16&zip=`;

const fetchForecastByZip = zip => {
  return fetch(`${SERVER_URL}${zip},us`).then(response => response.json());
}


export default fetchForecastByZip;