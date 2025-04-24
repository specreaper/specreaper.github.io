const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let x = 0;
let y = 0;

//define functions
function drawRect(x,y) {
    console.log("drawing rect");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';
    ctx.fillRect(x,y,50,50);
    ctx.fill();
}

function animate() {
    	x = x + 1;
	y = y + 1; 
	drawRect(x,y);

	if(x>=350){
		x = x - 350;
	}

	if(y>=350){
                y = y - 350;
        }

    requestAnimationFrame(animate);
}

//call our function
animate();
