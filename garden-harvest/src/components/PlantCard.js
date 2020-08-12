import React from "react";
import {Row, Col} from 'react-bootstrap';
import close from '../image_SVG_files/x.svg';
import chevronright from '../image_SVG_files/chevron-right.svg';
import harvesttag from '../image_SVG_files/harvest-tag.svg';
import seedingtag from '../image_SVG_files/seeding-tag.svg';
import PlantDetailPage from "./PlantDetailPage";
import Popup from "reactjs-popup";
import PlantingForm from "./PlantingForm";
import dashboardAPI from "../api/dashboardAPI";


export default function PlantCard(props) {
  const {plant, plant_slot_id} = props
  const canDelete = (props.canDelete ? props.canDelete : false)

  let commonname = plant.common_name.toLowerCase();
  let common_name = commonname.replace(" ", "_")
  common_name = common_name.replace(" ", "_")
  let source = require('../images/' + common_name + '.jpg');
  
  const handleDelete = (plantSlotID) => {
    dashboardAPI.removeMyPlant(plantSlotID)
      .then(resp => window.location.reload())
  }

  return (
    <div className="plantCard">
      <Row>
        <Col className="imgCol" xs="200px">
          <img src={source} className='photo' alt='common_name' /> 
        </Col>
        <Col className="textCol">
          {(canDelete
            ? 
            <span>
              <img src={close} onClick={(e) => handleDelete(plant_slot_id)} className='close' alt='x' style={{position: 'absolute', right: '15px', zIndex: '50'}}/>
            </span>
            : 
            <Popup modal trigger={<img src={close} className='close' alt='+' style={{position: 'absolute', right: '15px', zIndex: '50'}}/>}>
              <PlantingForm {...props} />
            </Popup>
          )}
          
          
          <Popup modal trigger={<h6 className="common_name" >{plant.common_name} <img src={chevronright} className='chevron' alt='chevron-right' /></h6>}>
            <PlantDetailPage {...props} both={plant.pk + " " + common_name}/>
          </Popup>
          
          <h4 className="scientific_name">{plant.scientific_name}</h4>
            <img src={harvesttag} className='harvesttag' alt='harvest-tag' style={{display: 'none'}}/>
            <img src={seedingtag} className='seedingtag' alt='seeding-tag' style={{display: 'none'}}/>
        </Col>
      </Row>
    </div>
  )

}

