import React from "react";
import {Route, Switch} from "react-router-dom";
import Calendar from "./Calendar"
import AllPlants from './Plants/AllPlants'
import PlantDetails from './Plants/PlantDetails'

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/TestingCalendar">
        <Calendar/>
      </Route>
      <Route exact path='/plants/'>
        <AllPlants/>
      </Route>
      <Route exact path='/plants/:plant_id/'>
        <PlantDetails/>
      </Route>
    </Switch>
  );
}