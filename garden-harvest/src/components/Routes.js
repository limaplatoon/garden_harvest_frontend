import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../containers/Home";
import CreateAccount from "../containers/CreateAccount";
import Dashboard from "../containers/Dashboard";
import Calendar from "../components/Calendar"
import AllPlants from './components/Plants/AllPlants'
import PlantDetails from './components/Plants/PlantDetails'

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/CreateAccount">
        <CreateAccount />
      </Route>
      <Route exact path="/Dashboard">
        <Dashboard />
      </Route>
      <Route exact path="/TestingCalendar">
        <Calendar />
      </Route>
      <Route exact path='/plants/'>
        <AllPlants />
      </Route>
      <Route exact path='/plants/:plant_id/'>
        <PlantDetails />
      </Route>
    </Switch>
  );
}