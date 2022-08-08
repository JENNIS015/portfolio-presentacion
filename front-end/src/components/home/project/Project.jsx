import React from "react";
import { Link } from "react-router-dom";
import styles from "./project.module.css";

const Project = ({ slides }) => {
  return (
    <section id="project">
      <div className={styles.wrapper}>
        <div className={styles.colorProd}> </div>
        <Link to={slides.url}>
          <img
            src={slides.image}
            className={styles.imgProd}
            alt={slides.name}
          />
          <div className={styles.infoProd}>
            <p className={styles.nombreProd}>{slides.name}</p>
            <p className={styles.extraInfo}>{slides.description}</p>
          </div>
        </Link>
        
      </div>
    </section>
  );
};

export default Project;
