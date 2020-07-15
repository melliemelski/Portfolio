import React, { Component } from "react";
import { Router, Redirect } from "@reach/router";


import About from "../About";
import Home from "../Home";
import Portfolio from "../Portfolio";


class Routes extends Component {
  

  render() {
    
    return (
      <Router>
        <Redirect noThrow from="/" to="home" />
        <Home path="home" />
        <Portfolio path="portfolio" />
        <About path="about" />
      </Router>
    );
  }
}

export default Routes;
