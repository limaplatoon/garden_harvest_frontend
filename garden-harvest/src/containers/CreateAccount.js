import React from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import "./CreateAccount.css";
import Popup from "reactjs-popup";
import accountformlogo from './account-form-logo.svg';
import Confirmation from "./Confirmation";
import { LinkContainer } from "react-router-bootstrap";

export default function CreateAccount() {

  return (
    <div className="CreateAccount">
      <div className="border">
      </div>
        <img src={accountformlogo} className="PLANter-logo" alt="logo" />
        <Form>
          <Form.Row>
              <Form.Group as={Col} controlId="formBasicFirstName">
                <Form.Label>first name</Form.Label>
                <Form.Control type="first_name" placeholder="Johnny" className="short"/>
              </Form.Group>
              <Form.Group as={Col} controlId="formBasicLastName">
                <Form.Label>last name</Form.Label>
                <Form.Control type="last_name" placeholder="Appleseed" className="short"/>
              </Form.Group>
          </Form.Row>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>username</Form.Label>
            <Form.Control type="username" placeholder="johnnys-garden" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>password</Form.Label>
            <Form.Control type="password" placeholder="secretpasscode321" />
          </Form.Group>
          <Form.Group controlId="formBasicZipcode">
            <Form.Label>zipcode</Form.Label>
            <Form.Control type="zipcode" placeholder="60201" />
          </Form.Group>
          <LinkContainer to="/Dashboard">
            <Button variant="outline-primary" type="submit">
              Create Account
            </Button>
            {/* <Confirmation />    */}
          </LinkContainer>
        </Form>
    </div>
  );
}