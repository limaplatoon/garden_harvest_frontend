import React from "react";
import "./Home.css";
import logo from '../gp-small-logo.svg';
import mainimage from '../main-image.svg';
import rightarrow from '../arrow-right.svg';
import largelogo from '../large-logo.svg';
import mediumlogo from '../medium-logo.svg';
import { Container, Row, Col, Navbar, Form, FormControl, Button, Nav } from 'react-bootstrap';

export default function Home() {
  return (
    <div className="Home">
      <div className="lander">
        <Container>
            <Navbar fixed="top" expand="sm" variant="light" bg="white">
              <Nav className="mr-auto">
                <Navbar.Brand><img src={logo} className="PLANter-logo" alt="logo" /></Navbar.Brand>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="username" className="mr-sm-2" />
                <FormControl type="text" placeholder="password" className="mr-sm-2" />
                <Button variant="outline-secondary">Login</Button>
              </Form>
            </Navbar>
        </Container>
      </div>
      <div className="main">
        <h1>BRING IN YOUR OWN HARVEST</h1>
        <p>We provide all the tools you need to plant, track, and harvest fresh produce in your own backyard, even if you’ve never gardened before.</p> 
        <a href="#">Get started now with a free account <img src={rightarrow} className="right-arrow" alt="right arrow" /></a>
        <img src={mainimage} className="main-image" alt="Picture of potted seedlings" />
      </div>
      <div className="second">
        <Container fluid>
          <Row>
            <Col lg="40%">
              <img src={largelogo} className="large-logo" alt="PLANter Logo" />
              <h3>PLANter is a free web application that helps you choose what to plants will grow best in your area and determine when to harvest them so that you can easily grow perfectly ripe produce in your own backyard.</h3>
            </Col>
            <Col className="step-column">
              <div id="step-1" className="step">
                <Container>
                  <Row>
                    <Col xs="95px">
                      <h4 className="num">1</h4>
                    </Col>
                    <Col>
                      <h5 className="title">Input your zipcode</h5>
                      <p className="text">PLANter uses your zipcode to match you with a selection of plants that will fare well in your area and help you determine what to plant.</p>
                    </Col>
                  </Row>
                </Container>
              </div>
              <div className="step-2" className="step">
                <Container>
                  <Row>
                    <Col xs="95px">
                      <h4 className="num">2</h4>
                    </Col>
                    <Col>
                      <h5 className="title">Add your plants</h5>
                      <p className="text">When you add new fruits, vegetables, or herbs, PLANTer will advise you when to plant and harvest your produce based on your local weather.</p>
                    </Col>
                  </Row>
                </Container>
              </div>
              <div className="step-3" className="step">
                <Container>
                  <Row>
                    <Col xs="95px">
                      <h4 className="num">3</h4>
                      </Col>
                      <Col>
                        <h5 className="title">Grow and repeat</h5>
                        <p className="text">You can check key dates for your current garden and plan next years crops in advance with the  easy-to-use calendar view. <a href="#">Ready to grow<img src={rightarrow} className="right-arrow" alt="right arrow" /></a></p>
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
              <img src={mediumlogo} className="medium-logo" alt="PLANter Logo" />
              <p className="description">PLANter is a free web application that helps you easily grow perfectly ripe produce in your own backyard. </p>
            </Col>
            <Col className="col2">
              <a className="loginlink" href="#">Login</a><br/><br/>
              <a className="createaccount" href="#">Create an Account</a><br/><br/>
              <b className="questions">Questions or Suggestions?</b><br/>
              <p>email info@codeplatoon.org</p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

// import logo from './logo.svg';
{/* <img src={logo} className="App-logo" alt="logo" /> */}