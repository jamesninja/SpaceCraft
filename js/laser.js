class Laser {
  constructor() {
    ctx.fillStyle = "#f00";
    ctx.fillRect(ship.x, ship.y, 80, 4);
  }

  draw() {
    ctx.fillStyle = "#f00";
    ctx.fillRect(laser(ship.x), laser(ship.y), laser(50), laser(4));
  }
}
