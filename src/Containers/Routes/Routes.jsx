import React, { Component } from "react";
import { Router } from "@reach/router";

import Dashboard from "../Dashboard";
import About from "../About";
import Home from "../Home";
import Portfolio from "../Portfolio";


class Routes extends Component {
  

  render() {
    
    return (
      <Router>
        <Dashboard path="/" />
        <Home path="home" />
        <Portfolio path="portfolio" />
        <About path="about" />
      </Router>
    );
  }
}

export default Routes;
