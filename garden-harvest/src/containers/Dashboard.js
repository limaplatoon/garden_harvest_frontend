import React, {Component} from "react";
import search from '../image_SVG_files/search.svg';
import profile from '../image_SVG_files/account_img.svg'
import settings from '../image_SVG_files/settings.svg'
import logout from '../image_SVG_files/x-circle.svg'
import info from '../image_SVG_files/info.svg'
import profileClose from '../image_SVG_files/x-white.svg'
import "./Dashboard.css";
import { LinkContainer } from "react-router-bootstrap";
import { Form, FormControl, Button, Row, Col, ListGroup} from 'react-bootstrap';
// import Calendar from "../components/Calendar";
import SuggestedPlants from '../components/SuggestedPlants.js'
import AllPlants from '../components/AllPlantsOption.js'



export default function Dashboard() {
  
  function moveMainOut(mainPanel) {
    mainPanel.style.left = -25 + "vw";
  }

  function moveMainIn(mainPanel) {
    mainPanel.style.left = 0;
  }

  
  return (
        <div className="dashboard">
          <div className="mainPanel" id="mainPanel" onClick={() => moveMainIn(document.getElementById('mainPanel'))}>
            <div className="leftCard">
              <h6 className="leftCardTitle">Plants &amp; Produce</h6>
              <div className="searchBox">
                <Form inline>
                  <FormControl type="text" placeholder="search for tasty plants" className="mr-sm-2 plantSearch" />
                </Form>
                <img src={search} className='search' alt='search' /> 
              </div>
              <Row>
                <Col><h4 className="plantOptions">my plants</h4></Col>
                <Col><h4 className="plantOptions">suggested</h4></Col>
                <Col><h4 className="plantOptions" onClick={<AllPlants />}>all plants</h4></Col>
              </Row>
              <hr className="h-line hl1" />
              <hr className="h-line hl2" />
              <hr className="suggestedBar" />
              <SuggestedPlants />
            </div>
            <div className="rightCards">
              <div className="gardenPlanner">
                <h6 className="gardenPlannerTitle">Garden Planner</h6>
                <hr className="h-line hl3" />
                <div className="calendar">
                  {/* <Calendar /> */}
                </div>
              </div>
              <div className="topInfo">
                <div className="weatherModule">

                </div>
                <div className="nameUsernameModule">
                  
                </div>
              </div>
            </div>
          </div>
          <div className="ProfilePanel" onClick={() => moveMainOut(document.getElementById('mainPanel'))}>
            <img src={profile} className="profile" alt="profile picture" />
            <div className="profile-options">
              <Row>
                <Col className="labelCol">
                  <p3>settings</p3><br/>
                  <p3>logout</p3><br/>
                  <p3>info</p3>
                </Col>
                <Col className="symbolCol">
                  <img src={settings} className="settings"/>
                  <img src={logout} className="logout"/>
                  <img src={info} className="info"/>
                </Col>
              </Row>

            </div>
          </div>
        </div>
    );
}
