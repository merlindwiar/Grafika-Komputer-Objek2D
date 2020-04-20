var canvas=document.getElementById('canvas');
var ctx=canvas.getContext('2d');

canvas.width=canvas.scrollWidth;
canvas.height=canvas.scrollHeight;

//bawah1
ctx.fillStyle='#000035';
ctx.fillRect(60,265,100,150);

//tutup1
ctx.fillStyle='yellow';
ctx.fillRect(60,245,99,20);
ctx.strokeStyle="black";
ctx.lineWidth=1;
ctx.strokeRect(61,245,98,20);

//pegangan1
ctx.fillStyle='yellow';
ctx.fillRect(103,235,10,10);
ctx.strokeStyle="black";
ctx.lineWidth=1;
ctx.strokeRect(103,235,10,10);

//bawah2
ctx.fillStyle='#000035';
ctx.fillRect(250,265,100,150);

//tutup2
ctx.fillStyle='yellow';
ctx.translate(273,-127);
ctx.rotate(75 * Math.PI/360);
ctx.fillRect(200,245,99,20); 
ctx.strokeStyle="black";
ctx.lineWidth=1;
ctx.strokeRect(200,245,99,20); 

//pegangan2
ctx.fillStyle='yellow';
ctx.fillRect(245,235,10,10); 
ctx.strokeStyle="black";
ctx.lineWidth=1;
ctx.strokeRect(245,235,10,10); 
