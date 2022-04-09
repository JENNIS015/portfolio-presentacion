import React from "react";
import ArrowDown from "../../utils/arrowDown";

export default function SliderBase({sliderNumber}) {
  return (

      <div className='appSlider'>
        <div className='container'>
          <div className='slider'>
            <div class='row'>
              {sliderNumber}
            </div>
          </div>
          <ArrowDown />
        </div>
      </div>
  );
}
