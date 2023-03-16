/* Lab: Mine Automation and Virtual Reality
   Exp: Determination of Shock Pressure Loss in Presence of Tub and Estimation of Drag Co-efficient
	 File name: main.js
   Author:Prakriti Dhang
*/
var obcount;
var count = 0;
//var canvasc=7; /* inclned canvas count  */
var countanbtnclk; /* count stopanemometer button click */

var imgobj1=null;
var imgobj2=null;
var imgobj3=null;
var imgobj4=null;
var imgod=null;
/*function pgload(){
    
}*/

function showpanel(){
    document.getElementById('btninst').disabled=false;
    document.getElementById('opend').style.display="block";
    document.getElementById('yesbtn').disabled=true;
    document.getElementById('addtub').disabled=true;
    document.getElementById('closeduct').disabled=true;
    
    
     document.getElementById('wd').readOnly= true;
     document.getElementById('hd').readOnly= true;
     document.getElementById('ld').readOnly= true;
     document.getElementById('dd').readOnly= true;
     document.getElementById('twi').readOnly= true;
     document.getElementById('thi').readOnly= true;
    
    //$("#btninst").fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
   
   
}

function openduct(){ /*open duct */
var od=document.getElementById("ductcrop");
var odtop=1;
clearInterval(imgod);
  imgod = setInterval(frame, 7); /* frame is 5 denotes the speed of the movement*/
  function frame() {
    if (odtop == -45) { /* moves to 100 top positon*/
      clearInterval(imgod); /* stops to 100 postion*/
      document.getElementById('addtub').disabled=false;
      document.getElementById('closeduct').disabled=true;
      document.getElementById('openduct').disabled=true;
    } else {
      odtop--; 
      od.style.top = odtop + '%'; 
      document.getElementById('addtub').disabled=true;
      document.getElementById('closeduct').disabled=true;
    }
  }
}

function addtub(){ /*add tub */
document.getElementById('mduct').style.display="block";
document.getElementById('closeduct').disabled=true;
document.getElementById('addtubd').style.display="block";
}


function closeduct(){/*close duct */
var od=document.getElementById("ductcrop");
var odtop=-45;

clearInterval(imgod);
  imgobj1 = setInterval(frame, 7); /* frame is 5 denotes the speed of the movement*/
  function frame() {
    if (odtop == 1) { /* moves to 1 top positon*/
      clearInterval(imgobj1); /* stops at 1 postion*/
      document.getElementById('openduct').disabled=true;
      document.getElementById('closeduct').disabled=true;
      document.getElementById('addtubd').style.display="none";
      document.getElementById('contldevice1').style.display="block";
      document.getElementById('anemometerr').style.display="block";
      document.getElementById('user').style.display="block";
      document.getElementById('obsanem').style.display="block";
      document.getElementById('anmbtn').disabled=true;

    } else {
      odtop++; 
      od.style.top = odtop + '%'; 
      document.getElementById('openduct').disabled=true;
    }
  }
}

function moveplate1(){  /* move 1st  throtling plate to the required position*/

  var iplate1 = document.getElementById("contldevice1");   
  var orgtop = 300; /* initial position */
  clearInterval(imgobj1);
  imgobj1 = setInterval(frame, 5); /* frame is 5 denotes the speed of the movement*/
  function frame() {
    if (orgtop == 0) { /* moves to 100 top positon*/
      clearInterval(imgobj1); /* stops to 100 postion*/
      document.getElementById('anmbtn').disabled=false;
      

    } else {
      orgtop--; 
      iplate1.style.top = orgtop + '%'; 
       
    }
  }

  
  
  
}


function moveplate2(){  /* move 1st  throtling plate to the required position*/

  var iplate2 = document.getElementById("contldevice2");   
  var orgtop2 = 300; /* initial position */
  clearInterval(imgobj2);
  imgobj2 = setInterval(frame, 5); /* frame is 5 denotes the speed of the movement*/
  function frame() {
    if (orgtop2 == 0) { /* moves to 100 top positon*/
      clearInterval(imgobj2); /* stops to 100 postion*/
      document.getElementById('anmbtn').disabled=false;
    } else {
      orgtop2--; 
      iplate2.style.top = orgtop2 + '%'; 
       
    }
  }

  
  
  
}

function moveplate3(){  /* move 1st  throtling plate to the required position*/

var iplate3 = document.getElementById("contldevice3");   
var orgtop3 = 300; /* initial position */
clearInterval(imgobj3);
imgobj3 = setInterval(frame, 5); /* frame is 5 denotes the speed of the movement*/
function frame() {
  if (orgtop3 == 0) { /* moves to 100 top positon*/
    clearInterval(imgobj3); /* stops to 100 postion*/
    document.getElementById('anmbtn').disabled=false;
  } else {
    orgtop3--; 
    iplate3.style.top = orgtop3 + '%'; 
     
  }
}




}
function moveplate4(){  /* move 1st  throtling plate to the required position*/

var iplate4 = document.getElementById("contldevice4");   
var orgtop4 = 300; /* initial position */
clearInterval(imgobj4);
imgobj4 = setInterval(frame, 5); /* frame is 5 denotes the speed of the movement*/
function frame() {
  if (orgtop4 == 0) { /* moves to 100 top positon*/
    clearInterval(imgobj4); /* stops to 100 postion*/
    document.getElementById('anmbtn').disabled=false;
  } else {
    orgtop4--; 
    iplate4.style.top = orgtop4 + '%'; 
     
  }
}
}

function moveplate5(){  /* move 1st  throtling plate to the required position*/

var iplate4 = document.getElementById("contldevice5");   
var orgtop4 = 300; /* initial position */
clearInterval(imgobj4);
imgobj4 = setInterval(frame, 5); /* frame is 5 denotes the speed of the movement*/
function frame() {
  if (orgtop4 == 0) { /* moves to 100 top positon*/
    clearInterval(imgobj4); /* stops to 100 postion*/
    document.getElementById('anmbtn').disabled=false;
  } else {
    orgtop4--; 
    iplate4.style.top = orgtop4 + '%'; 
     
  }
}

}

function anmeasure(){  /* anemometer traversing button*/
   document.getElementById('measure').style.display="block";
   document.getElementById('yesbtn').disabled=true;
   document.getElementById('user').style.display="block";
   document.getElementById('anemometerr').style.display="block";
   document.getElementById('anmbtn').disabled=true;
   document.getElementById('msbtn').disabled=false;
   document.getElementById('obbtn').disabled=true;
  
   

    moveanemometer();
   

   
}
/* moves the anemometer to left- right and top-bottom direction */

var bottom = -70; /* initial positon */
var left = 595; /*initial position */
var temp = bottom;
var temp1 = left;
var goUp = true;
var goDown = false;
var goLeft = true;
var goRight = false;
var moveanemometerstick;

function moveanemometer(){

    moveanemometerstick= setInterval(moveanmetr, 60); /* setInterval (function, frames) */
       
 }
       
       
       function moveanmetr(){ 
        

        if(goUp) {
          temp++;
          if(temp == -10) {
              goUp =false;
              goDown = true;
              
          }
      } else if(goDown) {
          temp--;
          if(temp == -60) {
              goDown =false;
              goUp = true;
              
          }
      }
      $("#anemometerr").css("bottom",temp);
         
        // if(goRight) {
        //     temp1++;
         //    if(temp1 == 597) { /* move right*/
          //       goRight = false;
          //       goLeft = true;
          //   }
         //} else if(goLeft) {
          //   temp1--;
           //  if(temp1 == 593) { /* move left */
           //      goLeft = false;
            //     goRight = true;
            // }
         //}
        // $("#anemometerr").css("left",temp1);
 
       
 
     }



     var avgvel, prdiff, pf, ps, dragls;
function clckstopanm() {
    
    document.getElementById('obbtn').disabled=false; /* add observation btn */
    count++;
    countanbtnclk =count;

    if(countanbtnclk ==1){
    velread1 = (16 + ((16.15 - 16) * Math.random())).toFixed(2);
    document.getElementById('velr1').value=velread1;
    velread2 = (16 + ((16.55 - 16) * Math.random())).toFixed(2);
    document.getElementById('velr2').value=velread2;
    
    clearInterval(moveanemometerstick);
   
    /* Inclined manometer reading*/
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    let centerX = 2, centerY = 235;
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;
    ctx.beginPath();
    
    ctx.moveTo(centerX, 228);   //centerY-canvasc = 235-7
    
    
    ctx.lineTo(2, 240);
    ctx.stroke();
    document.getElementById('msbtn').disabled=true; /* stop anemometer button disables */
    prdiff=146.09;
    document.getElementById('pdi').value=prdiff;
    avgvel =(((parseFloat(velread1)) + (parseFloat(velread2)))/2).toFixed(2);
    document.getElementById('avi').value=avgvel;
    pf=196.06;
    document.getElementById('pfi').value=pf;
    ps=49.97;
    document.getElementById('psi').value=ps;
    dragls=15.99;
    document.getElementById('drglsi').value=dragls;
   }

   if(countanbtnclk ==2){
    velread1 = (15 + ((15.15 - 15) * Math.random())).toFixed(2);
    document.getElementById('velr1').value=velread1;
    velread2 = (15 + ((15.55 -15) * Math.random())).toFixed(2);
    document.getElementById('velr2').value=velread2;
    
    clearInterval(moveanemometerstick);
   
    /* Inclined manometer reading*/
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    let centerX = 2, centerY = 235;
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;
    ctx.beginPath();
    
    ctx.moveTo(centerX, 220);   //centerY-canvasc = 235-7
    
    
    ctx.lineTo(2, 240);
    ctx.stroke();
    document.getElementById('msbtn').disabled=true;
    avgvel =(((parseFloat(velread1)) + (parseFloat(velread2)))/2).toFixed(2);
    document.getElementById('avi').value=avgvel;
    prdiff=127.30;
    document.getElementById('pdi').value=prdiff;
    pf=170.31;
    document.getElementById('pfi').value=pf;
    ps=43.00;
    document.getElementById('psi').value=ps;
    dragls=13.89;
    document.getElementById('drglsi').value=dragls;
   }

   if(countanbtnclk ==3){
    velread1 = (17 + ((17.15 - 17) * Math.random())).toFixed(2);
    document.getElementById('velr1').value=velread1;
    velread2 = (17 + ((17.55 -17) * Math.random())).toFixed(2);
    document.getElementById('velr2').value=velread2;
   
    clearInterval(moveanemometerstick);
   
    /* Inclined manometer reading*/
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    let centerX = 2, centerY = 235;
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;
    ctx.beginPath();
    
    ctx.moveTo(centerX, 210);   //centerY-canvasc = 235-7
    
    
    ctx.lineTo(2, 240);
    ctx.stroke();
    document.getElementById('msbtn').disabled=true;
    prdiff=169.17;
    document.getElementById('pdi').value=prdiff;
    avgvel =(((parseFloat(velread1)) + (parseFloat(velread2)))/2).toFixed(2);
    document.getElementById('avi').value=avgvel;
   pf=218.60;
    document.getElementById('pfi').value=pf;
    ps=49.43;
    document.getElementById('psi').value=ps;
    dragls=17.83;
    document.getElementById('drglsi').value=dragls;
   }


   if(countanbtnclk ==4){
    velread1 = (17 + ((17.65 -17) * Math.random())).toFixed(2);
    document.getElementById('velr1').value=velread1;
    velread2 = (17 + ((17.95 - 17) * Math.random())).toFixed(2);
    document.getElementById('velr2').value=velread2;
  
    clearInterval(moveanemometerstick);
   
    /* Inclined manometer reading*/
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    let centerX = 2, centerY = 235;
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;
    ctx.beginPath();
    
    ctx.moveTo(centerX, 200);   //centerY-canvasc = 235-7
    
    
    ctx.lineTo(2, 240);
    ctx.stroke();
    document.getElementById('msbtn').disabled=true;
    prdiff=177.71;
    document.getElementById('pdi').value=prdiff;
    avgvel =(((parseFloat(velread1)) + (parseFloat(velread2)))/2).toFixed(2);
    document.getElementById('avi').value=avgvel;
    pf=218.15;
    document.getElementById('pfi').value=pf;
    ps=40.44;
    document.getElementById('psi').value=ps
    dragls=17.79;
    document.getElementById('drglsi').value=dragls;
   }

   if(countanbtnclk ==5){
    velread1 = (9 + ((9.15 -9) * Math.random())).toFixed(2);
    document.getElementById('velr1').value=velread1;
    velread2 = (9 + ((9.55 - 9) * Math.random())).toFixed(2);
    document.getElementById('velr2').value=velread2;
  
    clearInterval(moveanemometerstick);
   
    /* Inclined manometer reading*/
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    let centerX = 2, centerY = 235;
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;
    ctx.beginPath();
    
    ctx.moveTo(centerX, 190);   //centerY-canvasc = 235-7
    
    
    ctx.lineTo(2, 240);
    ctx.stroke();
    document.getElementById('msbtn').disabled=true;
    prdiff=34.18;
    document.getElementById('pdi').value=prdiff;
    avgvel =(((parseFloat(velread1)) + (parseFloat(velread2)))/2).toFixed(2);
    document.getElementById('avi').value=avgvel;
    pf=0.13;
    document.getElementById('pfi').value=pf;
    ps=0.13;
    document.getElementById('psi').value=ps;
    dragls=0.13;
    document.getElementById('drglsi').value=dragls;
   }

  }

 

  function showformula(){
   
    document.getElementById("formulacard").style.display="block";
    document.getElementById("exitinfo").style.display="block";
    document.getElementById("info").style.display="none"; 
   
 }
 
 function hideformula(){
    document.getElementById("formulacard").style.display="none";
    document.getElementById("info").style.display="block";
    document.getElementById("exitinfo").style.display="none";
 }