import React, { Component } from 'react';
import styles from "./Portfolio.module.scss"
import Project from "../../Components/Project/Project"

class Portfolio extends Component {
  
  render() { 
    return ( 
      <>
      <section className={styles.portfolioContainer}>
        <h2 className={styles.header}>My Projects</h2>
        <div className={styles.projects}>
          <Project />
        </div>
      </section>
      </>
     );
  }
}
 
export default Portfolio;