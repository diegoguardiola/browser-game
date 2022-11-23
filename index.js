import Defender from "./Defender.js";

import BulletController from "./BulletController.js";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = 850;
canvas.height = 650;

const bulletController = new BulletController(canvas);
const defender = new Defender(
    canvas.width/2.2, 
    canvas.height/1.17, 
    bulletController);

function gameLoop() {
    ctx.fillstyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    bulletController.draw(ctx);
    defender.draw(ctx);
}


setInterval(gameLoop, 1);