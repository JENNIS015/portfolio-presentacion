import React from "react";
import { Link } from "react-router-dom";
import styles from "./project.module.css";

const Project = ({ slides }) => {
  return (
    <section id="project">
      <div className={styles.wrapper}>
        <div className={styles.colorProd}> </div>
        <img src={slides.image} className={styles.imgProd} alt={slides.name} />
        <div className={styles.infoProd}>
          <p className={styles.nombreProd}>{slides.name}</p>
          <p className={styles.extraInfo}>{slides.description}</p>
        </div>
        <div className={styles.actions}>
          <div className={styles.center}>
            <Link to={slides.url}>
              <button className={styles.button17}>Explorar</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
