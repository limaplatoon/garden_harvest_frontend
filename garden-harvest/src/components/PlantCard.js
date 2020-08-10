import React from "react";
import {Row, Col} from 'react-bootstrap';
import common_name from '../image_SVG_files/tomato-pic.png';
import close from '../image_SVG_files/x.svg';
import chevronright from '../image_SVG_files/chevron-right.svg';
import harvesttag from '../image_SVG_files/harvest-tag.svg';
import seedingtag from '../image_SVG_files/seeding-tag.svg';
import PlantDetailPage from "./PlantDetailPage";
import Popup from "reactjs-popup";

export default function PlantCard(props) {
  const {plant} = props.props

  return (
    <div className="plantCard">
      <Row>
        <Col className="imgCol" xs="200px">
          <img src={common_name} className='photo' alt='common_name' /> 
        </Col>
        <Col className="textCol">
          <img src={close} className='close' alt='x' />
          <Popup modal trigger={<h6 className="common_name" >{plant.common_name} <img src={chevronright} className='chevron' alt='chevron-right' /></h6>}>
            <PlantDetailPage props={plant.pk} />
          </Popup>
          
          <h4 className="scientific_name">{plant.scientific_name}</h4>
            <img src={harvesttag} className='harvesttag' alt='harvest-tag' style={{display: 'none'}}/>
            <img src={seedingtag} className='seedingtag' alt='seeding-tag' style={{display: 'none'}}/>
        </Col>
      </Row>
    </div>
  )

}

