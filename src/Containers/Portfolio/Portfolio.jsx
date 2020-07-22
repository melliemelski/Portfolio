import React, { Component } from 'react';
import styles from "./Portfolio.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Project from "../../Components/Project";


class Portfolio extends Component {
  
  render() { 
    return ( 
      <>
        <section className={styles.container}>
            <h2 className={styles.header}>My Work</h2>
            <section className={styles.workContainer}> 
                {/* <div className={`${styles.frame} `}>
                    <img src="../../../public/"></img>
                   <p>Ewe 4 Ewe - Client Project</p>
                  <div className={styles.link}><a href="https://github.com/nology-tech/ewe4you" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a></div>
                 </div>

                 <div className={`${styles.frame} ${styles.frame2}`}>
                   <p>BrewDog API<br></br>React App built with an API call</p>
                   <div className={styles.link}><a href="https://github.com/melliemelski/punk-api-challenge" target="_blank"rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a></div>
                 </div>
                
                 <div className={`${styles.frame} ${styles.frame3}`}>
                   <p>Nature Memory Game<br></br> Week 4 Game made using Javascript</p>
                   <div className={styles.link}><a href="https://github.com/melliemelski/wk4-game" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a></div>
                 </div>  */}
              <Project
                title="Ewe 4 Ewe"
                description="Ewe 4 Ewe - Client Project"
                Url=""
                gitHubShow="true"
                gitHubUrl="https://github.com/nology-tech/ewe4ewe"
                imageURL="../../assets/tree.jpg"
                languages={["ReactJS"]}
              />
               <Project
                title="BrewDog API"
                description="App built with API call"
                Url=""
                gitHubShow="true"
                gitHubUrl="https://github.com/nology-tech/ewe4ewe"
                imageURL="../../assets/e4E.png"
                languages={["ReactJS"]}
              /> 
                 
            </section>
        </section>
      </>
     );
  }
}
 
export default Portfolio;

