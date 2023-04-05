import Victor from 'victor';

export default class Projectile {
  constructor({position = {x:0, y:0}}) {
    this.position = position;
    this.velocity = {x:0, y:0}
  }

  draw(c) {
    c.beginPath();
    c.arc(this.position.x, this.position.y, 10, 0, Math.PI * 2);
    c.fillStyle = "red";
    c.fill();
  }

  update(c) {
    c.draw(c);

    const angle = Math.atan2()
  }
}
