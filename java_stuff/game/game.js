const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let x = 0;
let y = 0;
let dy = (Math.random() * 5); 
let score = 0;
let gamerunning = true;

const player = {
    x : 60,
    y : 60,
    color: 'green',
    speed: 3,
}

const enemy = {
    x : (Math.random() * 400),
    y : 0,
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
    enemy.y += dy;

    if(enemy.y > 400){
	enemy.y = 0;
	dy = (Math.random() * 5);
	enemy.x = (Math.random() * 400);
    }
}

let px_max = player.x + 20;
let px_min = player.x;
let py_max = player.y + 20;
let py_min = player.y;

let ex_max = enemy.x + 50;
let ex_min = enemy.x;
let ey_max = enemy.y + 50;
let ey_min = enemy.y;

function hit(){
	if(px_min < ex_max && px_max > ex_min && py_min < ey_max && py_max > ey_min) {
		gamerunning = false;
	}
}

function drawScore(){
    ctx.font = "10px Arial";
    ctx.fillText(Math.floor(score/60), 10,10);
}

function animate() {
	if(gamerunning){
		score++;
		hit();
		drawScore();
    		drawRect(x,y);
    		movePlayer();
    		drawPlayer();
    		moveEnemy();
	}
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
