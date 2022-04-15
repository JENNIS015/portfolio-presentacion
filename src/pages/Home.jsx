import React from "react";

import Slider from "../components/home/Slider";
import Section from "../components/home/Section";
import "materialize-css/dist/css/materialize.min.css";
import WorkSlider from "../components/home/WorkSlider";

const Home = () => {
  return (
    <div>

      <Slider />
      <Section />
      <WorkSlider/>
    </div>
  );
};

export default Home;
