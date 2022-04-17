import React from "react";
import { Link } from "react-router-dom";
function WorkPortfolio({ subheading, heading, image,footer }) {

    
  return (



        <div className="col s12 m6 l6   margin-top-button-30">
 <Link className="item card" to="#">
        <div
          role="listitem"
          className="col-item-wrapper  w-inline-block"
          style={{
            "background-image": `url('${image}')`,
            "background-size": "cover",
            "filter":"grayscale(1)"
          }}
        >
       
          <div class="work-cms_top-wrapper">
            <div class="styled-subheading-wrapper">
              <div class="styled-subheading-circle"></div>
              <p class="styled-subheading">{subheading}</p>
            </div>
          </div>
          <div class="work-cms_bottom-wrapper">
            <div class="work-cms_heading">{heading} </div>
            <div class="work-cms_line-wrapper"></div>
            <div>{footer}</div>
          </div>
        </div>  </Link>
      </div>


// <div className="col s12 m6 l6 cardBody">
// <Link to="#">

// <div class="card">
// 		<div class="card-img">
// 			<img src={image} alt="" srcset=""/>
// 		</div>
// 		<div class="card-body">
// 			<h4>{heading}</h4>
// 			<p>{subheading}</p>
// 			<div class="card-body-footer">
// 				<div>{footer}</div>
			
// 			</div>
// 		</div>
// 		<div class="card-footer">
 
// 			<p>Creation of <span> Jules Wyvern </span></p>
//             </div>	</div></Link>
// 	</div>
  );
}

export default WorkPortfolio;
