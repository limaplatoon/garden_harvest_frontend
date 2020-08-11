import React from "react";
import {Col, Row} from 'react-bootstrap';
import {fetchWeatherIconUrl} from "../api/weatherAPI";

export default function WeatherCard(props) {


  return (
    <div className="weatherCard">
      {/* <Popup modal trigger={<h6 className="common_name" >{plant.common_name} <img src={chevronright} className='chevron' alt='chevron-right' /></h6>}>
        <WeatherPage />
      </Popup> */}
      <Row>
        <Col className="wxImg" xs="50px">
          <img
            src={fetchWeatherIconUrl(props.weather[0].icon)}
            className='photo'
            alt='weather condition'
          />
        </Col>
        <Col className="tempCol">
          <h6>{Math.round(props.temp.max)}</h6>
          <h6>{Math.round(props.temp.min)}</h6>
        </Col>
      </Row>
    </div>
  )

}