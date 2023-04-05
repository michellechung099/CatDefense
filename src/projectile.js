import Victor from 'victor';
// import Enemy from './enemies'
import {enemies} from './index'

export default class Projectile {
  constructor({position = {x:0, y:0}}) {
    this.position = position;
    this.velocity = {x:0, y:0}
    this.speed = 5;
  }

  draw(c) {
    c.beginPath();
    c.arc(this.position.x, this.position.y, 10, 0, Math.PI * 2);
    c.fillStyle = "red";
    c.fill();
  }

  update(c) {
    this.draw(c);

    const projectilePos = new Victor(this.position.x, this.position.y);
    const enemyPos = new Victor(enemies[0].position.x, enemies[0].position.y);

    const direction = enemyPos.subtract(projectilePos);

    const timeElapsed = 1;
    const velocity = direction.clone().normalize().multiplyScalar(this.speed); //why do i need to normalize the vector?
    projectilePos.add(velocity.clone().multiplyScalar(timeElapsed));

    this.position.x = projectilePos.x;
    this.position.y = projectilePos.y;
  }
}
