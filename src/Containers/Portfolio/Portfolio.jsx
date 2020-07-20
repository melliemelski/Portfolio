import React, { Component } from 'react';
import styles from "./Portfolio.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

class Portfolio extends Component {
  
  render() { 
    return ( 
      <>
      <h2 className={styles.header}>My Work</h2>
      <section className={styles.workContainer}>
          
          <div className={`${styles.frame} ${styles.frame1}`}>
            <p>Nature Memory Game</p><p>Week 4 Game made using Javascript</p>
            <div className={styles.link}><a href=""><FontAwesomeIcon icon={faGithub} /></a></div>
          </div>
          <div className={`${styles.frame} ${styles.frame2}`} >
          <p>BrewDog API</p><p>React App built with an API call</p>
          </div>
      
      </section>
    </>
     );
  }
}
 
export default Portfolio;