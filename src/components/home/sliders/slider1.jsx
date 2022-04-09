import { React } from "react";
import { Link } from "react-router-dom";
const Slider1 = () => {
  const title = "diseño & creatividad";
  const description =
    "Lorem ipsum dolor sit amet consectetur, adipisicing eli Consequatur perferendis expedita adipisci cupiditate sunt aliqua incidunt aliquid recusandae nostrum perspiciatis, ipsa";

  return (
    <>
    <div class='centrado col s12 m6 l6'>
      <div className='textSlider'>
        <h4 className='fadein effectLeft'>{title}</h4>
        <h1>
          <span className='fadein effectLeft'>Soy</span>
          <b className='effectRight'>Jennifer</b>
        </h1>
        <p className='fadein |effectLeft2'>{description}</p>
        <Link to='/contacto' classname='btnContact'>
          Contacto
        </Link>
      </div>  </div>

      <div class='centrado col s12 m6 l6'>
        <div className='images'>
          <img className='effectUp' src='/images/jennifer.gif' />
        </div>
    
    </div>
    </>
  );
};

export default Slider1;
