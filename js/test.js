class Obstacle {
    constructor() {
      const img = document.createElement("img");
      img.onload = () => {
        this.img = img;
  
        this.x = random(100, 700);
          this.y = 0;
          this.w = random(200, ctx.canvas.width - 100 - this.x);
          this.h = 50;
      };
      img.src = "images/meteor.jpeg";
    }


    draw() {
        // TODO
        ctx.fillStyle = "#870007";
        ctx.fillRect(this.x, this.y, this.w, this.h);
      }


   