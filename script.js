var canvas=document.getElementById('canvas');
var ctx=canvas.getContext('2d');

canvas.width=canvas.scrollWidth;
canvas.height=canvas.scrollHeight;

//text
ctx.font = '23pt Times new roman';
ctx.fillStyle = 'black';
ctx.fillText('Grafika Komputer', 500, 40);
ctx.font = '17pt Times new roman';
ctx.fillStyle = 'black';
ctx.fillText('Tugas Kelompok', 535, 80);
ctx.fillText('Hurin In Dinnar Saputri 361855401099, Merlin Dwi Arizka 361855401106, Annisa Nur Indayani 361855401107', 130, 120);

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


//bawah3
ctx.fillStyle='#000035';
ctx.translate(-50,200);
ctx.rotate(-75 * Math.PI/360);
ctx.fillRect(325,265,100,150);


//tutup3
ctx.fillStyle='yellow';
ctx.translate(670,-159);
ctx.rotate(Math.PI/2);
ctx.fillRect(325,245,99,20); 
ctx.strokeStyle="black";
ctx.lineWidth=1;
ctx.strokeRect(325,245,99,20); 

//pegangan3
ctx.fillStyle='yellow';
ctx.fillRect(370,235,10,10); 
ctx.strokeStyle="black";
ctx.lineWidth=1;
ctx.strokeRect(370,235,10,10);  
