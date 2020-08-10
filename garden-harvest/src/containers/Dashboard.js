import React, {Component} from "react";
import search from '../image_SVG_files/search.svg';
import profile from '../image_SVG_files/account_img.svg'
import settings from '../image_SVG_files/settings.svg'
import logout from '../image_SVG_files/x-circle.svg'
import info from '../image_SVG_files/info.svg'
import "./Dashboard.css";
import { LinkContainer } from "react-router-bootstrap";
import { Form, FormControl, Button, Row, Col, ListGroup} from 'react-bootstrap';
// import Calendar from "../components/Calendar";
import SuggestedPlants from '../components/SuggestedPlants.js'
import Weather from "../components/Weather";


export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    console.log("Dashboard props:", props);
  }
  
  // function moveMain() {
  //   var mainPanel = document.querySelector("#mainPanel");
  //   mainPanel.style.right = 
  // }

  render() {
    return (<div>
              <div className="dashboard">
          <div className="mainPanel" id="mainPanel">
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
      <div>
        <h2>Current user:</h2>
        <ul>
          {Object.entries(this.props.user).map((e, i) => <li key={i}>{e[0]}: {e[1]}</li>)}
        </ul>
        <Weather zip_code={this.props.user.zip_code}/>
        <a href="#" className="btn" onClick={this.props.handleLogout}>Log out</a>
      </div>
  </div>
    );
  }
}
