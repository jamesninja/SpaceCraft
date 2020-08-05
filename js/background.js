class Background {
  constructor() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    // in-memory background image element
    const img = document.createElement("img");
    img.src = "images/background.png";
    //
    // our object `backgroundImage` with properties and methods
    //

    const backgroundImage = {
      img: img,
      x: 0,
      speed: -1,

      move: function () {
        this.x += this.speed;
        this.x %= canvas.width; // modulo width
      },

      draw: function () {
        ctx.drawImage(this.img, this.x, 0);
        ctx.drawImage(this.img, this.x + canvas.width, 0);
      },
    };

    function updateCanvas() {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // 🧽 clear

      backgroundImage.move();
      backgroundImage.draw();

      requestAnimationFrame(updateCanvas);
    }

    // Once the image is loaded: start the animation
    img.onload = updateCanvas;

    // Start downloading the image:
    img.src = "images/background.png";
  }
}
