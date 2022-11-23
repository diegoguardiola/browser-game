export default class Defender {
    constructor(x, y, bulletController){
        this.x = x;
        this.y = y;
        this.bulletController = bulletController;
        this.width = 80;
        this.height = 80;
        this.speed = 3;

        document.addEventListener("keydown", this.keydown);
        document.addEventListener("keyup", this.keyup);
    }
    draw(ctx) {
        this.move();
        const img = new Image();   // Create new img element
        img.onload = () => {
            ctx.drawImage(img, this.x, this.y, 80, 80);
        };
        img.src = 'assets/defender2.png'; // Set source path

        this.shoot();
    }

    shoot() {
        if (this.shootPressed) {
        console.log("shoot");
          const speed = 5;
          const delay = 7;
          const damage = 1;
          const bulletX = this.x + this.width / 2;
          const bulletY = this.y;
          this.bulletController.shoot(bulletX, bulletY, speed, damage, delay);
        }
    }

    move() {
        if(this.leftPressed && this.x >= 0) {
            this.x -= this.speed;
        }
        if(this.rightPressed && this.x <= 775) {
            this.x += this.speed;
        }
    } 
    keydown = (e) => {
        console.log(e);
        if (e.key === "ArrowLeft") {
            this.leftPressed = true;
        }
        if (e.key === "ArrowRight") {
            this.rightPressed = true;
        }
        if (e.code === "Space") {
            this.shootPressed = true;
        }
    };
    keyup = (e) => {
        console.log(e);
        if (e.key === "ArrowLeft") {
            this.leftPressed = false;
        }
        if (e.key === "ArrowRight") {
            this.rightPressed = false;
        }
        if (e.code === "Space") {
            this.shootPressed = false;
        }
    }
}