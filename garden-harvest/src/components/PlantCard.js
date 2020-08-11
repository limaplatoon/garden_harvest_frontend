import React from "react";
import {Row, Col} from 'react-bootstrap';
import close from '../image_SVG_files/x.svg';
import chevronright from '../image_SVG_files/chevron-right.svg';
import harvesttag from '../image_SVG_files/harvest-tag.svg';
import seedingtag from '../image_SVG_files/seeding-tag.svg';
import PlantDetailPage from "./PlantDetailPage";
import Popup from "reactjs-popup";
import PlantingForm from "./PlantingForm";


export default function PlantCard(props) {
  const {plant} = props.props
  
  let commonname = plant.common_name.toLowerCase();
  let common_name = commonname.replace(" ", "_")
  common_name = common_name.replace(" ", "_")
  let source = require('../images/' + common_name + '.jpg');
  
  return (
    <div className="plantCard">
      <Row>
        <Col className="imgCol" xs="200px">
          <img src={source} className='photo' alt='common_name' /> 
        </Col>
        <Col className="textCol">
          <Popup modal trigger={<img src={close} className='close' alt='x' />}>
            <PlantingForm />
          </Popup>
          <Popup modal trigger={<h6 className="common_name" >{plant.common_name} <img src={chevronright} className='chevron' alt='chevron-right' /></h6>}>
            <PlantDetailPage props={plant.pk + " " + common_name}/>
          </Popup>
          
          <h4 className="scientific_name">{plant.scientific_name}</h4>
            <img src={harvesttag} className='harvesttag' alt='harvest-tag' style={{display: 'none'}}/>
            <img src={seedingtag} className='seedingtag' alt='seeding-tag' style={{display: 'none'}}/>
        </Col>
      </Row>
    </div>
  )

}

