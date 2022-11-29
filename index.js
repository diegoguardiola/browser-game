import EnemyController from "./enemyController.js";
import Defender from "./defender.js";
import BulletController from "./bulletController.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
//onst canvasHead = document.getElementById("header");
//const ctx.Head = canvasHead.getContext("2d");

canvas.width = 700;
canvas.height = 700;
//canvasHead.width = 700;
//canvasHead.height = 50;

const background = new Image();
background.src = "assets/space.png";

const defenderBulletController =  new BulletController(canvas, 10, "red", true);
const enemyBulletController = new BulletController(canvas, 4, "white", false);
const enemyController = new EnemyController(canvas, enemyBulletController, defenderBulletController);
const defender = new Defender(canvas, 3, defenderBulletController);

let isGameOver = false;
let didWin = false;


function game() {
    checkGameOver();
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    //ctxHead.drawImage(background, 0, 0, canvas.width, canvas.height)
    displayGameOver();
    if(!isGameOver){
    enemyController.draw(ctx);
    defender.draw(ctx);
    defenderBulletController.draw(ctx);
    enemyBulletController.draw(ctx);
    score();
    }
}

function displayGameOver() {
    if (isGameOver) {
      let defeatedDefender = new Image();
      defeatedDefender.src = 'assets/defeated_defender.png';
      let victoriousDefender = new Image();
      victoriousDefender.src = 'assets/victorious_defender.png';
      let imageWin = didWin ? ctx.drawImage(victoriousDefender, canvas.width/2 - 100, canvas.height/1.5, 200, 200)  :
                              ctx.drawImage(defeatedDefender, canvas.width/2 - 100, canvas.height/1.5, 200, 200);
      let text = didWin ? "You Win" : "Game Over";
      let textOffset = didWin ? 3.5 : 5;
  
      ctx.fillStyle = "white";
      ctx.font = "70px Arial";
      ctx.fillText(text, canvas.width / textOffset, canvas.height / 2);
    }
  }

function score() {
    
}

function checkGameOver() {
    if(isGameOver) {
        return;
    }
    if(enemyBulletController.collideWith(defender)) {
        isGameOver = true;
    }
    if (enemyController.collideWith(defender)) {
        isGameOver = true;
    }
    if(enemyController.enemyRows.length === 0) {
        didWin = true;
        isGameOver = true;
    }
}

setInterval(game, 1000/60);