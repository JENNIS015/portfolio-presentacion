import React from "react";
import { Line } from "react-chartjs-2";
import { data, options } from "../../utils/chart";
import Circle from "../../utils/circle";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

function Slider3() {
  const title = "Siempre explorando..";
  const description = "Ayudando a las marcas a prosperar en el mundo digital";

  return (
    <>
      <div class='centrado col s12 m6 l6'>
         <div className='chartSpace'>
          <Line data={data} options={options} />
          <div> 
        
        </div></div>
      </div>
      <div class='centrado col s12 m6 l6'>
        <div className='textSlider'>
          <h4 className='right fadein effectLeft'>{title}</h4>
          <h1 className='secondary'>
            <span className='fadein effectLeft'>Soluciones</span>
            <b className='effectRight'>Personalizadas</b>
          </h1>
          <p className='right fadein |effectLeft2'>{description}</p>
        </div> 
      </div>
    </>
  );
}

export default Slider3;
