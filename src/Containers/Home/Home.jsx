import React, { Component } from 'react';
import styles from "./Home.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

class Home extends Component {
  state = {
    isHovered: false
  }

//   iconsHover = () => {
//     onMouseEnter={() => this.setState({isHovered: true})};
//     onMouseLeave={() => this.setState({isHovered: false})
//   };
// }

  toggleOpen = () => {
    this.setState( { isOpen: !this.state.isOpen, 
                       drop: !this.state.drop });
  }
  render() { 
    return ( 
      <>
         <motion.div
          className={styles.namediv}
          animate={{ scale: [0, 1.5, 1] }}
          opacity={[0, 1]}
          transition={{ duration: 0.65 }}
          delay={0.5}>
          <h1>Melissa Sargent</h1>
          <h2>Junior Software Developer</h2>
          <div className={styles.fa}>
            <a href="https://www.linkedin.com/in/melissa-sargent-1982851ab/" target="_blank" rel="noopener noreferrer"><div className={styles.icon}><FontAwesomeIcon icon={faLinkedinIn} /></div></a> 
            <a href="https://github.com/melliemelski" target="_blank"rel="noopener noreferrer" ><div className={styles.icon}><FontAwesomeIcon icon={faGithub} /></div></a>
            <a href="mailto: melissa.sargent@hotmail.co.uk" target="_blank" rel="noopener noreferrer"><div className={styles.icon}><FontAwesomeIcon icon={faEnvelope} /></div></a>
            
          </div>
          </motion.div>
      </>
     );
  }
}
 
export default Home;