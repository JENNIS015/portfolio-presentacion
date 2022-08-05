import React from "react";
import Project from "./Project.jsx";
import data from "./data";
import styles from "./project.module.css";
 
 
function WorkPortfolio() {
 
  return (
    <div id="projects">
      <p className={styles.mission}>
        The last works 
        <span> that i worked</span> 
      </p>
      <div className={styles.contenedorCards}>
        {data.map((project) => (
          <div className={styles.card} key={project.id}>
            <Project slides={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default WorkPortfolio;
