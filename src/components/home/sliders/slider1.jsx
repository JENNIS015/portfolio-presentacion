import React from "react";

const Slider1 = () => {
  const title = "diseño & creatividad";
  const description =
    "Lorem ipsum dolor sit amet consectetur, adipisicing eli Consequatur perferendis expedita adipisci cupiditate sunt aliqua incidunt aliquid recusandae nostrum perspiciatis, ipsa";

  return (
    <>
      <div class='centrado col s5 m3 l3'>
        <div className='textSlider'>
          <h4 className='fadein effectLeft'>{title}</h4>
          <h1>
            <span className='fadein effectLeft'>Soy</span>
            <b className='effectRight'>Jennifer</b>
          </h1>
          <p className='fadein |effectLeft2'>{description}</p>
        </div>
      </div>
      <div className='centrado col s7 m9 l9 '>
        <div className='images'>
          <img className='effectUp imagePersonal' src='/images/jennifer.gif' />
        </div>
      </div>
    </>
  );
};

export default Slider1;
