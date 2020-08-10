import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "../containers/Home";
import CreateAccount from "../containers/CreateAccount";
import Dashboard from "../containers/Dashboard";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/CreateAccount">
        <CreateAccount/>
      </Route>
      <Route exact path="/Dashboard">
        <Dashboard/>
      </Route>
    </Switch>
  );
}