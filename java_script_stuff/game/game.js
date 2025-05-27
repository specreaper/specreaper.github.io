const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "https://fonts.googleapis.com/css2?family=Jersey+10&display=swap";
document.head.appendChild(link);

let x = 0;
let y = 0;
let dy = 0; 
let score = 0;
let gamerunning = true;
let ground = true;
const maxEnemy = 10;

const player = {
    	x : 250,
    	y : 410,
	dy : 0,
    	speed : 3,
	jump : -5,
	gravity : 0.1,
	ground : true,
}
const enemy = [];
	//for(let i=0; i<2; i++){
		enemy.push({
			x : (Math.random() * 450),
        		y : -45,
        		dy : (Math.random() * 5) + 1,
        		color: 'silver',
		});
	//}
function spawnEnemy() {
	if (enemy.length < maxEnemy) {
        	enemy.push({
        		x: Math.random() * 450,
        		y: -45,
			dy: (Math.random() * 5) + 1,
        		color: 'silver',
        	});
    	}
}

const grass = {
	spacing : 10,
	height : ((Math.random() * 2) + 3) * -1,
}
const cloud = [];
	cloud.push({
		x : -120,
		y : (Math.random() * 120) + 40,
		speed : (Math.random() * 0.5) + 0.5,
	});
const keys = {};

function drawEnemy(enemy){
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
function drawCloud(cloud){
	ctx.fillStyle = 'white';
        ctx.fillRect(cloud.x,cloud.y+20,100,30);
        ctx.fillRect(cloud.x+15,cloud.y,70,25);
        cloud.x -= cloud.speed;
        if(cloud.x < -110){
                cloud.y = (Math.random() * 120) + 40;
                cloud.x = 550;
        }
}
function drawBackground(){
	//sky
	ctx.fillStyle = 'cyan';
	ctx.fillRect(0,0,500,500);
	//clouds
	for(let i = 0; i < cloud.length; i++){
		drawCloud(cloud[i]);
	}
	//ground
	ctx.fillStyle = 'green';
	ctx.fillRect(0,440,500,60);
	//tree
	ctx.fillRect(20,340,120,-30);
	ctx.fillRect(20,310,120,-30);
	ctx.fillRect(20,280,120,-40);
	ctx.fillStyle = 'brown';
	ctx.fillRect(65,440,30,-100);
	//rock
	ctx.fillStyle = 'darkgrey';
	ctx.fillRect(380,440,90,-60);
	ctx.fillRect(390,380,70,-15);
	ctx.fillRect(470,440,10,-45);
	//grass
	ctx.fillStyle = 'green';
	for(let i=0; i <= canvas.width; i+=grass.spacing){
		ctx.fillRect(i,440,3,grass.height);
		grass.height = ((Math.random() * 2) + 3) * -1;
	}

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
    	if(keys['d'] && player.x > 455){
    		player.x -= player.speed;
    	}
	if(keys['a'] && player.x < 15){
	    player.x += player.speed;
  	}
	if(keys['s'] && player.y >= 410){
        	player.y -= player.speed;
    	}

}
function moveEnemy(){
	for(let i=0; i<enemy.length; i++){
		enemy[i].y += enemy[i].dy;
	    	if(enemy[i].y > 500){
			enemy[i].y = -45;
			enemy[i].dy = (Math.random() * 5) + 2;
			enemy[i].x = (Math.random() * 450);
	    	}
	}
}
function hit(){
	for(let i=0; i<enemy.length; i++){
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
		let ex_max1 = enemy[i].x + 50;
		let ex_min1 = enemy[i].x;
		let ey_max1 = enemy[i].y + 20;
		let ey_min1 = enemy[i].y;
		let ex_max2 = enemy[i].x + 40;
        	let ex_min2 = enemy[i].x + 10;
        	let ey_max2 = enemy[i].y + 40;
        	let ey_min2 = enemy[i].y + 20;
	
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
}

function drawScore(){
	ctx.fillStyle = 'black';
	ctx.font = "50px 'Jersey 10', sans-serif";
	ctx.fillText(Math.floor(score/60), 10,35);
}

function drawGameOver(){
	ctx.fillStyle = 'red';
	ctx.font = "60px 'Jersey 10', sans-serif";
	ctx.fillText("GAME OVER", 100,150);
	ctx.fillText("your score is: " + Math.floor(score/60), 100,260);
}

function animate(){
	if(gamerunning){
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		score++;
		drawBackground();
		//hit();
    		drawPlayer();
		for (let i=0; i<enemy.length; i++){
			drawEnemy(enemy[i]);
		}
		movePlayer();
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

setInterval(spawnEnemy, 5000);
animate();
