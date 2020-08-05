import React, {Component} from 'react';
import './App.css';
import fetchForecastByZip from './api/WeatherAPI';

const zip = '60603';

class App extends Component {
  state = {
    forecast: {} // [0..15] 0 = today, documentation here: https://openweathermap.org/forecast16
  }

  componentDidMount() {
    fetchForecastByZip(zip).then(json => this.setState({forecast: json}));
  }


  render() {
    return (
      <div>
        <h2>Environment variables:</h2>
        <b>{process.env.NODE_ENV} mode</b>
        <p>OpenWeatherMap API Key: {process.env.REACT_APP_OPENWEATHERMAP_API_KEY}</p>
        {this.state.forecast.list &&
        <div>
          <h2>Weather forecast:</h2>
          <ol>
            {this.state.forecast.list.map(day => <li>{day.weather[0].description}</li>)}
          </ol>
        </div>
        }
      </div>
    );
  }
}

export default App;
