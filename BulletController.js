import Bullet from "./Bullet.js";

export default class BulletController {
  bullets = [];
  timerTillNextBullet = 0;

  constructor(canvas) {
      this.canvas = canvas;
  }

  shoot(x, y, speed, damage, delay) {
    if (this.timerTillNextBullet <= 0) {
      this.bullets.push(new Bullet(x, y, speed, damage));

      this.timerTillNextBullet = delay;
    }

    this.timerTillNextBullet--;
    console.log(this.bullets)
  }

  draw(ctx) {
    this.bullets.forEach((bullet) => {

      bullet.draw(ctx);
    });
  }
}