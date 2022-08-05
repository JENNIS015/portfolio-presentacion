import React from "react";
import { Link } from "react-router-dom";
export default function Slider1() {
  const title = "Full Stack Developer & ARCHITECT";
  const description = "Buenos Aires, Argentina";

  return (
    <div id="slider ingrid">
      <div className="container">
        <div className="row centrado">
          <div className="textSlider fadein">
            <h1 className="plus">
              <span className="effectLeft">Hi,I'm</span>
              <b className="effectRight">Jennifer</b>
            </h1>
            <h4 className="effectLeft">{title}</h4>
            <p className="effectLeft2 italic">{description}</p>
            <div className="spaceHome"></div>
            <Link to="/contact">
              <button className="button-52">Contact</button>
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
