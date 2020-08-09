import React from "react";
import {Route, Switch} from "react-router-dom";
import Home from "../containers/Home";
import CreateAccount from "../containers/CreateAccount";
import Dashboard from "../containers/Dashboard";
import Hello from "./Hello";

export default function Routes(props) {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/CreateAccount" component={CreateAccount}/>
      <Route exact path="/Dashboard" component={Dashboard}/>
      <Route exact path="/Hello" component={Hello}/>
    </Switch>
  );
}