function random(from, to) {
  // TODO
  return Math.floor(Math.random() * (+to - +from) + +from);
}

class Meteor {
  constructor() {
    const img = document.createElement("img");
    img.onload = () => {
      this.img = img;
      const imgRatio = img.naturalWidth / img.naturalHeight;
      this.x = W;
      this.y = random(40, 450);
      this.w = 20;
      this.h = this.w / imgRatio;
    };
    img.src = "images/meteor.svg";
  }

  draw() {
    if (!this.img) return; // if `this.img` is not loaded yet => don't draw

    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  //class Obstacle {
  //constructor() {
  // TODO
  // this.x = random(100, 700);
  // this.y = 0;
  //this.w = random(200, ctx.canvas.width - 100 - this.x);
  //this.h = 50;
  //}

  //draw() {
  // TODO
  // ctx.fillStyle = "#870007";
  //  ctx.fillRect(this.x, this.y, this.w, this.h);
  //}

  hits(ship) {
    if (
      this.y + this.h > ship.y &&
      this.y < ship.y + ship.h &&
      this.x + this.w > ship.x &&
      this.x < ship.x + ship.w
    ) {
      return true;
    }
    return false;
  }
}
