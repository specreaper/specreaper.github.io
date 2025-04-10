const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "blue";
ctx.fillRect(0,0,400, 300);

ctx.fillStyle = "white";
ctx.fillRect(0,300,400,400);

function circle(x,y,r){
	ctx.beginPath();
	ctx.arc(x,y,r,0,2*Math.PI);
	ctx.fill();
}

function snowman(x,y){
	circle(x,y,30);
	circle(x,y+60,40);
	circle(x,y+120,50);
}

snowman(100,100);

