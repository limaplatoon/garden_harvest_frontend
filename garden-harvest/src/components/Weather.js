import React, {Component} from "react";
import WeatherCard from './WeatherCard'
import wxData from '../wxData.json'


export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = null;
  }

  // Weather state documentation: https://openweathermap.org/forecast16
  // Weather icon documentation: https://openweathermap.org/weather-conditions
  // Instructions for storing API key: https://codeplatoonteam.slack.com/archives/C017KSVEUKZ/p1596651009240600


  componentDidMount() {
    this.setState(wxData)
    // fetchForecastByZip(this.props.zip_code).then(json => this.setState(json));
  }

  render() {
    if (this.state === null) {
      return (
        <h3>Loading your Weather Forecast...</h3>
      )
    }
    let sixteenDay = this.state.list.map((day, index) =>
      <div key={index}>
        <WeatherCard {...day}/>
      </div>
    )
    console.log(sixteenDay)
    return (
      <div className="weatherCardHolder">
        {sixteenDay}
      </div>
    );
  }
}