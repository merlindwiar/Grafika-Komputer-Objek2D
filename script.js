var canvas=document.getElementById('canvas');
var ctx=canvas.getContext('2d');

canvas.width=canvas.scrollWidth;
canvas.height=canvas.scrollHeight;

//create gradient
// var grd=ctx.createLinierGradient();
// grd.addColorStop(0,"#00ff99");
// grd.addColorStop(1,"#003399");


ctx.beginPath();
ctx.moveTo(630,145);
ctx.lineTo(630,145);
ctx.lineTo(720,145);
ctx.lineTo(720,275);
ctx.lineTo(630,275);
ctx.fillStyle='#000035';
ctx.fill();