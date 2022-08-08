import React from "react";

import { Link } from "react-scroll";
import styles from "./presentation.module.css";
const SliderPresentation = () => {
  const title = "Full Stack Developer & ARCHITECT",
    myName = "Hi,I'm",
    name = "Jennifer",
    description = "Buenos Aires, Argentina";

  return (
    <section id="home">
      <div className="container">
        <div className="row centrado ppal">
          <div className="textSlider fadein">
            <h1 className={styles.title}>
              <span className="effectLeft">{myName} </span>
              <b className="effectRight">{name}</b>
            </h1>
            <h4 className="effectLeft">{title}</h4>
            <p className="effectLeft2 italic">{description}</p>
            <div className={styles.space}></div>

            <Link to="contact" spy={true} smooth={true}>
              <button className={styles.button}>Contact</button>
            </Link>
          </div>

          <div className="images">
            <img
              className="effectUp"
              src="/images/jennifer.webp"
              alt="fullStack"
              height="100%"
              width="100%"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default SliderPresentation;
