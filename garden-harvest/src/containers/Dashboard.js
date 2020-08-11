import React, {Component} from "react";
import search from '../image_SVG_files/search.svg';
import profile from '../image_SVG_files/account_img.svg'
import settings from '../image_SVG_files/settings.svg'
import logout from '../image_SVG_files/x-circle.svg'
import info from '../image_SVG_files/info.svg'
import close from '../image_SVG_files/x.svg'
import whiteClose from '../image_SVG_files/x-white.svg'
import "./Dashboard.css";
import {Col, Form, FormControl, Row} from 'react-bootstrap';
import Calendar from "../components/Calendar";
import SuggestedPlants from '../components/SuggestedPlants.js'
import AllPlants from '../components/AllPlants.js'
import MyPlants from '../components/MyPlants.js'
import caratRight from '../image_SVG_files/chevron-right-white.svg';
import Weather from "../components/Weather";


export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.moveMainIn = this.moveMainIn.bind(this);
    this.moveMainOut = this.moveMainOut.bind(this);
    this.state = {components: [<MyPlants/>]};
  }

  myPlants(bar) {
    this.setState({components: [<MyPlants/>]});
    bar.style.left = 11.5 + "%";
  }

  suggested(bar) {
    this.setState({components: [<SuggestedPlants/>]});
    bar.style.left = 49.5 + "%";
  }

  all(bar) {
    this.setState({components: [<AllPlants/>]});
    bar.style.left = 85 + "%";
  }

  moveMainOut(mainPanel) {
    mainPanel.style.left = -25 + "vw";
  }

  moveMainIn(mainPanel) {
    mainPanel.style.left = 0;
  }
  filterPlants=(e)=>{
    this.setState({components:[<AllPlants props={e.target.value} />]});
  }

  render() {
    return (
      <div className="dashboard">
        <div className="mainPanel" id="mainPanel"
             onClick={() => this.moveMainIn(document.getElementById('mainPanel'))}>
          <div className="leftCard">
            <h6 className="leftCardTitle">Plants &amp; Produce</h6>
            <div className="searchBox">
              <Form inline>
                <FormControl type="text" onChange={(e)=>this.filterPlants(e)} placeholder="search for tasty plants" className="mr-sm-2 plantSearch"/>
              </Form>
              <img src={search} className='search' alt='search'/>
            </div>
            <hr className="suggestedBar" id="bar"/>
            <Row>
              <Col><h4 className="plantOptions" onClick={() => this.myPlants(document.getElementById('bar'))}>my
                plants</h4></Col>
              <Col><h4 className="plantOptions"
                       onClick={() => this.suggested(document.getElementById('bar'))}>suggested</h4></Col>
              <Col><h4 className="plantOptions" onClick={() => this.all(document.getElementById('bar'))}>all plants</h4>
              </Col>
            </Row>
            <hr className="h-line hl1"/>
            <hr className="h-line hl2"/>
            {this.state.components[0]}
          </div>
          <div className="rightCards">
            <Row>
              <div className="weatherCards">
                <Weather zip_code={this.props.user.zip_code}/>
                <img className="weatherRight" src={caratRight} alt="right arrow"/>
              </div>
            </Row>
            <div className="gardenPlanner">
              <h6 className="gardenPlannerTitle">Garden Planner</h6>
              <hr className="h-line hl3"/>
              <div className="calendar">
                <Calendar/>
              </div>
            </div>
          </div>
        </div>
        <div className="ProfilePanel"
             onClick={() => this.moveMainOut(document.getElementById('mainPanel'))}>
          <img src={close} onClick={() => this.moveMainIn(document.getElementById('mainPanel'))} className="Profclose"
               alt="x"/>
          <img src={profile} className="profile" alt="profile"/>
          <hr className="prof-hr"/>
          <h6 className="edit">Edit your account information <img className="right" src={caratRight} alt="right arrow"/>
          </h6>
          <h6 className="edit"
              onClick={() => alert('Caution: Are you sure you wish to continue deleting your account? This action cannot be undone.')}>Delete
            your PLANter account <img className="right" src={caratRight} alt="right arrow"/></h6>
          <div className="profile-options">
            <Row>
              <Col className="labelCol">
                <p3>settings</p3>
                <br/>
                <p3>logout</p3>
                <br/>
                <p3>info</p3>
              </Col>
              <Col className="symbolCol">
                <img src={settings} className="settings" alt="settings"/>
                <img src={logout} className="logout" onClick={this.props.handleLogout} alt="log out"/>
                <img src={info} className="info" alt="information"/>
              </Col>
            </Row>
          </div>
        </div>
        <div className="nameModule" id="nameModule" style={{color: this.state.color}
        }>
          <h6 className="name" id="name">{this.props.user.first_name} {this.props.user.last_name}</h6>
          <h4 className="username">{this.props.user.username}</h4>
          <div onClick={() => this.moveMainIn(document.getElementById('mainPanel'))} className="button"/>
        </div>
        {/*<div>*/}
        {/*  <h2>Current user:</h2>*/}
        {/*  <ul>*/}
        {/*    {Object.entries(this.props.user).map((e, i) => <li key={i}>{e[0]}: {e[1]}</li>)}*/}
        {/*  </ul>*/}
        {/*  <Weather zip_code={this.props.user.zip_code}/>*/}
        {/*  <a href="#" className="btn" onClick={this.props.handleLogout}>Log out</a>*/}
        {/*</div>*/}
      </div>
    );
  }
}
