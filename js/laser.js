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
}

// class Laser {
//   constructor() {
//     this.x = ship.x + ship.w;
//     this.y = ship.y + ship.h / 2;
//     this.w = 20;
//     this.h = 4;
//     this.color = "#f00";
//   }
//   draw() {
//     ctx.fillStyle = this.color;
//     ctx.fillRect(this.x, this.y, this.w, this.h);
//   }
// }
// destroy(meteor) {
//   return (
//     meteor.x + meteor.w >= this.x &&
//     meteor.x <= this.x + this.w &&
//     (meteor.y <= this.y + this.h && meteor.y + meteor.h >= this.y)
//   )
// }

// class Laser {
//   constructor() {
//     ctx.fillStyle = "#f00";
//     ctx.fillRect(ship.x, ship.y, 80, 4);
//     this.w = 20;
//     this.h = 4;
//     this.x = ship.x;
//     this.y = ship.y;
//   }

//   draw() {
//     ctx.fillStyle = "#f00";
//     ctx.fillRect(laser(this.x), laser(this.y), laser(this.w), laser(this.h));
//   }
// }
