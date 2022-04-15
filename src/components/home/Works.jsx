import React from "react";

export const Works = () => {
  const arrowSlider1 = "/images/net-price-calculator1.png";
  return (
    <div class='horiz-scroll-wrapper'>
      <div class='horiz-scroll-inner'>
      <div className='contenedor'>
      <div className='my-image-class'
            style={{ "--hover-image":  `url('${arrowSlider1}')`  }}>
    </div>
      <div className="slide one">
           <article class='page'>
              <div class='wrapper'>
                <h4>01</h4>
                <h5>Calculadora de alquiler</h5>
                </div>
            </article>
      </div>
     
    </div>
       
        <div class='slide two'>
          <article class='page'></article>
        </div>
        <div class='slide three'>
          <article class='page'></article>
        </div>
        <div class='slide four'>
          <article class='page'></article>
        </div>
        <div class='slide five'>
          <article class='page'></article>
        </div>
      </div>
    </div>
  );
};
