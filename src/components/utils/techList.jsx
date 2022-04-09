import React from "react";
import { BounceInDown } from "./animations";

const TechList=()=> {
  return (
    <div id='techList'>
      <BounceInDown>
        <h6 class='react'>react</h6>
      </BounceInDown>
      <h6 class='javascript'>javascript</h6>

      <div className='flex'>
        <BounceInDown>
          <h6 class='html5'>html5</h6>
        </BounceInDown>
        <BounceInDown>
          <h6 class='wordpress'>wordpress</h6>
        </BounceInDown>
        <h6 class='css3'>css</h6>
      </div>
      <h6>
        <span className='fadein effectLeft'>My</span>
        <b className='effectRight skills'>Skills</b>
      </h6>
      <h6 class='express'>express</h6>
      <div className='flex'>
        <h6 class='node'>node</h6>
        <h6 class='mongodb'>mongodb</h6>
      </div>
      <h6 class='python'>python</h6>
      <h6 class='sql'>sql</h6>
    </div>
  );
}

export default TechList;
