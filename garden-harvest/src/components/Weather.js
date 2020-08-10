import React, {Component} from "react";
import {fetchForecastByZip, fetchWeatherIconUrl} from "../api/weatherAPI";

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = undefined;
  }

  // Weather state documentation: https://openweathermap.org/forecast16
  // Weather icon documentation: https://openweathermap.org/weather-conditions
  // Instructions for storing API key: https://codeplatoonteam.slack.com/archives/C017KSVEUKZ/p1596651009240600

  componentDidMount() {
    fetchForecastByZip(this.props.zip_code).then(json => this.setState(json));
  }

  render() {
    return (
      <div className="App container">
        <h2>Environment variables:</h2>
        <ul>
          <li><b>{process.env.NODE_ENV} mode</b></li>
          <li><p>OpenWeatherMap API Key: {process.env.REACT_APP_OPENWEATHERMAP_API_KEY}</p></li>
        </ul>
        {
          this.state &&
          <div>
            <h2>Weather forecast for {this.state.city.name} as of {Date(this.state.list[0].dt).toLocaleString()}:</h2>
            <ol>
              {this.state.list.map((day, index) => (<li key={index}>
                High: {Math.round(day.temp.max)},
                Low: {Math.round(day.temp.min)} •
                {day.weather[0].description}
                <img src={fetchWeatherIconUrl(day.weather[0].icon)}/>
              </li>))}
            </ol>
          </div>
        }
      </div>
    );
  }
}