var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;

//text
ctx.font = 'bold 25pt Times new roman';
ctx.fillStyle = '#00264D';
ctx.fillText('Grafika Komputer', canvas.width/2-120, 40);
ctx.font = 'bold 20pt Times new roman';
ctx.fillStyle = '#02386E';
ctx.fillText('Gerakan Tutup Toples Terbuka dan Tertutup', canvas.width/2-260, 80);
ctx.font = '10pt Times new roman';
ctx.fillStyle = '#00498D';
ctx.fillText('Hurin In Dinnar Saputri 361855401099, Merlin Dwi Arizka 361855401106, Annisa Nur Indayani 361855401107', canvas.width/2-300, 120);

//bawah1
ctx.rect(60, 265, 100, 150);
var lGrad1 = ctx.createLinearGradient(160, 150, 260, 350);
lGrad1.addColorStop(0, '#7AD7F0');
lGrad1.addColorStop(0.75, '#02386E');
lGrad1.addColorStop(1, '#000035');
ctx.fillStyle = lGrad1;
ctx.fill();

//tutup1
ctx.fillStyle = 'yellow';
ctx.fillRect(60, 245, 99, 20);
ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.strokeRect(61, 245, 98, 20);

//pegangan1
ctx.fillStyle = 'yellow';
ctx.fillRect(103, 235, 10, 10);
ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.strokeRect(103, 235, 10, 10);

//bawah2
ctx.rect(250, 265, 100, 150);
var lGrad2 = ctx.createLinearGradient(165, 265, 260, 450);
lGrad2.addColorStop(0, '#7AD7F0');
lGrad2.addColorStop(0.75, '#02386E');
lGrad2.addColorStop(1, '#000035');
ctx.fillStyle = lGrad2;
ctx.fill();

//tutup2
ctx.fillStyle = 'yellow';
ctx.translate(273, -127);
ctx.rotate(75 * Math.PI / 360);
ctx.fillRect(200, 245, 99, 20);
ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.strokeRect(200, 245, 99, 20);

//pegangan2
ctx.fillStyle = 'yellow';
ctx.fillRect(245, 235, 10, 10);
ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.strokeRect(245, 235, 10, 10);


//bawah3

ctx.translate(-50, 200);
ctx.rotate(-75 * Math.PI / 360);
ctx.rect(325, 265, 100, 150);
var lGrad3 = ctx.createLinearGradient(165, 165, 160, 350);
lGrad3.addColorStop(0, '#7AD7F0');
lGrad3.addColorStop(0.75, '#02386E');
lGrad3.addColorStop(1, '#000035');
ctx.fillStyle = lGrad3;
ctx.fill();

//tutup3
ctx.fillStyle = 'yellow';
ctx.translate(670, -159);
ctx.rotate(Math.PI / 2);
ctx.fillRect(325, 245, 99, 20);
ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.strokeRect(325, 245, 99, 20);

//pegangan3
ctx.fillStyle = 'yellow';
ctx.fillRect(370, 235, 10, 10);
ctx.strokeStyle = "black";
ctx.lineWidth = 1;
ctx.strokeRect(370, 235, 10, 10);

let imageObj=new Image();
imageObj.addEventListener('load',function(){
    ctx.drawImage(imageObj,-770,430,200,200);
    ctx.drawImage(imageObj,-580,430,200,200);
    ctx.drawImage(imageObj,-392,430,200,200);
},false);
imageObj.src='kerupuk.png';

ctx.font = '13pt Berlin Sans FB Demi';
ctx.fillStyle = 'red';
ctx.rotate(-Math.PI/2);
ctx.fillText('DOA IBU', -704, 450);
ctx.fillText('DOA IBU', -514, 450);
ctx.fillText('DOA IBU', -328, 450);
