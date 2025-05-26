const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let x = 0;
let y = 0;
let dy = 0; 
let score = 0;
let gamerunning = true;
let ground = true;

const player = {
    	x : 250,
    	y : 410,
	dy : 0,
    	speed : 3,
	jump : -5,
	gravity : 0.1,
	ground : true,
}

const enemy = {
    	x : (Math.random() * 400),
	y : 0,
	dy : (Math.random() * 5) + 1,
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
	//Facing Right
	if(keys['d']){
 		ctx.fillStyle = 'white';
		ctx.fillRect(player.x,player.y,30,20);
		ctx.fillRect(player.x+25,player.y-10,10,20);
		ctx.fillStyle = 'orange';
		ctx.fillRect(player.x+35,player.y-5,10,5);
		ctx.fillStyle = 'yellow';
		ctx.fillRect(player.x+15,player.y+20,5,15);
		ctx.fillRect(player.x+15,player.y+30,10,5);
	}
	//Facing Left
	else if(keys['a']){
		ctx.fillStyle = 'white';
                ctx.fillRect(player.x,player.y,30,20);
                ctx.fillRect(player.x-5,player.y-10,10,20);
                ctx.fillStyle = 'orange';
                ctx.fillRect(player.x-15,player.y-5,10,5);
                ctx.fillStyle = 'yellow';
                ctx.fillRect(player.x+15,player.y+20,5,15);
                ctx.fillRect(player.x+10,player.y+30,10,5);
	}
	//Facing Default
	else{
		ctx.fillStyle = 'white';
                ctx.fillRect(player.x,player.y,30,20);
                ctx.fillRect(player.x+25,player.y-10,10,20);
                ctx.fillStyle = 'orange';
                ctx.fillRect(player.x+35,player.y-5,10,5);
                ctx.fillStyle = 'yellow';
                ctx.fillRect(player.x+15,player.y+20,5,15);
                ctx.fillRect(player.x+15,player.y+30,10,5);
	}
}

function drawBackground(){
	ctx.fillStyle = 'cyan';
	ctx.fillRect(0,0,500,500);
	ctx.fillStyle = 'green';
	ctx.fillRect(0,440,500,60);
}

function movePlayer(){
    	if(keys[' '] && player.ground){
	 	player.dy = player.jump;
		player.ground = false;
	}
	player.dy += player.gravity;
	player.y += player.dy;
	if(player.y >= 410){
		player.dy = 0;
		player.y = 410;
		player.ground = true;
	}
	
    	if(keys['a']){
        	player.x -= player.speed;
    	}
    	if(keys['d']){
        	player.x += player.speed;
    	}
    	if(keys['d'] && player.x > 500){
    		player.x -= player.speed;
    	}
	if(keys['a'] && player.x < 0){
	    player.x += player.speed;
  	}
	if(keys['s'] && player.y >= 410){
        	player.y -= player.speed;
    	}

}

function moveEnemy(){
    enemy.y += enemy.dy;

    if(enemy.y > 500){
	enemy.y = 0;
	enemy.dy = (Math.random() * 5) + 2;
	enemy.x = (Math.random() * 400);
    }
}

function hit(){
	//Facing Right Hitbox
	//Body
	let px_max1 = player.x + 30;
	let px_min1 = player.x;
	let py_max1 = player.y + 20;
	let py_min1 = player.y;
	//Head
	let px_max2 = player.x + 35;
        let px_min2 = player.x + 25;
        let py_max2 = player.y + 10;
        let py_min2 = player.y - 10;
	//Legs
	let px_max3 = player.x + 25;
        let px_min3 = player.x + 15;
        let py_max3 = player.y + 40;
        let py_min3 = player.y + 20;

	//Facing Left Hitbox
	//Body
        let px_max4 = player.x + 30;
        let px_min4 = player.x;
        let py_max4 = player.y + 20;
        let py_min4 = player.y;
        //Head
        let px_max5 = player.x + 5;
        let px_min5 = player.x - 5;
        let py_max5 = player.y + 10;
        let py_min5 = player.y - 10;
        //Legs
        let px_max6 = player.x + 20;
        let px_min6 = player.x + 10;
        let py_max6 = player.y + 40;
        let py_min6 = player.y + 20;

	//Enemy Hitbox
	let ex_max1 = enemy.x + 50;
	let ex_min1 = enemy.x;
	let ey_max1 = enemy.y + 20;
	let ey_min1 = enemy.y;
	let ex_max2 = enemy.x + 40;
        let ex_min2 = enemy.x + 10;
        let ey_max2 = enemy.y + 40;
        let ey_min2 = enemy.y + 20;
	
	//Collision For Facing Right
	if(keys['d']){	
		if(px_min1 < ex_max1 && px_max1 > ex_min1 && py_min1 < ey_max1 && py_max1 > ey_min1) {
			gamerunning = false;
		}
		if(px_min1 < ex_max2 && px_max1 > ex_min2 && py_min1 < ey_max2 && py_max1 > ey_min2) {
                	gamerunning = false;
        	}
		if(px_min2 < ex_max1 && px_max2 > ex_min1 && py_min2 < ey_max1 && py_max2 > ey_min1) {
        	        gamerunning = false;
        	}
        	if(px_min2 < ex_max2 && px_max2 > ex_min2 && py_min2 < ey_max2 && py_max2 > ey_min2) {
        	        gamerunning = false;
        	}
		if(px_min3 < ex_max1 && px_max3 > ex_min1 && py_min3 < ey_max1 && py_max3 > ey_min1) {
                        gamerunning = false;
                }
                if(px_min3 < ex_max2 && px_max3 > ex_min2 && py_min3 < ey_max2 && py_max3 > ey_min2) {
                        gamerunning = false;
                }
	}
	//Collision For Facing Left
	else if(keys['a']){
		if(px_min4 < ex_max1 && px_max4 > ex_min1 && py_min4 < ey_max1 && py_max4 > ey_min1) {
                        gamerunning = false;
                }
                if(px_min4 < ex_max2 && px_max4 > ex_min2 && py_min4 < ey_max2 && py_max4 > ey_min2) {
                        gamerunning = false;
                }
                if(px_min5 < ex_max1 && px_max5 > ex_min1 && py_min5 < ey_max1 && py_max5 > ey_min1) {
                        gamerunning = false;
                }
                if(px_min5 < ex_max2 && px_max5 > ex_min2 && py_min5 < ey_max2 && py_max5 > ey_min2) {
                        gamerunning = false;
                }
                if(px_min6 < ex_max1 && px_max6 > ex_min1 && py_min6 < ey_max1 && py_max6 > ey_min1) {
                        gamerunning = false;
                }
                if(px_min6 < ex_max2 && px_max6 > ex_min2 && py_min6 < ey_max2 && py_max6 > ey_min2) {
                        gamerunning = false;
                }
	}
	//Collision For Facing Default
	else{
		if(px_min1 < ex_max1 && px_max1 > ex_min1 && py_min1 < ey_max1 && py_max1 > ey_min1) {
                        gamerunning = false;
                }
                if(px_min1 < ex_max2 && px_max1 > ex_min2 && py_min1 < ey_max2 && py_max1 > ey_min2) {
                        gamerunning = false;
                }
                if(px_min2 < ex_max1 && px_max2 > ex_min1 && py_min2 < ey_max1 && py_max2 > ey_min1) {
                        gamerunning = false;
                }
                if(px_min2 < ex_max2 && px_max2 > ex_min2 && py_min2 < ey_max2 && py_max2 > ey_min2) {
                        gamerunning = false;
                }
                if(px_min3 < ex_max1 && px_max3 > ex_min1 && py_min3 < ey_max1 && py_max3 > ey_min1) {
                        gamerunning = false;
                }
                if(px_min3 < ex_max2 && px_max3 > ex_min2 && py_min3 < ey_max2 && py_max3 > ey_min2) {
                        gamerunning = false;
                }
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
		drawBackground();
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
