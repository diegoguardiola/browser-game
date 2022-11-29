export default class Defender {

    rightPressed = false;
    leftPressed = false;
    shootPressed = false;
  
    constructor(canvas, velocity, bulletController) {
      this.canvas = canvas;
      this.velocity = velocity;
      this.bulletController = bulletController;
  
      this.x = (this.canvas.width / 2) - 30;
      this.y = this.canvas.height - 75;
      this.width = 60;
      this.height = 60;
      this.image = new Image();
      this.image.src = "assets/defender2.png";
  
      document.addEventListener("keydown", this.keydown);
      document.addEventListener("keyup", this.keyup);
    }
  
    draw(ctx) {
        if(this.shootPressed){
            this.bulletController.shoot(this.x + this.width/2, this.y, 4, 10);
        }
        this.move();
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    move() {
        if(this.leftPressed && this.x >= 0) {
            this.x -= this.velocity;
        }
        if(this.rightPressed && this.x <= this.canvas.width - 60 ) {
            this.x += this.velocity;
        }
    } 
    keydown = (e) => {
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

  