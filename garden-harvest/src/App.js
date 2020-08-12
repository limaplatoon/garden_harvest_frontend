import React, {Component} from "react";
import './App.css';
import axiosInstance from "./api/axiosAPI";
import Dashboard from "./containers/Dashboard";
import Home from "./containers/Home";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {user: undefined};
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin = user => this.setState({user: user});

  handleLogout = () =>
    axiosInstance.post('/blacklist/', {
      "refresh_token": localStorage.getItem("refresh_token")
    }).then(response => {
      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      axiosInstance.defaults.headers['Authorization'] = null;
      this.setState({user: null});
      return response;
    }).catch(error => {
      console.log(error);
    });

  componentDidMount() {
    axiosInstance.get('/hello/')
      .then(response => {
        if (response.status === 200) {
          this.setState(prevState => ({user: response.data}));
        } else {
          console.log(response.statusText);
          this.setState(prevState => ({user: null}));
        }
      }).catch(error => {
      console.log("Error: ", JSON.stringify(error, null, 4));
    });
  }

  render() {
    return (
      <div className="App container">
        {this.state.user
          ? <Dashboard handleLogin={this.handleLogin} handleLogout={this.handleLogout} user={this.state.user}/>
          : <Home handleLogin={this.handleLogin} handleLogout={this.handleLogout} user={this.state.user}/>
        }
      </div>
    );
  }
}
