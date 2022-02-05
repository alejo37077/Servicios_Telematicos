var canvas = document.getElementById("canva");
var lienzo = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;


function DisCancha(){
 //Leer desde el HTML el objeto canvas
 var canvas = document.getElementById('canva');
     //Defina una variable donde dibujar
     var lienzo = canvas.getContext('2d');
     //Defina el color a utilizar
     lienzo.strokeStyle = 'rgb(0, 255, 0)';
     //Dibuja un rectángulo
     lienzo.strokeRect(10, 10, 580, 330);

     lienzo.strokeStyle="rgb(0,200,200)";
     lienzo.beginPath();
     lienzo.arc(305,170,50,0,2*Math.PI,true);
     lienzo.stroke();

     lienzo.strokeStyle = 'rgb(0, 200, 200)';
     lienzo.strokeRect(10, 95, 100, 160); 
     lienzo.strokeStyle = 'rgb(0, 200, 200)';
     lienzo.strokeRect(10, 119, 40, 110); 

     lienzo.strokeStyle = 'rgb(0, 200, 200)';
     lienzo.strokeRect(500, 95, 90, 160);
     lienzo.strokeStyle = 'rgb(0, 200, 200)';
     lienzo.strokeRect(550, 119, 40, 110);

     lienzo.fillStyle="rgb(200,0,10)";
     lienzo.beginPath();
     lienzo.arc(205,120,12,0,2*Math.PI,true);
     lienzo.fill();     

     lienzo.fillStyle="rgb(200,0,10)";
     lienzo.beginPath();
     lienzo.arc(400,120,12,0,2*Math.PI,true);
     lienzo.fill();  

 
}