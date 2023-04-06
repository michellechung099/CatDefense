import Projectile from "./projectile"
import {enemies} from './index'

export default class Cat {
  constructor({position = {x: 0, y:0}}) {
    this.position = position;
    this.size = 64;
    this.center = {
      x: this.position.x + this.size/2,
      y: this.position.y + this.size/2
    }
    this.projectiles = [
      new Projectile({position: {x: this.center.x, y: this.center.y }, enemy: enemies[0]})
    ];
    this.occupied = false;
    //radius of which the cat can shoot at enemies
    this.radius = 250;
    this.target;
    this.frames = 0;
    this.image = new Image()
    this.image.src = "assets/sunglassescat.png"
  }

  draw(c) {
    c.drawImage(this.image, this.position.x, this.position.y)
    // c.fillStyle = "purple";
    // c.fillRect(this.position.x, this.position.y, this.size, this.size);
    c.beginPath();
    c.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2);
    c.fillStyle = 'rgba(0,0,255,0)'
    c.fill();
  }

  update(c) {
    this.draw(c);
    if (this.frames % 90 === 0 && this.target) {
      this.projectiles.push(
        new Projectile({position: {x: this.center.x, y: this.center.y }, enemy: this.target})
      )
    }
    this.frames++;
  }


  // shoot() {
  //   this.projectiles.push(
  //     new Projectile({
  //       position: {
  //         x: this.center.x - 20,
  //         y: this.center.y - 110
  //       },
  //       enemy: this.target
  //     })
  //   )
  // }

}
