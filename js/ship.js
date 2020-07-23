class Ship {
  constructor() {
    const img = document.createElement("img");
    img.onload = () => {
      this.img = img;

      const imgRatio = img.naturalWidth / img.naturalHeight;

      this.w = 100;
      this.h = this.w / imgRatio;
      this.x = 300;
      this.y = 300;
    };
    img.src = "images/spaceship_green.svg";
  }

  draw() {
    if (!this.img) return; // if `this.img` is not loaded yet => don't draw

    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }

  moveLeft() {
    if (this.x <= 0) {
      this.x += 0;
    } else {
      this.x += -10;
    }
  }
  moveRight() {
    if (this.x >= W) {
      this.x += 0;
    } else {
      this.x += 10;
    }
  }

  moveUp() {
    if (this.y <= 0) {
      this.y -= 0;
    } else {
      this.y -= 10;
    }
  }

  moveDown() {
    if (this.y >= H) {
      this.y += 0;
    } else {
      this.y += 10;
    }
  }
}
