import React, {Component} from "react";
import {fetchForecastByZip, fetchWeatherIconUrl} from "../api/weatherAPI";
import {Button, Col, Container, Form, FormControl, Nav, Navbar, Row} from 'react-bootstrap';
import WeatherCard from './WeatherCard'

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = null;
  }

  // Weather state documentation: https://openweathermap.org/forecast16
  // Weather icon documentation: https://openweathermap.org/weather-conditions
  // Instructions for storing API key: https://codeplatoonteam.slack.com/archives/C017KSVEUKZ/p1596651009240600


  componentDidMount() {
    fetchForecastByZip(this.props.zip_code).then(json => this.setState(json));
  }


  render() {
    if (this.state === null) {
      return (
      <h1>Loading...</h1>
      )
    }
    console.log(this.state)
    let fiveDay = this.state.list.map((day, index) =>
    <div className='weatherCard' >
        <WeatherCard key={index} />
        <img src={fetchWeatherIconUrl(day.weather[0].icon)} />
        <h6>Math.round(day.temp.max) / Math.round(day.temp.min)</h6>;
      </div>
    )
    console.log(fiveDay)
    return (
      <div className="weatherCardHolder">
        {fiveDay}
      </div>
    );
  }
}