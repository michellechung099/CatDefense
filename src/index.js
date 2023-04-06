import { waypoints } from "./waypoint.js"
import { catPlacement } from "./catPlacement.js"
import Enemy from "./enemy.js"
// import catTile from "./catTile.js"
import Cat from "./cat.js"
import Projectile from "./projectile.js"
import Victor from "victor"

// document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.querySelector("canvas");
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

  img.src= "assets/finalMap.png"

  // 2D array of all possible catTile placement positions
  const placementPositions = [];

  for (let i = 0; i < catPlacement.length; i += 20) {
    placementPositions.push(catPlacement.slice(i, i+20));
  }

  class CatTile {
    constructor({position = {x: 0, y: 0}}) {
      this.position = position;
      this.size = 64; //64 pixels per tile
      this.color = "rgba(255, 255, 255, 0.2)";
      this.occupied = false;
    }

    draw() {
      // c.fillStyle = this.color;
      // 255 in each red green and blue makes it white
      c.fillStyle = this.color;
      c.fillRect(this.position.x, this.position.y, this.size, this.size);
    }

    update(mouse) {
      this.draw();

      if (mouse.x > this.position.x && mouse.x < this.position.x + this.size &&
          mouse.y > this.position.y && mouse.y < this.position.y + this.size) {
          this.color = "rgba(255, 255, 255, 0.5)";
      } else {
        this.color = "rgba(255, 255, 255, 0.2)"
      }
    }

    //also create a logic that alerts the user that you can't place the tile here if the position is out of bounds

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

  export const enemies = [];
  for (let i = 0; i < 10; i++) {
    let enemyDistance = i * 130;
    let newEnemy = new Enemy({x: waypoints[0].x - enemyDistance, y: waypoints[0].y })
    enemies.push(newEnemy);
  }

  function move() {
    requestAnimationFrame(move);

    // draw image on canvas
    c.drawImage(img, 0, 0);

    enemies.forEach(enemy => {
      enemy.update(c);
    })

    catPlacementTiles.forEach((tile) => {
      // tile.draw();  //not passing in mouse when creating new tile
      tile.update(mouse);
    })

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
          projectile.enemy.health -= 20;

          if (projectile.enemy.health <= 0) {
            const enemyIndex = enemies.findIndex((enemy) => {
              return projectile.enemy === enemy
            })

            enemies.splice(enemyIndex, 1);
          }
          cat.projectiles.splice(i, 1);
        }
      }
    })
  }

  let mouse = {
    x: undefined,
    y: undefined
  }

  const cats = [];
  let activeTile = undefined;

  canvas.addEventListener("click", (event) => {
    if (activeTile && !activeTile.isOccupied) {
      cats.push(new Cat ({position:{
        x: activeTile.position.x,
        y: activeTile.position.y
      }}))
    }
    activeTile.isOccupied = true;
    // console.log(cats);
  })

  canvas.addEventListener("mousemove", (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
    // console.log(event);

    activeTile = null;
    for (let i = 0; i < catPlacementTiles.length; i ++) {
      const tile = catPlacementTiles[i];

      if (mouse.x > tile.position.x && mouse.x < tile.position.x + tile.size &&
        mouse.y > tile.position.y && mouse.y < tile.position.y + tile.size) {
          activeTile = tile;
          break;
        }
    }
  })

// });
