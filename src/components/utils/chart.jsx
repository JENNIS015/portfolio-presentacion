const data = {
  labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun"],
  datasets: [
    {
      label: "Crecimiento",
      data: [1, 15, 25, 30, 44, 100],
      fill: false,
      lineTension: 0.4,
      pointBorderWidth: 2,
      borderColor:'#dfb55e'
    }
    
  ]
}; 

 
  const options=[{
  options: {
    
    animations: {
      tension: {
        duration: 10000,
        easing: 'linear',
        from: 10,
        to: 0,
        loop: true
      }
    },
    scales: {
      y: { // defining min and max so hiding the dataset does not change scale range
        min: 0,
        max: 100
      }
    }
  }
 
}];


export  {data, options}



