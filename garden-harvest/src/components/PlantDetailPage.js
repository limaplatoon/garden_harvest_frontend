import React, { useState, useEffect, Component } from "react";
import dashboardAPI from '../api/dashboardAPI.js'
import {Row, Col} from 'react-bootstrap';
import close from '../image_SVG_files/x-black.svg';
import "./PlantDetailPage.css";
import Popup from "reactjs-popup";
import PlantingForm from "./PlantingForm";


export default function PlantDetailPage(props) {
  const {both} = props;
  let pk = both.split(" ")[0];
  let src = both.split(" ")[1];
  let required = require('../images/' + src + '.jpg');

  let [plantDetails, setPlantDetails] = useState([]);

  useEffect(()=> {
    dashboardAPI.fetchPlantDetails(pk)
      .then((apiResponseJSON) => {
        let data = apiResponseJSON;
        setPlantDetails(data);
      })
    },[]);

  let plant = plantDetails;

  return (
    <div className="plantPage clearfix">
      <Row>
        <Col xs={200}>
          <img src={required} className='photo' alt='common_name' /> 
        </Col>
        <Col>
          <Popup modal trigger={<h6 className="common_name" >{plant.common_name} <img src={close} className="close"/></h6>}>
            <PlantingForm {...props} />
          </Popup>
          <h4 className="scientific_name">{plant.scientific_name}</h4>
        </Col>
      </Row>
      <hr className="h-line h1" />
      <hr className="yellow-bar" />
      <hr className="h-line h2" />
      <div className="plant-info-box">
        <h4 className="description-title">Description</h4>
        <div className="description"><p2>{plant.description}</p2></div>
        <h4 className="instructions-title">Instructions for Care</h4>
          <div className="instructions-box">
            <h2 className="seeding-title">Seeding</h2>
            <p2>{plant.sowing}</p2>
            <h2 className="plant-spacing">Plant Spacing</h2>
            <p2>{plant.spacing}</p2>
            <h2 className="harvest-title">When to Harvest</h2>
            <p2>{plant.harvest_min} - {plant.harvest_max} days after planting</p2>
          </div>
        <h4 className="pairs">Pairs Well With</h4>
        <div className="pairs-box"><p2>{plant.companions}</p2></div>
      </div>
    </div>
  )

}
