const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");


//define functions
function drawRect(x,y) {
    console.log("drawing rect");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';
    ctx.fillRect(x,y,50,50);
    ctx.fill();
}

function animate() {
    drawRect(50,50);

    // TODO: Add some code here 
    //  that will change the rectangle's position

    requestAnimationFrame(animate);
}

//call our function
animate();
