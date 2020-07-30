function random(from, to) {
  // TODO
  return Math.floor(Math.random() * (+to - +from) + +from);
}

class Ennemy {
  constructor() {
    const img = document.createElement("img");
    img.onload = () => {
      this.img = img;
      const imgRatio = img.naturalWidth / img.naturalHeight;
      //this.x = W;
      this.x = random(10, 1000);
      this.y = H - this.h;
      //this.y = random(40, 450);
      this.w = 60;
      this.h = this.w / imgRatio;
    };
    img.src = "images/spaceshipEnnemy3.svg";
  }

  draw() {
    if (!this.img) return; // if `this.img` is not loaded yet => don't draw

    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  hits(ship) {
    return (
      this.y + this.h > ship.y &&
      this.y < ship.y + ship.h &&
      this.x + this.w > ship.x &&
      this.x < ship.x + ship.w
    );
  }
}
