import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Work from "./components/Work";

export default (
    <Switch>
      	<Route exact path="/" component={Home} />
      	<Route path="/Experience" component={Experience} />
        <Route path="/Work" component={Work} />
        </Switch>
);
