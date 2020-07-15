import React, { Component } from 'react';
import styles from "./NavBar.module.scss"
import { Link } from "@reach/router";



class NavBar extends Component {
  state = { 
    isOpen: false,
    drop: false
   };

   toggleOpen = () => {
     this.setState( { isOpen: !this.state.isOpen, 
                      drop: !this.state.drop });
   }

  
     animateBurger = () => {
     if (this.state.isOpen===false) {
       return <>
              <div className={styles.bar1}></div>
              <div className={styles.bar2}></div>
              <div className={styles.bar3}></div>
              </>
     } else {
       return <>
              <div className={`${styles.bar1} ${styles.changebar1}`}></div>
              <div className={`${styles.bar2} ${styles.changebar2}`}></div>
              <div className={`${styles.bar3} ${styles.changebar3}`}></div>
              </>
     }
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
        {this.animateBurger()}
        </div>
        {this.doDrop()}
      </div>
    </> 
    );
  }
}
 
export default NavBar;