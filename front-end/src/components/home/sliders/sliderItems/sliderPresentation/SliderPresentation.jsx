import React from "react";

import { Link } from "react-scroll";
import styles from "./presentation.module.css";
export default function SliderPresentation() {
  const title = "Full Stack Developer & ARCHITECT";
  const description = "Buenos Aires, Argentina";

  return (
    <div id="slider">
      <div className="container">
        <div className="row centrado">
          <div className="textSlider fadein">
            <h1 className={styles.title}>
              <span className="effectLeft">Hi,I'm </span>
              <b className="effectRight">Jennifer</b>
            </h1>
            <h4 className="effectLeft">{title}</h4>
            <p className="effectLeft2 italic">{description}</p>
            <div className={styles.space}></div>
            <Link to="contact" spy={true} smooth={true}>
              <button className={styles.button} >Contact</button>
            </Link>
          </div>

          <div className="images">
            <img
              className="effectUp"
              src="/images/jennifer.gif"
              alt="fullStack"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
