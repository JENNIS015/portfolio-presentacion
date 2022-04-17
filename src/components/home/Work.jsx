import React from "react";


import WorkPortfolio from "./WorkPortfolio";

const Work = () => {

  const portfolio=[{
    subheading:"Portfolios",
    heading : "Abogados",
    footer :"Sitio de presentación",
    image :"/images/abogados.png"
  },
  {
    subheading:"Product design",
    heading : "LiveControl",
    footer :"Democratizing Video Production",
    image :"/images/1.jpg"
  },
  {
    subheading:"Product design",
    heading : "LiveControl",
    footer :"Democratizing Video Production",
    image :"/images/1.jpg"
  },
  {
    subheading:"Product design",
    heading : "LiveControl",
    footer :"Democratizing Video Production",
    image :"/images/1.jpg"
 }]

  return (
    <>
     <div className="container">   
      <div className="row block">
    <h1 className="menor ce">Trabajos<span>Realizados</span></h1>
 
    {  portfolio.map(work => (
    <WorkPortfolio subheading={work.subheading} heading={work.heading} footer={work.footer} image={work.image} />
  )) }
 
     </div>  
     
     
  

 </div>
</>
  )
};

export default Work;
