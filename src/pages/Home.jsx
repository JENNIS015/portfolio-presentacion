import React from "react";

import Section from "../components/home/Section";
import "materialize-css/dist/css/materialize.min.css";
import Work from "../components/home/Work";
import Slider from "../components/home/Slider";

const Home = () => {
  return (
    
    <div className="row">
      <Slider />
      <Work/>
      <Section/>
 
    </div>
  );
};

export default Home;
