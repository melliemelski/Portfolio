import React, { Component } from 'react';
import styles from "./About.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGitSquare,
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faSass,
  faReact,
  faYarn,
} from "@fortawesome/free-brands-svg-icons";

class About extends Component {
render () {
  return (
    <>
    <div className={`${styles.aboutContainer} ${styles.fadeInBck}`}>About goes here</div>
    </>
  )}     
} 
export default About;