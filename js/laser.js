class Laser {
  constructor() {
    this.x = ship.x + ship.w;
    this.y = ship.y + ship.h / 2;
    this.w = 20;
    this.h = 4;
    this.color = "#f00";
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }
  destroy(meteor) {
    return (
      meteor.x + meteor.w >= this.x &&
      meteor.x <= this.x + this.w &&
      meteor.y <= this.y + this.h &&
      meteor.y + meteor.h >= this.y
    );
  }

  destroy2(enemy) {
    return (
      enemy.x + enemy.w >= this.x &&
      enemy.x <= this.x + this.w &&
      enemy.y <= this.y + this.h &&
      enemy.y + enemy.h >= this.y
    );
  }
}
