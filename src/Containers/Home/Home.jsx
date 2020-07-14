import React, { Component } from 'react';
import styles from "./Home.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

class Home extends Component {
 
  render() { 
    return ( 
      <>
      <div className={styles.namediv}>home is home</div>
      <FontAwesomeIcon icon={faLinkedinIn} />
      <FontAwesomeIcon icon={faGithub} />
      <FontAwesomeIcon icon={faEnvelope} />
      </>
     );
  }
}
 
export default Home;