import React from "react";
import { Line } from "react-chartjs-2";
import { data, options } from "../../utils/chart";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

function Slider3() {
  const title = "Estadistica & Realidades";
  const description = "Ayudando a las marcas a prosperar en el mundo digital";

  return (
    <>
      <div class='centrado col s12 m6 l6'>
        <div className='textSlider'>
          <h4 className='fadein effectLeft'>{title}</h4>
          <h1 className='secondary'>
            <b className='fadein effectLeft'>Soluciones</b>
            <span className='effectRight'>Creativas</span>
          </h1>
          <p className='fadein |effectLeft2'>{description}</p>
        </div>
      </div>

      <div class='centrado col s12 m6 l6'>
        <div className='chartSpace'>
          <Line data={data} options={options} />
        </div>
      </div>
    </>
  );
}

export default Slider3;
