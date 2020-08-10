import React, {Component} from "react";
import {Button, Col, Form} from "react-bootstrap";
import "./CreateAccount.css";
import accountformlogo from '../image_SVG_files/account-form-logo.svg';
import axiosInstance from "../api/axiosAPI";

class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      username: "",
      password: "",
      email: "",
      zip_code: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = event => this.setState({[event.target.name]: event.target.value});

  handleSubmit = event => {
    event.preventDefault();
    return axiosInstance.post('/user/create/', {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      zip_code: this.state.zip_code
    }).then(response => {
      console.log("Create Submit ->", response.data);
      this.props.handleLogin(response.data);
    }).catch(error => {
      this.setState({
        error: error
      });
    });
  }

  render() {
    return (
      <div className="CreateAccount">
        <div className="border">
        </div>
        <img src={accountformlogo} className="PLANter-logo" alt="logo"/>
        <Form onSubmit={this.handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId="formBasicFirstName">
              <Form.Label>first name</Form.Label>
              <Form.Control type="first_name" placeholder="Johnny" className="short"
                            name="first_name" onChange={this.handleChange}/>
            </Form.Group>
            <Form.Group as={Col} controlId="formBasicLastName">
              <Form.Label>last name</Form.Label>
              <Form.Control type="last_name" placeholder="Appleseed" className="short"
                            name="last_name" onChange={this.handleChange}/>
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>username</Form.Label>
            <Form.Control type="username" placeholder="johnnys-garden" required
                          name="username" onChange={this.handleChange}/>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>password</Form.Label>
            <Form.Control type="password" placeholder="secretpasscode321" required
                          name="password" onChange={this.handleChange}/>
          </Form.Group>
          <Form.Group controlId="formBasicZipcode">
            <Form.Label>zipcode</Form.Label>
            <Form.Control type="zipcode" placeholder="60201" required
                          name="zip_code" onChange={this.handleChange}/>
          </Form.Group>
          <Button variant="outline-primary" type="submit">
            Create Account
          </Button>
        </Form>
      </div>
    );
  }
}

export default CreateAccount;