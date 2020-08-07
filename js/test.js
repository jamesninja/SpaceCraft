
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














// class Background {
//   constructor() {
//     const img = document.createElement("img");
//     img.onload = () => {
//       this.img = img;
//       this.x = 0;
//       this.y = 0;
//       this.w = 1500;
//       this.h = 700;
//     };
//     img.src = "images/background.png";

//     const backgroundImage = {
//       img: img,
//       x: 0,
//       speed: -1,

//       move: function () {
//         this.x += this.speed;
//         this.x %= canvas.width; // modulo width
//       },

//       draw: function () {
//         // ctx.drawImage(this.img, this.x, 0);
//         ctx.drawImage(this.img, this.x + canvas.width, 0);
//       },
//     };

//     function updateCanvas() {
//       ctx.clearRect(0, 0, canvas.width, canvas.height); // 🧽 clear

//       backgroundImage.move();
//       backgroundImage.draw();

//       requestAnimationFrame(updateCanvas);
//     }

//     // Once the image is loaded: start the animation
//     img.onload = updateCanvas;

//     // Start downloading the image:
//     // img.src = "images/background.png";
//   }

  // draw() {
  //   if (!this.img) return; // if `this.img` is not loaded yet => don't draw
  //   ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  // }
}

// class Background {
//   constructor() {
//     const img = document.createElement("img");
//     img.onload = () => {
//       this.img = img;
//       this.x = 0;
//       this.y = 0;
//       this.w = 1500;
//       this.h = 700;
//     };
//     img.src = "images/background.png";
//   }

//   draw() {
//     if (!this.img) return; // if `this.img` is not loaded yet => don't draw
//     ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
//   }
// }
