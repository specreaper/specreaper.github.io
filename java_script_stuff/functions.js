const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

function hi(name){
	console.log("hi " + name);
}
hi("nerd");

function f(x){
	console.log(x+1);
}
f(3);


function circle(x,y){
	ctx.arc(x,y,25,0,2*Math.PI);
	ctx.stroke();
	ctx.fill();
}
circle(100,100);

