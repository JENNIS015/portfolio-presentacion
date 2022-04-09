import React from "react";
import TechList from "../../utils/techList";
import CofeeAction from "../../utils/coffeImage";
function slider2() {
  const title = "conocimientos";

  return (
    <div>
    

      <div class='ingrid col s12 m6 l6'>
        <div className='text'>
          <h4 className='fadein effectLeft'>{title}</h4>
          <h1 className='third'>
            <span className='fadein effectLeft'>Skills</span>
            <b className='effectRight'>Coding</b>
          </h1>
        </div>
        <CofeeAction />
      </div>
      <div class='centrado col s12 m4 l4'>
        <TechList />
      </div>
    </div>
  );
}

export default slider2;
