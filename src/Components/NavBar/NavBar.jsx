import React, { Component } from 'react';
import styles from "./NavBar.module.scss"
// import Link from "@reach/router";
import { Link } from "@reach/router";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

class NavBar extends Component {
  state = {  }
  render() { 
    return ( 
    <>
    <div className={styles.NavContainer}>
      burger menu
      <h2>Melissa<br></br>Sargent</h2>
      <Link to="/">Home</Link>
      <Link to="about">About Me</Link>
      <Link to="portfolio">Portfolio</Link>
      <FontAwesomeIcon icon={faLinkedinIn} />
      <FontAwesomeIcon icon={faGithub} />
      <FontAwesomeIcon icon={faEnvelope} />
    </div>
    </> 
    );
  }
}
 
export default NavBar;