var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;

//text
ctx.font = '25pt Times new roman';
ctx.fillStyle = '#000035';
ctx.fillText('Grafika Komputer', 500, 40);
ctx.font = '20pt Times new roman';
ctx.fillStyle = '#000035';
ctx.fillText('Gerakan Gelas Terbuka dan Tertutup', 450, 80);
ctx.fillText('Hurin In Dinnar Saputri 361855401099, Merlin Dwi Arizka 361855401106, Annisa Nur Indayani 361855401107', 80, 120);

//bawah1
ctx.rect(60, 265, 100, 150);
var lGrad1 = ctx.createLinearGradient(160, 150, 260, 350);
lGrad1.addColorStop(0, '#7AD7F0');
// lGrad1.addColorStop(0.5, '#02386E');
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
// lGrad2.addColorStop(0.5, '#02386E');
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
// lGrad3.addColorStop(0.5, '#02386E');
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