class Background {
  constructor() {
    const img = document.createElement("img");
    img.onload = () => {
      this.img = img;
      this.x = 0;
      this.y = 0;
      this.w = 1500;
      this.h = 700;
    };
    img.src = "images/background.png";
  }

  draw() {
    if (!this.img) return; // if `this.img` is not loaded yet => don't draw
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }
}
