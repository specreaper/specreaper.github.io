const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let x = 0;
let dx = (Math.random() * 5);
let y = 0;
let dy = (Math.random() * 5); 
let score = 0;

const player = {
    x : 60,
    y : 60,
    color: 'green',
    speed: 3
}

const enemy = {
    x : 200,
    y : 200,
}

const keys = {};

function drawRect(x,y) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'blue';
    ctx.fillRect(enemy.x,enemy.y,50,50);
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
    if(keys['s'] && player.y > 400){
    	player.y = 0;
    }
    if(keys['w'] && player.y < 0){
    	player.y = 400;
    } 
}

function moveEnemy(){
    enemy.x += dx;
    enemy.y += dy;

    if(enemy.x > 400){
        dx = dx * -1;
    }
    if(enemy.x < 0){
        dx = dx * -1;
    }

    if(enemy.y > 400){
        dy = dy * -1;
    }
    if(enemy.y < 0){
        dy = dy * -1;
    }
}

function drawScore(){
}

function animate() {
    score++;
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

