import React, {Component} from 'react';

class WeatherPage extends Component {
  state = {
    forecast: []
  }
}

export default WeatherPage;


/*
Icons: https://openweathermap.org/weather-conditions

forecast fields:

forecast[i].dt Time of data forecasted
forecast[i].temp
forecast[i].temp.day Day temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
  forecast[i].temp.min Min daily temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
  forecast[i].temp.max Max daily temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
  forecast[i].temp.night Night temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
  forecast[i].temp.eve Evening temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
  forecast[i].temp.morn Morning temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
  forecast[i].feels_like
forecast[i].feels_like.day Day temperature.This temperature parameter accounts for the human perception of weather. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
  forecast[i].feels_like.night Night temperature.This temperature parameter accounts for the human perception of weather. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
  forecast[i].feels_like.eve Evening temperature.This temperature parameter accounts for the human perception of weather. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
  forecast[i].feels_like.morn Morning temperature. This temperature parameter accounts for the human perception of weather. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
  forecast[i].pressure Atmospheric pressure on the sea level, hPa
forecast[i].humidity Humidity, %
forecast[i].weather (more info Weather condition codes)
forecast[i].weather.id Weather condition id
forecast[i].weather.main Group of weather parameters (Rain, Snow, Extreme etc.)
forecast[i].weather.description Weather condition within the group. You can get the output in your language. Learn more.
  forecast[i].weather.icon Weather icon id
forecast[i].speed Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
  forecast[i].deg Wind direction, degrees (meteorological)
forecast[i].clouds Cloudiness, %
forecast[i].rain Precipitation volume, mm
forecast[i].snow Snow volume, mm

*/