import React from "react";
import {Row, Col} from 'react-bootstrap';
import Popup from "reactjs-popup";
import {fetchWeatherIconUrl} from "../api/weatherAPI";
import chevronright from '../image_SVG_files/chevron-right.svg';

export default function WeatherCard(props) {

  return (
    <div className="weatherCard">
      {/* <Popup modal trigger={<h6 className="common_name" >{plant.common_name} <img src={chevronright} className='chevron' alt='chevron-right' /></h6>}>
        <WeatherPage />
      </Popup> */}
      <Row>
        <Col className="wxImg" xs="50px">
          <img
          src={chevronright}
          className='photo'
          alt='weather condition'
          /> 
        </Col>
        <Col className="tempCol">
        </Col>
      </Row>
    </div>
  )

}