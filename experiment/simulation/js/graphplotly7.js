/* Lab:exp_7_Determination of Shock Pressure Loss in Presence of Tub and Estimation of Drag Co-efficient
	 File name: graphplotly7.js
   Author:Prakriti Dhang
*/



var dataPointai =[];

var xArray = [];
var yArray = [];
var xValues = [];
var yValues = [];


 function showplot(){
    for (var tabrowindex = 1; tabrowindex < otable.rows.length; tabrowindex++) {
        var rwe1 = otable.rows[tabrowindex].cells;
         
        //dataPointai.push( {  y: parseFloat(rwe1[1].innerHTML), x:parseFloat(rwe1[2].innerHTML)});
        xArray.push(parseFloat(rwe1[4].innerHTML));
        yArray.push(parseFloat(rwe1[5].innerHTML));
        //alert(rwe1[2].innerHTML);
        //alert(rwe1[1].innerHTML);
    }
   
    var data = [
        {x:xArray, y:yArray, mode:"markers"}
        
      ];
      
      var layout = {
        xaxis: {range: [0, 250],dtick: 20, title: "Pf"},
        yaxis: {range: [0, 60],dtick: 10, title: "Ps"},  
        title: "Ps Vs Pf"
      };
      
      Plotly.newPlot("myPlot", data, layout);

 }




function showbestfitg(){
    for (var tabrowindex = 1; tabrowindex < otable.rows.length; tabrowindex++) {
      var rwe1 = otable.rows[tabrowindex].cells;
       
      //dataPointai.push( {  y: parseFloat(rwe1[1].innerHTML), x:parseFloat(rwe1[2].innerHTML)});
      xArray.push(parseFloat(rwe1[4].innerHTML));
      yArray.push(parseFloat(rwe1[5].innerHTML));
  }
  var xSum = xArray.reduce(function(a, b){return a + b;}, 0);
  var ySum = yArray.reduce(function(a, b){return a + b;}, 0);
  var slope = ySum / xSum;
  
  // Generate values
  var xValues = [];
  var yValues = [];
  for (var x = 0; x <= 250; x += 1) {
    xValues.push(x);
    yValues.push(x * slope);
  }

var data = [
    {x:xArray, y:yArray, mode:"markers"},
    {x:xValues, y:yValues, mode:"line"}
  ];
  
  var layout = {
    
    xaxis: {range: [0, 250], dtick: 20, title: "Pf"},
    yaxis: {range: [0, 60],  dtick: 10,  title: "Ps"},  
    title: "Best Fit"
  };
  
  Plotly.newPlot("myPlot", data, layout);
}