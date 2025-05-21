const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let x = 0;
let y = 0;
let dy = (Math.random() * 5) + 1; 
let score = 0;
let gamerunning = true;

const player = {
    	x : 200,
    	y : 300,
    	speed: 3,
}

const enemy = {
    	x : (Math.random() * 400),
	y : 0,
	color: 'silver',
}

const keys = {};

function drawEnemy(x,y) {
	ctx.fillStyle = enemy.color;
	ctx.fillRect(enemy.x,enemy.y,50,20);
	ctx.fillRect(enemy.x+15,enemy.y+20,20,5);
	ctx.fillRect(enemy.x+10,enemy.y+25,30,15);
}

function drawPlayer(){
    	
	//ctx.beginPath();
    	//ctx.arc(player.x, player.y, 20, 0, 2*Math.PI);
    	//ctx.fill();
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
    	if(keys['d'] && player.x > 500){
    		player.x = 0;
    	}
	if(keys['a'] && player.x < 0){
	    player.x = 500;
  	}
	if(keys['s'] && player.y >= 500){
        	player.y -= player.speed;
    	}

}

function moveEnemy(){
    enemy.y += dy;

    if(enemy.y > 500){
	enemy.y = 0;
	dy = (Math.random() * 5) + 2;
	enemy.x = (Math.random() * 400);
    }
}

function hit(){
	let px_max = player.x + 20;
	let px_min = player.x - 20;
	let py_max = player.y + 20;
	let py_min = player.y - 20;

	let ex_max1 = enemy.x + 50;
	let ex_min1 = enemy.x;
	let ey_max1 = enemy.y + 20;
	let ey_min1 = enemy.y;
	let ex_max2 = enemy.x + 40;
        let ex_min2 = enemy.x + 10;
        let ey_max2 = enemy.y + 40;
        let ey_min2 = enemy.y + 20;

	if(px_min < ex_max1 && px_max > ex_min1 && py_min < ey_max1 && py_max > ey_min1) {
		gamerunning = false;
	}
	if(px_min < ex_max2 && px_max > ex_min2 && py_min < ey_max2 && py_max > ey_min2) {
                gamerunning = false;
        }
}

function drawScore(){
	ctx.fillStyle = 'black';
	ctx.font = "30px Arial";
	ctx.fillText(Math.floor(score/60), 10,30);
}

function drawGameOver(){
	ctx.fillStyle = 'red';
	ctx.font = "50px Arial";
	ctx.fillText("GAME OVER", 100,200);
	ctx.fillText("your score is: " + Math.floor(score/60), 100,260);
}

function animate() {
	if(gamerunning){
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		score++;
		hit();
    		drawEnemy();
    		movePlayer();
    		drawPlayer();
    		moveEnemy();
		drawScore();
	}
	else{
		drawGameOver();
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
