const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let x = 200;
let y = 200;
let dx = 2;
let dy = 3;
const moveSpeed = 3;

function drawRect(x,y) {
    console.log("drawing rect");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';
    ctx.fillRect(x,y,50,50);
    ctx.fill();
}
function 
function updateObjectPosition() {
            if (keys['w']) {
                objectY -= moveSpeed;
            }
            if (keys['s']) {
                objectY += moveSpeed;
            }
            if (keys['a']) {
                objectX -= moveSpeed;
            }
            if (keys['d']) {
                objectX += moveSpeed;
            }
}
function animate() {
    	x += dx;
	y += dy; 
	drawRect(x,y);

	if(x>=canvas.width-50){
		dx *= -1;
	}
	if (y>=canvas.height-50){
                dy *= -1;
        }
	if (x<=0) {
		dx *= -1;
	}
	if (y<=0) {
		dy *= -1;
	}

    requestAnimationFrame(animate);
}

//call our function
animate();
