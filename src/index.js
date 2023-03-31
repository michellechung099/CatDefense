// import Enemy from "./enemy";
import Waypoints from "./waypoints.js"

document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.getElementById("game-canvas");
  const c = canvas.getContext("2d");

  canvas.width = 1280;
  canvas.height = 768;

  c.fillStyle = "white";
  c.fillRect(0, 0, canvas.width, canvas.height);

  const img = new Image();
  img.onload = () => {
    movement();
  }
  img.src= "assets/finalMap.png"

  let x = 50;
  function movement() {
    requestAnimationFrame(movement);
    c.drawImage(img, 0, 0);
    c.fillStyle = "blue";
    c.fillRect(x, 400, 90, 90);
    x++
  }


});
