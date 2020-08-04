class Missile {
  constructor() {
    const img = document.createElement("img");
    img.onload = () => {
      this.img = img;
      this.x = ship.x + ship.w;
      this.y = ship.y + ship.h / 2;
      this.w = 50;
      this.h = 20;
    };
    img.src = "images/missile.svg";
  }

  draw() {
    if (!this.img) return; // if `this.img` is not loaded yet => don't draw

    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
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
