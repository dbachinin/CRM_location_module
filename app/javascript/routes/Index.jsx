import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Merchants from "../components/Merchants";
import Partners from "../components/Partners";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/merchants" exact component={Merchants} />
      <Route path="/partners" exact component={Partners} />
    </Switch>
  </Router>
);