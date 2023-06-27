import { waypoints } from "./Waypoints.js"
import { catPlacement } from "./CatPlacement.js"
import Enemy from "./Enemy.js"
// import CatTile from "./CatTile.js"
import Cat from "./Cat.js"
import Projectile from "./Projectile.js"
import Victor from "victor"

  document.getElementById("play-game-button").addEventListener("click", function() {
    document.getElementById("instructions").style.display = "none";
    document.getElementById("social-links").style.visibility = 'visible';

    document.getElementById("side-section").style.display = "flex";
    document.getElementById("canvas").style.display = "block";
    img.src = "assets/finalMap.png"
  });

  const canvas = document.getElementById("canvas");
  const c = canvas.getContext("2d");

  canvas.width = 1280;
  canvas.height = 768;
  c.fillStyle = "white";
  c.fillRect(0, 0, canvas.width, canvas.height);

  // creates and returns a new HTMLImageElement
  const img = new Image();
  img.onload = () => {
    move();
  }

  // 2D array of all possible catTile placement position using waypoints data
  const placementPositions = [];

  // parse waypoints data with 20 columns per row
  // columns indicate x coordinates, rows indicate y coordinates
  for (let i = 0; i < catPlacement.length; i += 20) {
    placementPositions.push(catPlacement.slice(i, i+20));
  }

  class CatTile {
    // object destructuring with position
    constructor({position = {x: 0, y: 0}}) {
      this.position = position;
      this.size = 64; //64 pixels per tile
      this.color = "rgba(255, 255, 255, 0.2)";
      this.occupied = false;
    }

    draw() {
      c.fillStyle = this.color;
      c.fillRect(this.position.x, this.position.y, this.size, this.size);
    }

    update(mouse) {
      this.draw();

      if (mouse.x > this.position.x && mouse.x < this.position.x + this.size &&
          mouse.y > this.position.y && mouse.y < this.position.y + this.size) {
          this.color = "rgba(255, 255, 255, 0.2)";
      } else {
        this.color = "rgba(255, 255, 255, 0)"
      }
    }

  }

  const catPlacementTiles = [];

  placementPositions.forEach((row, y) => {
    row.forEach((col, x) => {
      if (col === 965) {
        // place a Tile at the position (x,y) if col has a value
        catPlacementTiles.push(new CatTile({
          position: {
            x: x * 64,
            y: y * 64
          }
        }));
      }
    });
  })


  export let enemies = [];
  let cats = [];
  let activeTile = undefined;
  let enemyCount = 3;
  let diamonds = 100;
  let hearts = 9;
  let score = 0;

  function enemySpawn(count) {
    for (let i = 1; i < count + 1; i++) {
      let enemyDistance = i * 130;
      let newEnemy = new Enemy({ position: {x: waypoints[0].x - enemyDistance, y: waypoints[0].y }})
      enemies.push(newEnemy);
    }
  }

  enemySpawn(enemyCount);

  let moveId;

  function move() {
    moveId = requestAnimationFrame(move);

    // draw image on canvas
    c.drawImage(img, 0, 0);

    // this is also refactored into for loop from the back to prevent flickering when removing the enemies
    // because you want them to be rendered and removed
    for (let i = enemies.length-1; i >=0; i--) {
      const enemy = enemies[i];
      enemy.update(c);

      if (enemy.position.x > canvas.width) {
        hearts -= 1;
        enemies.splice(i, 1);
        document.querySelector('#hearts').innerHTML = hearts;

        if (hearts === 0) {
          cancelAnimationFrame(moveId);

          c.font = "bold 75px Archivo Black";
          c.fillStyle = "white";
          c.strokeStyle = "black";
          c.textAlign = "center";
          c.lineWidth = 7;

          c.strokeText("Game Over", canvas.width / 2, canvas.height/2);
          c.fillText("Game Over", canvas.width / 2, canvas.height/2);

          document.getElementById('play-again-button').style.display = "block";
        }
      }
    }

    //once enemies array is empty, respawn enemies
    if (enemies.length === 0) {
      enemyCount += 2;
      enemySpawn(enemyCount);
    }

    catPlacementTiles.forEach((tile) => {
      tile.update(mouse);
    })

    //radius detector for enemies for targeting
    cats.forEach((cat) => {
      cat.update(c);
      cat.target = null;
      const targetEnemies = enemies.filter(enemy => {
        const xDistance = enemy.position.x - cat.center.x;
        const yDistance = enemy.position.y - cat.center.y;
        const distance = Math.hypot(xDistance, yDistance);
        // overlapping
        return distance < enemy.radius + cat.radius
      })
      cat.target = targetEnemies[0]

      //use a for loop instead of forEach because when using splice, it will make the rendering process skip over one projectile which will make the animation flicker
      //if projectiles are deleted from the back, since it is already rendered out, it won't make a flicker problem when spliced
      for (let i = cat.projectiles.length-1; i >=0; i--) {
        const projectile = cat.projectiles[i];

        projectile.update(c);

        const xDistance = projectile.enemy.position.x - projectile.position.x;
        const yDistance = projectile.enemy.position.y - projectile.position.y;
        const distance = Math.hypot(xDistance, yDistance);

        // when projectile hits the enemy
        if (distance < projectile.enemy.radius + projectile.radius) {
          //decrease enemy health & remove from enemies array
          projectile.enemy.health -= 20;

          //keep track of individual enemy with health property 0
          if (projectile.enemy.health <= 0) {
            const enemyIndex = enemies.findIndex((enemy) => {
              return projectile.enemy === enemy
            })

            if (enemyIndex > -1) {
              enemies.splice(enemyIndex, 1);
              diamonds += 20;
              document.querySelector('#diamonds').innerHTML = diamonds;
              score += 10;
              document.querySelector('#score-number').innerHTML = score;
            }
          }

          cat.projectiles.splice(i, 1);
        }
      }
    })
  }

  // Resume and Pause buttons
  const pauseButton = document.getElementById("pause-button");
  const resumeButton = document.getElementById("resume-button");

  pauseButton.addEventListener("click", function() {
    cancelAnimationFrame(moveId);
  });

  resumeButton.addEventListener("click", function() {
    move();
  });

  // Play Again button
  document.getElementById('play-again-button').addEventListener('click', function() {
    hearts = 9;
    document.querySelector('#hearts').innerHTML = hearts;
    score = 0;
    document.querySelector('#score-number').innerHTML = score;
    diamonds = 100;
    document.querySelector('#diamonds').innerHTML = diamonds;
    enemyCount = 3;
    enemies = [];
    cats = [];

    enemySpawn(enemyCount);

    this.style.display = "none";

    move();
  })

  let mouse = {
    x: undefined,
    y: undefined
  }

  canvas.addEventListener("click", (event) => {
    if (activeTile && !activeTile.isOccupied && diamonds - 50 >= 0) {
      diamonds -= 50;
      document.querySelector('#diamonds').innerHTML = diamonds;
      cats.push(new Cat ({position:{
        x: activeTile.position.x,
        y: activeTile.position.y
      }}))
      activeTile.isOccupied = true;
    }
  })

  function mouseMoveListener(event) {
    mouse.x = event.offsetX;
    mouse.y = event.offsetY;

    activeTile = null;
    for (let i = 0; i < catPlacementTiles.length; i ++) {
      const tile = catPlacementTiles[i];
      if (mouse.x > tile.position.x && mouse.x < tile.position.x + tile.size &&
        mouse.y > tile.position.y && mouse.y < tile.position.y + tile.size) {
          activeTile = tile;
          break;
        }
    }
  }

  function throttle(fn, wait) {
    let time = Date.now();
    return function (event) {
      if (time + wait - Date.now() < 0) {
        fn(event);
        time = Date.now();
      }
    }
  }

  const throttledMouseMoveListener = throttle(mouseMoveListener, 50);

  canvas.addEventListener("mousemove", throttledMouseMoveListener);
