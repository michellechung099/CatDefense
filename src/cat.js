import Projectile from "./projectile";

export default class Cat {
  constructor({position = {x: 0, y:0}}) {
    this.position = position;
    this.size = 64;
    this.center = {
      x: this.position.x + this.size/2,
      y: this.position.y + this.size/2
    }
    this.projectiles = [
      new Projectile({position: {x: this.center.x, y: this.center.y }})
    ];
    this.occupied = false;
    // this.target;
  }

  draw(c) {
    c.fillStyle = "purple";
    c.fillRect(this.position.x, this.position.y, this.size, this.size);
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
