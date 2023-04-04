import { waypoints } from "./waypoint.js"
import { catPlacement } from "./catPlacement.js"
import Enemy from "./enemy.js"
// import catTile from "./catTile.js"

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

  // console.log(placementPositions);

  class CatTile {
    constructor({position = {x: 0, y: 0}}) {
      this.position = position;
      this.size = 64; //64 pixels per tile
      this.color = 'white';
    }

    draw() {
      // c.fillStyle = this.color;
      // 255 in each red green and blue makes it white
      c.fillStyle = "rgba(255, 255, 255, 0.2)";
      c.fillRect(this.position.x, this.position.y, this.size, this.size);
    }

    update(mouse) {
      this.draw();

      if (mouse.x > this.position.x && mouse.x < this.position.x + this.size &&
          mouse.y > this.position.y && mouse.y < this.position.y + this.size) {
          this.color = "white";
      } else {
        this.color = "rgba(255, 255, 255, 0.2)"
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

  console.log(catPlacementTiles);

  let enemies = [];
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
  }

  let mouse = {
    x: undefined,
    y: undefined
  }

  addEventListener("mousemove", (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
    // console.log(event);
  });

// });
