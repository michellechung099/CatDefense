import Victor from 'victor';
// import Enemy from './enemies'
import {enemies} from './index'

export default class Projectile {
  constructor({position = {x:0, y:0}, enemy}) {
    this.position = position;
    this.velocity = {x:0, y:0}
    this.speed = 5;
    this.enemy = enemy;
    this.radius = 10;
    this.image = new Image()
    this.image.src = "assets/projectile.png"
  }

  draw(c) {
    c.drawImage(this.image, this.position.x, this.position.y)
    // c.beginPath();
    // c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2);
    // c.fillStyle = "red";
    // c.fill();
  }

  update(c) {
    this.draw(c);

    const projectilePos = new Victor(this.position.x, this.position.y);
    const enemyPos = new Victor(this.enemy.position.x, this.enemy.position.y);

    const direction = enemyPos.subtract(projectilePos);

    const timeElapsed = 1;
    const velocity = direction.clone().normalize().multiplyScalar(this.speed);
    projectilePos.add(velocity.clone().multiplyScalar(timeElapsed));

    this.position.x = projectilePos.x;
    this.position.y = projectilePos.y;
  }
}
