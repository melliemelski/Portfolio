import React, { Component } from 'react';
import styles from "./Portfolio.module.scss"
import Project from "../../Components/Project/Project"

class Portfolio extends Component {
  
  render() { 
    return ( 
      <>
      <p className={styles.test}>Portfolio here</p>
      <Project />
      </>
     );
  }
}
 
export default Portfolio;