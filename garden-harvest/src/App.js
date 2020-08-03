import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Calendar from './components/Calendar'

class App extends Component {

  render() {
  return (
    <Router>
      <h2>This is a start</h2>
      <Calendar/>
    </Router>
  );
}
}

export default App;
