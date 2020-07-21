import React, { Component } from 'react';
import styles from "./Portfolio.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

class Portfolio extends Component {
  
  render() { 
    return ( 
      <>
        <section className={styles.container}>
            <h2 className={styles.header}>My Work</h2>
            <section className={styles.workContainer}> 
                <div className={`${styles.frame} ${styles.frame1}`} >
                  <p>Ewe 4 Ewe<br></br>Client Project</p>
                  <div className={styles.link}><a href="https://github.com/nology-tech/ewe4you" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></div>
                </div>

                <div className={`${styles.frame} ${styles.frame2}`} >
                  <p>BrewDog API<br></br>React App built with an API call</p>
                  <div className={styles.link}><a href="https://github.com/melliemelski/punk-api-challenge" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></div>
                </div>
                
                <div className={`${styles.frame} ${styles.frame3}`}>
                  <p>Nature Memory Game<br></br> Week 4 Game made using Javascript</p>
                  <div className={styles.link}><a href="https://github.com/melliemelski/wk4-game" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></div>
                </div>
            </section>
        </section>
      </>
     );
  }
}
 
export default Portfolio;