import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Merchants from "../components/Merchants";
import Partners from "../components/Partners";
import Partner from "../components/Partner";
import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar"


export default (
  <>
  <Navbar />
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/merchants" exact component={Merchants} />
      <Route path="/partners" exact component={Partners} />
      <Route path="/partner/:id" exact component={Partner} />
    </Switch>
  </Router>
  </>
);