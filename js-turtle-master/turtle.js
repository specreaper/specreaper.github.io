/// <reference path="./lib/Intellisense/js-turtle_hy.ts" />
//DOCUMENTATION: https://hanumanum.github.io/js-turtle/
/*
showGrid(20);      
forward(distance)  
right(angle)       
left(angle) 	   
goto(x,y) 	       
clear() 	       
penup() 	       
pendown() 	       
reset() 	       
angle(angle)	   
width(width)       

color(r,g,b)
color([r,g,b])
color("red")
color("#ff0000")
*/


showGrid(50); 
setSpeed(200);
width(5);
color("blue");

function square(size,x,y){
    penup();
    goto(x,y);
    pendown();
    forward(size);
    right(90);
    forward(size);
    right(90);
    forward(size);
    right(90);
    forward(size);
    right(90);
}

function triangle(size,x,y){
    penup();
    goto(x,y);
    pendown();
    forward(size);
    right(120);
    forward(size);
    right(120);
    forward(size);
    right(120);
}

square(100,0,0);
triangle(100,0,0);

