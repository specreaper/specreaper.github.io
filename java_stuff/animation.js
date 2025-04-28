const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let x = 200;
let dx = (Math.random() * 5);
let y = 200;
let dy = (Math.random() * 5); 

const player = {
    x : 60,
    y : 60,
    color: 'green',
    speed: 3
};

const keys = {};

function drawRect(x,y) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';
    ctx.fillRect(x,y,50,50);
    ctx.fill();
}

function drawPlayer(){
    ctx.fillStyle = player.color;
    ctx.beginPath();
    ctx.arc(
        player.x, //accessing the variable called x inside the player object
        player.y,
        20,
        0,
        2*Math.PI
    );
    ctx.fill();
}

function movePlayer(){
    if(keys['s']){
        player.y += player.speed;
    }
    if(keys['w']){
        player.y -= player.speed;
    }
    if(keys['a']){
        player.x -= player.speed;
    }
    if(keys['d']){
        player.x += player.speed;
    }
}

function moveEnemy(){
    x = x + dx;
    y = y + dy;

    if(x > 400){
        dx = dx * -1;
    }
    if(x < 0){
        dx = dx * -1;
    }

    if(y > 400){
        dy = dy * -1;
    }
    if(y < 0){
        dy = dy * -1;
    }
}

function animate() {
    drawRect(x,y);
    movePlayer();
    drawPlayer();
    moveEnemy();

    requestAnimationFrame(animate);
}

function handleKeyPress(e){
    keys[e.key] = true;
}


document.addEventListener('keydown', handleKeyPress);

document.addEventListener('keyup', (e) => {
    keys[e.key] = false;
});

animate();

