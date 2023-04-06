import { waypoints } from "./waypoint.js"

export default class Enemy {
  constructor({x,y}) {
    this.position = {x, y};
    this.waypointIndex = 0;
    this.width = 90;
    this.height = 90;
    // this.center = {
    //   x: this.position.x + CONSTANTS.ENEMY_WIDTH/2,
    //   y: this.position.y + CONSTANTS.ENEMY_HEIGHT/2
    // }
    // this.speed = 2
    // this.enemies = [];
    this.radius = 50;
    this.health = 100;
  }

  drawEnemy(c) {
    // draw the enemy square with given position
    c.fillStyle = "blue";
    // c.fillRect(this.position.x, this.position.y, CONSTANTS.ENEMY_WIDTH, CONSTANTS.ENEMY_HEIGHT);
    //replace this with a circle
    c.beginPath();
    c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2)
    c.fill();

    //health bar
    c.fillStyle = 'black';
    c.fillRect((this.position.x - this.width/2), this.position.y-60, this.width, 8)

    c.fillStyle = 'purple';
    c.fillRect((this.position.x - this.width/2), this.position.y-60, (this.width * this.health/100), 8)

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

    if (Math.round(this.position.x) === Math.round(waypoint.x) && Math.round(this.position.y) === Math.round(waypoint.y) && this.waypointIndex < waypoints.length - 1) {
      this.waypointIndex ++;
    }
  }
}
