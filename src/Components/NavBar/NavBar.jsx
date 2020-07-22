import React, { Component } from 'react';
import styles from "./NavBar.module.scss"
import { Link } from "@reach/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBars } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";



class NavBar extends Component {
  state = { 
    isOpen: false,
    drop: false
   };

   toggleOpen = () => {
     this.setState( { isOpen: !this.state.isOpen, 
                        drop: !this.state.drop });
   }

   doDrop = () => {
    if (this.state.drop===true) {
      return <div className={styles.dropdown}>
      <Link to="home">Home</Link>
      <Link to="about">About Me</Link>
      <Link to="portfolio">Portfolio</Link>
      </div>
    }
   }
  
  render() { 

    return ( 
    <>
      <div className={styles.navContainer} >
        <div className={styles.burger} onClick={() => this.toggleOpen()}>
        <div className={`${styles.bar1} ${this.state.isOpen ? styles.changebar1 : ""}`}></div>
        <div className={`${styles.bar2} ${this.state.isOpen ? styles.changebar2 : ""}`}></div>
        <div className={`${styles.bar3} ${this.state.isOpen ? styles.changebar3 : ""}`}></div>
        </div>
        {this.doDrop()}
      </div>
    </> 
    );
  }
}
 
export default NavBar;