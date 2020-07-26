let ship;
let meteors = [];
let gameover = false;
let points = 0;

const ctx = document.querySelector("canvas").getContext("2d");
const W = ctx.canvas.width;
const H = ctx.canvas.height;

function draw() {
  //dessiner le sol

  // Iteration 1: background drawing
  //
  const img = document.createElement("img");
  img.src = "images/background.png";
  ctx.drawImage(img, 0, 0, W, H);

  //
  // Iteration 2: ship drawing
  //
  ship.draw();

  //
  // Iteration #4: obstacles
  //

  meteors.forEach(function (ob) {
    ob.draw();
    //});

    //
    // Iteration #5: collisions
    //

    meteors.forEach(function (ob) {
      if (ob.hits(ship)) {
        gameover = true;
      }
    });

    //
    // Iteration #6: points
    //
    ctx.font = "80px serif";
    ctx.fillText(`Score: ${points}`, 100, 1200);
  });
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
      ship.shoot();
      break;
  }
};

let raf;
let frames = 0;
function animLoop() {
  frames++;
  if (frames % 50 === 0) {
    meteors.push(new Meteor());
  }
  for (let i = 0; i < meteors.length; i++) {
    meteors[i].x -= 5;
    meteors[i].y += 0;
    // if (obstacles[i].y > ship.y + ship.h) {
    // points++;
    // obstacles.splice(i, 1);
    //}
  }
  draw();

  if (!gameover) {
    raf = requestAnimationFrame(animLoop);
  } else {
    //ctx.fillStyle = "black";
    //ctx.fillRect(300, 270, 620, 300);

    ctx.font = "80px serif";
    ctx.fillStyle = "#870007";
    ctx.textAlign = "center";
    ctx.fillText("Game Over!", W / 2, H / 2 + 10);

    ctx.font = "80px serif";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Your final score", W / 2, H / 2 + 110);

    ctx.font = "80px serif";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(`${points}`, W / 2, H / 2 + 200);
  }
}

function startGame() {
  if (raf) {
    cancelAnimationFrame(raf);
  }
  ctx.clearRect(0, 0, W, H);
  gameover = false;
  meteors = [];
  points = 0;

  ship = new Ship();
  let meteor = new Meteor();
  meteors.push(meteor);

  animLoop();
}

document.getElementById("start-button").onclick = function () {
  document.querySelector(".game-intro").style.visibility = "hidden";

  startGame();
};

// auto-start
//startGame()
