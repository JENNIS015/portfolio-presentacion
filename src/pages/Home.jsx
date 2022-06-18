import React from "react";
import Slider from "../components/home/sliderPresentation/Slider";
import Gallery from "../components/home/sliderProject/WorkPortfolio";

const Home = () => {
  return (
    <div className="row">
      <Slider />
      <Gallery />
    </div>
  );
};

export default Home;
