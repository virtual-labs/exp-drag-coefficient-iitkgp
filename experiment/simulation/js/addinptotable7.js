/* Lab:exp_7_Determination of Shock Pressure Loss in Presence of Tub and Estimation of Drag Co-efficient
	 File name: addinptotable7.js
   Author:Prakriti Dhang
*/

var vel1, vel2,  avgveladd, pd,pft,pst,dglt;
var arr=[];

var nofob ;
var rows,x;
var countaddbtnclk;
var countatbtn=0;

function addresult(){
  countatbtn++;
    countaddbtnclk =countatbtn;
  
    if(countaddbtnclk==1){
    document.getElementById('contldevice2').style.display="block";
    document.getElementById('contldevice1').style.display="none";
    document.getElementById('obvtable7').style.display="block";
    vel1 = document.getElementById('velr1').value;
     
    vel2 = document.getElementById('velr2').value;
     
     
     avgveladd=document.getElementById('avi').value;
     pd=document.getElementById('pdi').value;
     pft=document.getElementById('pfi').value;
     pst=document.getElementById('psi').value;
     dglt=document.getElementById('drglsi').value;


      var tabrowindex=0;
 otable= document.getElementById('obtable7');

 arr[0] =vel1;
 arr[1] =vel2;
 arr[2]=avgveladd;
     arr[3]=pd;
     arr[4]=pft;
     arr[5]=pst;
     arr[6]=dglt;

 tabrowindex + 1;

var row = otable.insertRow(++tabrowindex); // Row increment
    for (var q = 0; q < 7; q++) {

        var cell = row.insertCell(q);
        cell.innerHTML = arr[q];
        //
    }
 /* clear the input area of all the readings; */
    document.getElementById('velr1').value='';
    document.getElementById('velr2').value='';
    document.getElementById('avi').value='';
    document.getElementById('pdi').value='';
    document.getElementById('pfi').value='';
    document.getElementById('psi').value='';
    document.getElementById('drglsi').value='';
    
        
   
   document.getElementById('obbtn').disabled=true; /*observation button disabled */


   /*  Scroll down and after 3000 ms scroll up  */
   document.body.scrollBy(0,500);
   document.documentElement.scrollBy(0,500);
   setTimeout(function(){
       document.body.scrollTop = 50;
       document.documentElement.scrollTop =50;
   }, 3000);

    }


    if(countaddbtnclk==2){

      document.getElementById('contldevice3').style.display="block";
      document.getElementById('contldevice2').style.display="none";
      document.getElementById('obvtable7').style.display="block";
    vel1 = document.getElementById('velr1').value;
     
    vel2 = document.getElementById('velr2').value;
     
      
      avgveladd=document.getElementById('avi').value;
     pd=document.getElementById('pdi').value;
     pft=document.getElementById('pfi').value;
     pst=document.getElementById('psi').value;
     dglt=document.getElementById('drglsi').value;

  var tabrowindex=1; 
 otable= document.getElementById('obtable7');

 arr[0] =vel1;
 arr[1] =vel2;
 arr[2]=avgveladd;
     arr[3]=pd;
     arr[4]=pft;
     arr[5]=pst;
     arr[6]=dglt;

 tabrowindex + 1;

var row = otable.insertRow(++tabrowindex); // Row increment
    for (var q = 0; q < 7; q++) {

        var cell = row.insertCell(q);
        cell.innerHTML = arr[q];
        //
    }
 /* clear the input area of all the readings; */
    document.getElementById('velr1').value='';
    document.getElementById('velr2').value='';
    document.getElementById('avi').value='';
    document.getElementById('pdi').value='';
    document.getElementById('pfi').value='';
    document.getElementById('psi').value='';
    document.getElementById('drglsi').value='';
    
        
   
   document.getElementById('obbtn').disabled=true; /*observation button disables */
   /*  Scroll down and after 3000 ms scroll up  */
    document.body.scrollBy(0,500);
    document.documentElement.scrollBy(0,500);
    setTimeout(function(){
        document.body.scrollTop = 50;
        document.documentElement.scrollTop =50;
    }, 3000);
      }


      if(countaddbtnclk==3){
        document.getElementById('contldevice4').style.display="block";
        document.getElementById('contldevice3').style.display="none";

        document.getElementById('obvtable7').style.display="block";
    vel1 = document.getElementById('velr1').value;
     
    vel2 = document.getElementById('velr2').value;
     
     
      avgveladd=document.getElementById('avi').value;
      pd=document.getElementById('pdi').value;
      pft=document.getElementById('pfi').value;
     pst=document.getElementById('psi').value;
     dglt=document.getElementById('drglsi').value;
     

  var tabrowindex=2; 
 otable= document.getElementById('obtable7');

 arr[0] =vel1;
 arr[1] =vel2;
 arr[2]=avgveladd;
     arr[3]=pd;
     arr[4]=pft;
     arr[5]=pst;
     arr[6]=dglt;

 tabrowindex + 1;

var row = otable.insertRow(++tabrowindex); // Row increment
    for (var q = 0; q < 7; q++) {

        var cell = row.insertCell(q);
        cell.innerHTML = arr[q];
        //
    }
 /* clear the input area of all the readings; */
    document.getElementById('velr1').value='';
    document.getElementById('velr2').value='';
    document.getElementById('avi').value='';
    document.getElementById('pdi').value='';
    document.getElementById('pfi').value='';
      document.getElementById('psi').value='';
      document.getElementById('drglsi').value='';
        
   
   document.getElementById('obbtn').disabled=true; /*observation button disables */
     /*  Scroll down and after 3000 ms scroll up  */
    document.body.scrollBy(0,500);
    document.documentElement.scrollBy(0,500);
    setTimeout(function(){
        document.body.scrollTop = 50;
        document.documentElement.scrollTop =50;
    }, 3000);
        }
 
 
  
        if(countaddbtnclk==4){
          document.getElementById('contldevice4').style.display="block";
          //document.getElementById('contldevice4').style.display="none";

          document.getElementById('obvtable7').style.display="block";
      vel1 = document.getElementById('velr1').value;
       
      vel2 = document.getElementById('velr2').value;
       
        
        avgveladd=document.getElementById('avi').value;
        pd=document.getElementById('pfi').value;
       pft=document.getElementById('pfi').value;
     pst=document.getElementById('psi').value;
     dglt=document.getElementById('drglsi').value;
       
  
    var tabrowindex=3; 
   otable= document.getElementById('obtable7');
  
   arr[0] =vel1;
   arr[1] =vel2;
   arr[2]=avgveladd;
     arr[3]=pd;
     arr[4]=pft;
     arr[5]=pst;
     arr[6]=dglt;
  
   tabrowindex + 1;
  
  var row = otable.insertRow(++tabrowindex); // Row increment
      for (var q = 0; q < 7; q++) {
  
          var cell = row.insertCell(q);
          cell.innerHTML = arr[q];
          //
      }
   /* clear the input area of all the readings; */
      document.getElementById('velr1').value='';
      document.getElementById('velr2').value='';
      document.getElementById('avi').value='';
      document.getElementById('pdi').value='';
      document.getElementById('pfi').value='';
      document.getElementById('psi').value='';
      document.getElementById('drglsi').value='';
      
      document.getElementById('graphd').style.display="block";
     
     document.getElementById('obbtn').disabled=true; /*observation button disabled */
     document.body.scrollBy(0,500);
    document.documentElement.scrollBy(0,500);
    setTimeout(function(){
        document.body.scrollTop = 50;
        document.documentElement.scrollTop =50;
    }, 3000);
          }
  
  
          /*if(countaddbtnclk==5){
            document.getElementById('contldevice5').style.display="block";
            //document.getElementById('contldevice4').style.display="none";
  
            document.getElementById('obvtable7').style.display="block";
        vel1 = document.getElementById('velr1').value;
         
        vel2 = document.getElementById('velr2').value;
         
          
          avgveladd=document.getElementById('avi').value;
          pd=document.getElementById('pfi').value;
         pft=document.getElementById('pfi').value;
       pst=document.getElementById('psi').value;
       dglt=document.getElementById('drglsi').value;
         
    
      var tabrowindex=4; 
     otable= document.getElementById('obtable7');
    
     arr[0] =vel1;
     arr[1] =vel2;
     arr[2]=avgveladd;
     arr[3]=pd;
     arr[4]=pft;
     arr[5]=pst;
     arr[6]=dglt;
    
     tabrowindex + 1;
    
    var row = otable.insertRow(++tabrowindex); // Row increment
        for (var q = 0; q < 7; q++) {
    
            var cell = row.insertCell(q);
            cell.innerHTML = arr[q];
            //
        }*/
     /* clear the input area of all the readings; */
        /*document.getElementById('velr1').value='';
        document.getElementById('velr2').value='';
        document.getElementById('avi').value='';
        document.getElementById('pdi').value='';
        document.getElementById('pfi').value='';
        document.getElementById('psi').value='';
        document.getElementById('drglsi').value='';*/
        
            
       
       //document.getElementById('obbtn').disabled=true; /*observation button disabled */
       /*document.body.scrollBy(0,500);
    document.documentElement.scrollBy(0,500);
    setTimeout(function(){
        document.body.scrollTop = 50;
        document.documentElement.scrollTop =50;
    }, 3000);
       
      document.getElementById('formulashow').style.display="none";
            }*/

    /* scroll down */
   /* document.body.scrollBy(0,500);
    document.documentElement.scrollBy(0,500);*/


    
  }

    

       
       
       
      


