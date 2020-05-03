console.log(`
Interactive Function Plotter
W3Cx: JS.0x
JavaScript Introduction

Developed by:
Joseph DeWoody

https://jpd61.github.io/function-plotter/

Repository:
https://github.com/jpd61/function-plotter
`);

var parameters = {
    target: '#myFunction',
    data: [{
      fn: 'sin(x)', 
      color: 'red'
   }],
    grid: true,
    yAxis: {domain: [-1, 1]},
    xAxis: {domain: [0, 2*Math.PI]}
  };
  
  function plot() {
    var f = document.querySelector("#function").value;
    var xMin = document.querySelector("#xMin").value;
    var xMax = document.querySelector("#xMax").value;
    var yMin = document.querySelector("#yMin").value;
    var yMax = document.querySelector("#yMax").value;
    var color = document.querySelector("#color").value;
    
    parameters.data[0].fn = f;
    parameters.xAxis.domain = [xMin, xMax];
    parameters.yAxis.domain = [yMin, yMax];
    parameters.data[0].color = color;
    
    functionPlot(parameters);
  }
  
  
  
  
  