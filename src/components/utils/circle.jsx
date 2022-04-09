import React from "react";

function circle() {
  return (
    <div>
      <div className='images'>
        <svg
          className='effectDown'
          viewBox='0 0 100 100'
          xmlns='http://www.w3.org/2000/svg'>
          <defs>
            <linearGradient id='geek'>
              <stop offset='25%' stopColor='#e100ff' />
              <stop offset='75%' stopColor='#8700ff' />
            </linearGradient>
          </defs>

          <circle cx='25' cy='25' r='25' fill="url('#geek')" />
        </svg>
      </div>{" "}
    </div>
  );
}

export default circle;
