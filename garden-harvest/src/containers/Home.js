import React, {Component} from "react";
import "./Home.css";
import CreateAccount from "./CreateAccount";
import rightarrow from '../image_SVG_files/arrow-right.svg';
import logo from '../image_SVG_files/gp-small-logo.svg';
import largelogo from '../image_SVG_files/large-logo.svg';
import mediumlogo from '../image_SVG_files/medium-logo.svg';
import mainimage from '../image_SVG_files/MainImage.png';
import Popup from "reactjs-popup";
import {LinkContainer} from "react-router-bootstrap";
import {Button, Col, Container, Form, FormControl, Nav, Navbar, Row} from 'react-bootstrap';
import axiosInstance from "../api/axiosAPI";


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {username: "", password: ""}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({...this.state, [event.target.name]: event.target.value});
  };

  handleSubmit = event => {
    event.preventDefault();
    axiosInstance.post('/token/obtain/', {
      username: this.state.username,
      password: this.state.password
    }).then(response => {
      axiosInstance.defaults.headers['Authorization'] = "JWT " + response.data.access;
      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
      this.props.handleLogin(response.data.user);
    }).catch(error => {
      console.log(error);
    });
  };

  render() {
    return (
      <div className="Home">
        <div className="lander">
          <Container>
            <Navbar fixed="top" expand="sm" variant="light" bg="white">
              <Nav className="mr-auto">
                <Navbar.Brand><img src={logo} className="PLANter-logo" alt="logo"/></Navbar.Brand>
              </Nav>
              <Form inline onSubmit={event => this.handleSubmit(event)}>
                <FormControl type="text" placeholder="username" className="mr-sm-2"
                             name="username" onChange={event => this.handleChange(event)}/>
                <FormControl type="password" placeholder="password" className="mr-sm-2"
                             name="password" onChange={event => this.handleChange(event)}/>
                <Button type="submit" variant="outline-secondary">Login</Button>
              </Form>
            </Navbar>
          </Container>
        </div>
        <div className="main">
          <h1>BRING IN YOUR OWN HARVEST</h1>
          <p>We provide all the tools you need to plant, track, and harvest fresh produce in your own backyard, even if
            you’ve never gardened before.</p>
          <Popup modal
                 trigger={<a href="#">Get started now with a free account <img src={rightarrow} className="right-arrow" alt="right arrow"/></a>}>
            <CreateAccount handleLogin={this.props.handleLogin}/>
          </Popup>
          <img src={mainimage} className="main-image" alt="potted seedlings"/>
        </div>
        <div className="second">
          <Container fluid>
            <Row>
              <Col lg="40%">
                <img src={largelogo} className="large-logo" alt="PLANter Logo"/>
                <h3>PLANter is a free web application that helps you choose what to plants will grow best in your area
                  and
                  determine when to harvest them so that you can easily grow perfectly ripe produce in your own
                  backyard.</h3>
              </Col>
              <Col className="step-column">
                <div id="step-1" className="step">
                  <Container>
                    <Row>
                      <Col xs="95px">
                        <h4 className="num">1</h4>
                      </Col>
                      <Col>
                        <h5 className="title">Input your zip code</h5>
                        <p className="text">PLANter uses your zip code to match you with a selection of plants that will
                          fare well in your area and help you determine what to plant.</p>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="step step-2">
                  <Container>
                    <Row>
                      <Col xs="95px">
                        <h4 className="num">2</h4>
                      </Col>
                      <Col>
                        <h5 className="title">Add your plants</h5>
                        <p className="text">When you add new fruits, vegetables, or herbs, PLANTer will advise you when
                          to
                          plant and harvest your produce based on your local weather.</p>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="step step-3">
                  <Container>
                    <Row>
                      <Col xs="95px">
                        <h4 className="num">3</h4>
                      </Col>
                      <Col>
                        <h5 className="title">Grow and repeat</h5>
                        <p className="text">You can check key dates for your current garden and plan next years crops in
                          advance with the easy-to-use calendar view.
                          <Popup modal trigger={<a href="#" id="outer"> Ready to grow<img src={rightarrow}
                                                                                          className="right-arrow"
                                                                                          alt="right arrow"/></a>}>
                            <CreateAccount/>
                          </Popup>
                        </p>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="footer">
          <Container fluid>
            <Row>
              <Col sm="400px">
                <img src={mediumlogo} className="medium-logo" alt="PLANter Logo"/>
                <p className="description">PLANter is a free web application that helps you easily grow perfectly ripe
                  produce in your own backyard. </p>
              </Col>
              <Col className="col2">
                <LinkContainer to="/">
                  <a href="#" className="loginlink">Login</a>
                </LinkContainer><br/><br/>
                <Popup modal trigger={<a href="#" className="createaccount">Create an Account</a>}>
                  <CreateAccount/>
                </Popup>
                <br/><br/>
                <b className="questions">Questions or Suggestions?</b><br/>
                <p>email info@codeplatoon.org</p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}