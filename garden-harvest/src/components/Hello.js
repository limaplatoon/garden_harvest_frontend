import React, {Component} from "react";
import axiosInstance from "../api/axiosAPI";

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      props: this.props
    };

    this.getMessage = this.getMessage.bind(this)
  }

  getMessage() {
    return axiosInstance.get('/hello/')
      .then(response => {
        const message = response.status === 200 ? response.data.hello : response.statusText;
        this.setState({message: message});
        return message;
      }).catch(error => {
        console.log("Error: ", JSON.stringify(error, null, 4));
        throw error;
      });
  }

  componentDidMount() {
    this.getMessage();
  }

  render() {
    return (
      <div>
        <p>{this.state.message}</p>
        <p>props = {this.state.props}</p>
      </div>
    )
  }
}

export default Hello;