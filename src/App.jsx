import React, { Component } from "react";
import styles from "./App.module.scss";
import Routes from "./Containers/Routes/Routes";
import NavBar from "../src/Components/NavBar"

class App extends Component {
  render() { 
    return ( 
    <>
    <div className={styles.app}>
    <div className={styles.navContainer}>
      <NavBar />
    </div>
    <section className={styles.routesContainer}>
      <Routes />
    </section> 
    </div>
    </>
    );
  }
}
 
export default App;
