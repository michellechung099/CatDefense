// import Enemy from "./enemy";
import { waypoints } from "./waypoint.js"
import { catPlacement } from "./catPlacement.js"

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

  const catPlacementPositions = [];
  for (let i = 0; i < catPlacement.length; i += 20) {
    catPlacementPositions.push(catPlacement.slice(i,i+20));
  }

  class cat {
    constructor({x,y}) {
      this.position = {x, y};
      
    }

  }

  catPlacementPositions.forEach((row) => {
    row.forEach((col) => {
      if (col === 965) {

      }
    });
  })

  const CONSTANTS = {
    ENEMY_WIDTH: 90,
    ENEMY_HEIGHT: 90
  };

  class Enemy {
    constructor({x,y}) {
      this.position = {x, y};
      this.waypointIndex = 0;
      // this.speed = 2
      // this.enemies = [];
    }

    drawEnemy() {
      // draw the enemy square with given position
      c.fillStyle = "blue";
      c.fillRect(this.position.x, this.position.y, CONSTANTS.ENEMY_WIDTH, CONSTANTS.ENEMY_HEIGHT);
      console.log(this.position.x);
      console.log(this.position.y);
    }

    update() {
      // draw the enemy and update its position
      this.drawEnemy();

      const waypoint = waypoints[this.waypointIndex]
      const yDistance = waypoint.y - this.position.y
      const xDistance = waypoint.x - this.position.x
      const angle = Math.atan2(yDistance, xDistance)

      this.position.x += Math.cos(angle)
      this.position.y += Math.sin(angle)

      // while (this.waypointIndex < waypoints.length - 1) {
        if (Math.round(this.position.x) === Math.round(waypoint.x) && Math.round(this.position.y) === Math.round(waypoint.y) && this.waypointIndex < waypoints.length - 1) {
          this.waypointIndex ++;
        }
      // }
    }

    // spawn() {
    //   for (let i = 0; i < 10; i++) {
    //     let enemyDistance = i * 130;
    //     this.enemies.push(new Enemy( {
    //       position: {x: waypoints[0].x - enemyDistance, y: waypoints[0].y }
    //     }));
    //   }
    //   return this.enemies;
    // }
  }

  let enemies = [];
  for (let i = 0; i < 10; i++) {
    let enemyDistance = i * 130;
    let newEnemy = new Enemy({x: waypoints[0].x - enemyDistance, y: waypoints[0].y })
    enemies.push(newEnemy);
  }

  // const enemy = new Enemy({x: waypoints[0].x, y: waypoints[0].y });
  // const enemy2 = new Enemy({x: waypoints[0].x - 130, y: waypoints[0].y});

  function move() {
    requestAnimationFrame(move);

    // draw image on canvas
    c.drawImage(img, 0, 0);

    enemies.forEach(enemy => {
      enemy.update();
    })

  }

// });
