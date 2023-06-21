import { waypoints } from "./waypoint.js"

export default class Enemy {
  constructor({position = { x: 0, y: 0 }}) {
    this.position = position;
    this.waypointIndex = 0;
    this.width = 90;
    this.height = 90;
    // this.center = {
    //   x: this.position.x + CONSTANTS.ENEMY_WIDTH/2,
    //   y: this.position.y + CONSTANTS.ENEMY_HEIGHT/2
    // }
    this.radius = 50;
    this.health = 100;
    this.velocity = { x: 0, y: 0 }
    // this.speed = 5;
    this.image = new Image()
    this.image.src = "assets/slimes_resized.png"
  }

  drawEnemy(c) {
    c.drawImage(this.image, this.position.x, this.position.y)

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
    const speed = 5;

    this.velocity.x = Math.cos(angle) * speed
    this.velocity.y = Math.sin(angle) * speed

    this.position.x += this.velocity.x
    this.position.y += this.velocity.y

    if (
      Math.abs(Math.round(this.position.x) - Math.round(waypoint.x)) < Math.abs(this.velocity.x) &&
      Math.abs(Math.round(this.position.y) - Math.round(waypoint.y)) < Math.abs(this.velocity.y) &&
      this.waypointIndex < waypoints.length - 1) {
      this.waypointIndex++;
    }
  }
}
