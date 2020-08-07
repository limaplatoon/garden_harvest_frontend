import React, {useEffect, useState} from 'react';
import './App.css';
import Routes from "./Routes";
import Weather from "./components/Weather";
import fetchForecastByZip from './api/WeatherAPI';


const zip = '60603'; // Remove when user object added

function App() {

  // OpenWeatherMap data structure: https://openweathermap.org/forecast16
  const [forecast, setForecast] = useState(null);
  let isWeatherLoaded;
  if (!forecast) {
    isWeatherLoaded = false;
    fetchForecastByZip(zip).then(json => setForecast(prevState => json));
  }

  useEffect(() => {
    if (forecast != null && forecast.hasOwnProperty('list')) {
      isWeatherLoaded = true;
    }
  }, [forecast, isWeatherLoaded]);

  return (
    <div className="App container">
      {/*<Routes/>*/}
      {isWeatherLoaded && <Weather forecast={forecast}/>}
    </div>
  );
}


export default App;
