import {React} from "react";
import ContactForm from "../components/home/contact/ContactForm";
import Slider from "../components/home/sliders/Slider";
import Gallery from "../components/home/project/WorkPortfolio";

const Home = () => {
  return (

    <div className="container">
      <Slider />
      <Gallery />
      <ContactForm/>
    </div>
  );
};

export default Home;

