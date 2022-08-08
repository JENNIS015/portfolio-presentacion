import React from "react";
import styles from "./project.module.css";

const Project = ({ slides }) => {
  return (
    <section id="project">
      <div className={styles.wrapper}>
        <div className={styles.colorProd}> </div>
        <a href={slides.url} target="_blank">
          <img
            src={slides.image}
            className={styles.imgProd}
            alt={slides.name}
            loading="lazy"
            width="100%"
            height="300px"
          />
          <div className={styles.infoProd}>
            <p className={styles.nombreProd}>{slides.name}</p>
            <p className={styles.extraInfo}>{slides.description}</p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Project;
