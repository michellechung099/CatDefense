// export default class CatTile {
//   constructor({position = {x: 0, y: 0}}) {
//     this.position = position;
//     this.size = 64; //64 pixels per tile
//     this.color = "rgba(255, 255, 255, 0.2)";
//   }

//   draw(c) {
//     // c.fillStyle = this.color;
//     // 255 in each red green and blue makes it white
//     c.fillStyle = this.color;
//     c.fillRect(this.position.x, this.position.y, this.size, this.size);
//   }

//   update(mouse, c) {
//     this.draw(c);

//     if (mouse.x > this.position.x && mouse.x < this.position.x + this.size &&
//         mouse.y > this.position.y && mouse.y < this.position.y + this.size
//       ) {
//         this.color = "white";
//       } else {
//         this.color = "rgba(255, 255, 255, 0.2)"
//       }

//     }
//   }

// }
