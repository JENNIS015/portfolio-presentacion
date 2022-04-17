import React from "react";

import { Link } from "react-router-dom";

const Work = () => {
  return (
    <div className="container">
      <h1>
        <span> Portfolio </span>
      </h1>
      <div className="home-work_livecontrol-list w-dyn-items">
        <div role="listitem" className="col-item-wrapper">
          <Link className="item" to="#"></Link>
          <div class="work-cms_top-wrapper">
            <div class="styled-subheading-wrapper">
              <div class="styled-subheading-circle"></div>
              <p class="styled-subheading">Product design</p>
            </div>
          </div>
          <div class="work-cms_bottom-wrapper">
            <div class="work-cms_heading"> LiveControl </div>
            <div class="work-cms_line-wrapper">
              <img
                src="https:/ / uploads - ssl.webflow.com / 61 d4b50a3b130a78a63644fe / 61e845 a2f7fb883ede8d283c_Rectangle % 20617. svg "
                loading="lazy "
                alt=""
              />
            </div>
            <div>Democratizing Video Production</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
