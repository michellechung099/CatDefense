import { waypoints } from "./Waypoints.js"

export default class Enemy {
  constructor({position = { x: 0, y: 0 }}) {
    this.position = position;
    this.waypointIndex = 0;
    this.width = 90;
    this.height = 90;
    this.radius = 50;
    this.health = 100;
    this.velocity = { x: 0, y: 0 }
    this.image = new Image()
    this.image.src = "assets/Run.png"
    this.frames = {
      max: 6,
      current: 0,
      timeElapsed: 0,
      timeHold: 6
    }
  }

  drawEnemy(c) {
    const frameWidth = this.image.width / this.frames.max
    const frame = {
      position: {
        x: frameWidth * this.frames.current,
        y: 0,
      },
      width: frameWidth,
      height: this.image.height
    }

    const spriteX = this.position.x - 50;
    const spriteY = this.position.y - 10;

    c.drawImage(
      this.image,
      frame.position.x,
      frame.position.y,
      frame.width,
      frame.height,
      spriteX,
      spriteY,
      frame.width,
      frame.height);

    //health bar
    c.fillStyle = 'black';
    c.fillRect((this.position.x - this.width/2), this.position.y-10, this.width, 8)

    c.fillStyle = 'purple';
    c.fillRect((this.position.x - this.width/2), this.position.y-10, (this.width * this.health/100), 8)

    this.frames.timeElapsed++
    if (this.frames.timeElapsed % this.frames.timeHold === 0) {
      this.frames.current++
      if (this.frames.current >= this.frames.max - 1) {
        this.frames.current = 0;
      }
    }
  }

  update(c) {
    // draw the enemy and update its position
    this.drawEnemy(c);

    const waypoint = waypoints[this.waypointIndex]
    const yDistance = waypoint.y - this.position.y
    const xDistance = waypoint.x - this.position.x
    const angle = Math.atan2(yDistance, xDistance)
    const speed = 2;

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
