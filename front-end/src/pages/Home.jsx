import React from "react";
import ContactForm from "../components/home/contacto/ContactForm";
import Slider from "../components/home/sliderPresentation/Slider";
import Gallery from "../components/home/project/WorkPortfolio";

const Home = () => {
  return (
    <div className="row">
      <Slider />
      <Gallery />
      <ContactForm/>
    </div>
  );
};

export default Home;
