import Enemy from "./enemy";

const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);

const img = new Image();
img.src = 'assets/gameMap.png';
img.onload = () => {
  ctx.drawImage();
}
