import React, { Component } from 'react';
import styles from "./Project.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";


class Project extends Component {

  
      
  render() { 
    const { title,
      description,
      Url,
      gitHubShow,
      gitHubUrl,
      imageURL,
      languages, } = this.props;

    return ( 
    <>
    <div className={styles.cardContainer}>
      <div className={styles.portfolioCard}>
        <div className={styles.frame}>
          <img src={imageURL}/>
          <div className={styles.text}>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <div className={styles.link}>
            <a href={Url} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                className={styles.fontAwesome}
              />
            </a>
            {gitHubShow === "true" ? (
              <a href={gitHubUrl} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon
                  icon={faGithub}
                  className={styles.fontAwesome}
                />
              </a>
            ) : null}
          </div>
          <div className={styles.languages}>
            {languages.map((language) => (
              <p key={language}>{language}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
    </>
  );
  };
}

export default Project;