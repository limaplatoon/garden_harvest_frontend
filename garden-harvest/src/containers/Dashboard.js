import React, {Component} from "react";
import search from '../image_SVG_files/search.svg';
import profile from '../image_SVG_files/account_img.svg'
import "./Dashboard.css";
import { LinkContainer } from "react-router-bootstrap";
import { Form, FormControl, Button, Row, Col, ListGroup} from 'react-bootstrap';
// import Calendar from "../components/Calendar";
import SuggestedPlants from '../components/SuggestedPlants.js'



export default function Dashboard() {
  return (
        <div className="dashboard">
          <div className="mainPanel">
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
                <Col><h4 className="plantOptions">all plants</h4></Col>
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
          <div className="ProfilePanel">
            <img src={profile} className="profile" alt="profile picture" />
          </div>
        </div>
    );
}
