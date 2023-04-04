import { waypoints } from "./waypoint.js"

const CONSTANTS = {
  ENEMY_WIDTH: 90,
  ENEMY_HEIGHT: 90
};

export default class Enemy {
  constructor({x,y}) {
    this.position = {x, y};
    this.waypointIndex = 0;
    // this.speed = 2
    // this.enemies = [];
  }

  drawEnemy(c) {
    // draw the enemy square with given position
    c.fillStyle = "blue";
    c.fillRect(this.position.x, this.position.y, CONSTANTS.ENEMY_WIDTH, CONSTANTS.ENEMY_HEIGHT);
  }

  update(c) {
    // draw the enemy and update its position
    this.drawEnemy(c);

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
}

// export default class Enemy {
//   constructor({x, y}) {
//     this.position = {
        // this.position = {x, y}
        // this.waypointIndex = 0
//     }

//     // this.speed = 2; //set the default speed to 2 pixels per frame
//     // this.health = 100;
//     // this.velocity = {
//     //   x: 0,
//     //   y:0
//     // }

//   }

//   // animate() {
//   //   requestAnimationFrame(movement);
//   //   c.drawImage(img, 0, 0);
//   //   c.fillStyle = "blue";
//   //   c.fillRect(x, 400, 90, 90);
//   //   x++
//   // }

//   drawEnemy(c) {
//     // draw the enemy square with given position
//     c.fillStyle = "blue";
//     c.fillRect(this.position.x, this.position.y, CONSTANTS.ENEMY_WIDTH, CONSTANTS.ENEMY_HEIGHT);
//   }

//   update(c) {
//     // draw the enemy and update its position
//     this.drawEnemy(c);
//     this.position.x ++;

//     // calculate distance between enemy's current position and the current waypoint, move enemy towards the waypoint
//     // when enemy reaches the current waypoint, update the currentWaypoint property to the next waypoint along the game board


//   // damageTaken() {

//   // }

//   // currentWaypoint() {
//   //   // keep track of which waypoint the enemy is currently heading towards

//   // }

//   // speed() {
//   //   // control how quickly the enemy moves along the game board
//   //   // set the speed to 2 pixels per frame
//   // }
// }
