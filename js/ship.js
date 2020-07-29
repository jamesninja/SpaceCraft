class Ship {
  constructor() {
    const img = document.createElement("img");
    img.onload = () => {
      this.img = img;

      const imgRatio = img.naturalWidth / img.naturalHeight;

      this.w = 70;
      this.h = this.w / imgRatio;
      this.x = 50;
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
      this.x += -20;
    }
  }
  moveRight() {
    if (this.x >= W) {
      this.x += 0;
    } else {
      this.x += 20;
    }
  }

  moveUp() {
    if (this.y <= 0) {
      this.y -= 0;
    } else {
      this.y -= 20;
    }
  }

  moveDown() {
    if (this.y >= H - this.h) {
      this.y += 0;
    } else {
      this.y += 20;
    }
  }
  shoot() {
    const img = document.createElement("img");
    img.onload = function () {
      ctx.drawImage(img, this.x + 5, this.y, 20, 20);
    };
    img.src = "images/shoot.png";
  }
}
