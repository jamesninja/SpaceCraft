let ship;
let meteors = [];
let ennemys = [];
let gameover = false;
let points = 0;
let lasers = [];
let laser;
let missiles = [];
let missile;

const ctx = document.querySelector("canvas").getContext("2d");
const W = ctx.canvas.width;
const H = ctx.canvas.height;
function draw() {
  // Background
  const img = document.createElement("img");
  img.src = "images/background.png";
  ctx.drawImage(img, 0, 0, W, H);
  // ship & laser drawing
  ship.draw();

  //collisions Meteor
  meteors.forEach(function (meteor) {
    meteor.draw();
    if (meteor.hits(ship)) {
      gameover = true;
    }
  });

  //collisions Ennemy
  ennemys.forEach(function (ennemy) {
    ennemy.draw();
    if (ennemy.hits(ship)) {
      gameover = true;
    }
  });

  //lasers + collision(meteor)
  lasers.forEach(function (laser) {
    laser.draw();
    for (var i = 0; i < meteors.length; i++) {
      if (laser.destroy(meteors[i])) {
        //console.log("hit");
        meteors.splice(meteors[i], 1);
        points++;
      }
    }
  });

  //lasers + collision(ennemy)
  lasers.forEach(function (laser) {
    laser.draw();
    for (var i = 0; i < ennemys.length; i++) {
      if (laser.destroy2(ennemys[i])) {
        //console.log("hit");
        ennemys.splice(ennemys[i], 1);
        points++;
      }
    }
  });

  //missiles + collision(meteor)
  missiles.forEach(function (missile) {
    missile.draw();
    for (var i = 0; i < meteors.length; i++) {
      if (missile.destroy(meteors[i])) {
        //console.log("hit");
        meteors.splice(meteors[i], 1);
        points++;
      }
    }
  });

  //missiles + collision(ennemy)
  missiles.forEach(function (missile) {
    missile.draw();
    for (var i = 0; i < ennemys.length; i++) {
      if (missile.destroy2(ennemys[i])) {
        //console.log("hit");
        ennemys.splice(ennemys[i], 1);
        points++;
      }
    }
  });

  // Points
  ctx.font = "20px serif";
  ctx.fillStyle = "white";
  ctx.fillText(`Score: ${points}`, 50, 50);
}
document.onkeydown = function (e) {
  if (!ship) return;
  // TODO
  switch (e.keyCode) {
    case 37:
      ship.moveLeft();
      break;
    case 39:
      ship.moveRight();
      break;
    case 38:
      ship.moveUp();
      break;
    case 40:
      ship.moveDown();
      break;
    case 32:
      lasers.push(new Laser());
      // console.log("hit", lasers)
      break;
    case 77:
      missiles.push(new Missile());
      // console.log("hit", missiles)
      break;
  }
};
let raf;
let frames = 0;
function animLoop() {
  frames++;
  if (frames % 50 === 0) {
    meteors.push(new Meteor());
    if (frames % 50 === 0) {
      ennemys.push(new Ennemy());
    }
  }
  for (let i = 0; i < meteors.length; i++) {
    meteors[i].x -= 5;
    meteors[i].x -= 6;
    meteors[i].y += 0;
  }
  for (let i = 0; i < ennemys.length; i++) {
    ennemys[i].y -= 5;
  }

  for (let i = 0; i < lasers.length; i++) {
    lasers[i].x += 5;
  }

  for (let i = 0; i < missiles.length; i++) {
    missiles[i].x += 5;
  }

  draw();
  if (!gameover) {
    raf = requestAnimationFrame(animLoop);
  } else {
    ctx.font = "100px serif";
    ctx.fillStyle = "#870007";
    ctx.textAlign = "center";
    ctx.fillText("Game Over!", W / 2, H / 2);
    ctx.font = "100px serif";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Your final score", W / 2, H / 2 + 150);
    ctx.font = "100px serif";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(`${points}`, W / 2, H / 2 + 300);
  }
}
function startGame() {
  if (raf) {
    cancelAnimationFrame(raf);
  }
  ctx.clearRect(0, 0, W, H);
  gameover = false;
  meteors = [];
  ennemys = [];
  points = 0;
  ship = new Ship();
  let meteor = new Meteor();
  meteors.push(meteor);
  let ennemy = new Ennemy();
  ennemys.push(ennemy);
  animLoop();
}
document.getElementById("start-button").onclick = function () {
  document.querySelector(".game-intro").style.visibility = "hidden";
  startGame();
};
