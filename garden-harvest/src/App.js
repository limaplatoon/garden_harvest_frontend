import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AllPlants from './components/Plants/AllPlants'
import PlantDetails from './components/Plants/PlantDetails'



function App(){
  

    return (
      <Router>
        <Route exact path='/plants/' component={AllPlants} />
        <Route exact path='/plants/:plant_id/' component={PlantDetails} />
      </Router>
  );

}

export default App;
