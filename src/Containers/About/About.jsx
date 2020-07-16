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
    <h1 className={styles.header}>About Me</h1>
    <div className={styles.aboutContainer}>
      <section><h2>First section goes here</h2>
        <p className={styles.text}>
          More text goes here and here and here and here.
          <FontAwesomeIcon icon={faGitSquare}/>
        </p>
      </section>
    </div>
    </>
  )}     
} 
export default About;