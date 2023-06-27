!function(){var t={637:function(t,i){function e(t,i){if(!(this instanceof e))return new e(t,i);this.x=t||0,this.y=i||0}t.exports=e,e.fromArray=function(t){return new e(t[0]||0,t[1]||0)},e.fromObject=function(t){return new e(t.x||0,t.y||0)},e.prototype.addX=function(t){return this.x+=t.x,this},e.prototype.addY=function(t){return this.y+=t.y,this},e.prototype.add=function(t){return this.x+=t.x,this.y+=t.y,this},e.prototype.addScalar=function(t){return this.x+=t,this.y+=t,this},e.prototype.addScalarX=function(t){return this.x+=t,this},e.prototype.addScalarY=function(t){return this.y+=t,this},e.prototype.subtractX=function(t){return this.x-=t.x,this},e.prototype.subtractY=function(t){return this.y-=t.y,this},e.prototype.subtract=function(t){return this.x-=t.x,this.y-=t.y,this},e.prototype.subtractScalar=function(t){return this.x-=t,this.y-=t,this},e.prototype.subtractScalarX=function(t){return this.x-=t,this},e.prototype.subtractScalarY=function(t){return this.y-=t,this},e.prototype.divideX=function(t){return this.x/=t.x,this},e.prototype.divideY=function(t){return this.y/=t.y,this},e.prototype.divide=function(t){return this.x/=t.x,this.y/=t.y,this},e.prototype.divideScalar=function(t){return 0!==t?(this.x/=t,this.y/=t):(this.x=0,this.y=0),this},e.prototype.divideScalarX=function(t){return 0!==t?this.x/=t:this.x=0,this},e.prototype.divideScalarY=function(t){return 0!==t?this.y/=t:this.y=0,this},e.prototype.invertX=function(){return this.x*=-1,this},e.prototype.invertY=function(){return this.y*=-1,this},e.prototype.invert=function(){return this.invertX(),this.invertY(),this},e.prototype.multiplyX=function(t){return this.x*=t.x,this},e.prototype.multiplyY=function(t){return this.y*=t.y,this},e.prototype.multiply=function(t){return this.x*=t.x,this.y*=t.y,this},e.prototype.multiplyScalar=function(t){return this.x*=t,this.y*=t,this},e.prototype.multiplyScalarX=function(t){return this.x*=t,this},e.prototype.multiplyScalarY=function(t){return this.y*=t,this},e.prototype.normalize=function(){var t=this.length();return 0===t?(this.x=1,this.y=0):this.divide(e(t,t)),this},e.prototype.norm=e.prototype.normalize,e.prototype.limit=function(t,i){return Math.abs(this.x)>t&&(this.x*=i),Math.abs(this.y)>t&&(this.y*=i),this},e.prototype.randomize=function(t,i){return this.randomizeX(t,i),this.randomizeY(t,i),this},e.prototype.randomizeX=function(t,i){var e=Math.min(t.x,i.x),n=Math.max(t.x,i.x);return this.x=o(e,n),this},e.prototype.randomizeY=function(t,i){var e=Math.min(t.y,i.y),n=Math.max(t.y,i.y);return this.y=o(e,n),this},e.prototype.randomizeAny=function(t,i){return Math.round(Math.random())?this.randomizeX(t,i):this.randomizeY(t,i),this},e.prototype.unfloat=function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},e.prototype.toFixed=function(t){return void 0===t&&(t=8),this.x=this.x.toFixed(t),this.y=this.y.toFixed(t),this},e.prototype.mixX=function(t,i){return void 0===i&&(i=.5),this.x=(1-i)*this.x+i*t.x,this},e.prototype.mixY=function(t,i){return void 0===i&&(i=.5),this.y=(1-i)*this.y+i*t.y,this},e.prototype.mix=function(t,i){return this.mixX(t,i),this.mixY(t,i),this},e.prototype.clone=function(){return new e(this.x,this.y)},e.prototype.copyX=function(t){return this.x=t.x,this},e.prototype.copyY=function(t){return this.y=t.y,this},e.prototype.copy=function(t){return this.copyX(t),this.copyY(t),this},e.prototype.zero=function(){return this.x=this.y=0,this},e.prototype.dot=function(t){return this.x*t.x+this.y*t.y},e.prototype.cross=function(t){return this.x*t.y-this.y*t.x},e.prototype.projectOnto=function(t){var i=(this.x*t.x+this.y*t.y)/(t.x*t.x+t.y*t.y);return this.x=i*t.x,this.y=i*t.y,this},e.prototype.horizontalAngle=function(){return Math.atan2(this.y,this.x)},e.prototype.horizontalAngleDeg=function(){return s(this.horizontalAngle())},e.prototype.verticalAngle=function(){return Math.atan2(this.x,this.y)},e.prototype.verticalAngleDeg=function(){return s(this.verticalAngle())},e.prototype.angle=e.prototype.horizontalAngle,e.prototype.angleDeg=e.prototype.horizontalAngleDeg,e.prototype.direction=e.prototype.horizontalAngle,e.prototype.rotate=function(t){var i=this.x*Math.cos(t)-this.y*Math.sin(t),e=this.x*Math.sin(t)+this.y*Math.cos(t);return this.x=i,this.y=e,this},e.prototype.rotateDeg=function(t){return t=r(t),this.rotate(t)},e.prototype.rotateTo=function(t){return this.rotate(t-this.angle())},e.prototype.rotateToDeg=function(t){return t=r(t),this.rotateTo(t)},e.prototype.rotateBy=function(t){var i=this.angle()+t;return this.rotate(i)},e.prototype.rotateByDeg=function(t){return t=r(t),this.rotateBy(t)},e.prototype.distanceX=function(t){return this.x-t.x},e.prototype.absDistanceX=function(t){return Math.abs(this.distanceX(t))},e.prototype.distanceY=function(t){return this.y-t.y},e.prototype.absDistanceY=function(t){return Math.abs(this.distanceY(t))},e.prototype.distance=function(t){return Math.sqrt(this.distanceSq(t))},e.prototype.distanceSq=function(t){var i=this.distanceX(t),e=this.distanceY(t);return i*i+e*e},e.prototype.length=function(){return Math.sqrt(this.lengthSq())},e.prototype.lengthSq=function(){return this.x*this.x+this.y*this.y},e.prototype.magnitude=e.prototype.length,e.prototype.isZero=function(){return 0===this.x&&0===this.y},e.prototype.isEqualTo=function(t){return this.x===t.x&&this.y===t.y},e.prototype.toString=function(){return"x:"+this.x+", y:"+this.y},e.prototype.toArray=function(){return[this.x,this.y]},e.prototype.toObject=function(){return{x:this.x,y:this.y}};var n=180/Math.PI;function o(t,i){return Math.floor(Math.random()*(i-t+1)+t)}function s(t){return t*n}function r(t){return t/n}}},i={};function e(n){var o=i[n];if(void 0!==o)return o.exports;var s=i[n]={exports:{}};return t[n](s,s.exports,e),s.exports}e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,{a:i}),i},e.d=function(t,i){for(var n in i)e.o(i,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:i[n]})},e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)},function(){"use strict";e.d({},{g:function(){return f}});const t=[{x:-67,y:380},{x:191,y:380},{x:190,y:270},{x:508,y:270},{x:507,y:540},{x:762,y:540},{x:764,y:150},{x:1022,y:150},{x:1019,y:400},{x:1346,y:400}],i=[0,0,0,0,0,0,0,0,0,0,965,965,965,965,965,965,965,965,0,0,0,0,0,0,0,0,0,0,0,965,0,0,0,0,0,0,0,0,965,0,0,965,965,965,965,965,965,965,965,965,0,0,0,0,0,0,0,0,965,0,965,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,965,0,965,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,965,965,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,965,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,965,0,0,0,0,0,0,0,0,0,0,0,0,0,0,965,965,965,965,965,965,0,0,0,0,0,0,0,0,965,965,965,965,965,965,0,0,0,0,0,965,0,0,0,0,0,0,0,0,965,0,0,0,0,0,0,0,0,0,0,965,965,965,965,965,965,965,965,965,0,0,0,0,0,0];class n{constructor(t){let{position:i={x:0,y:0}}=t;this.position=i,this.waypointIndex=0,this.width=90,this.height=90,this.radius=50,this.health=100,this.velocity={x:0,y:0},this.image=new Image,this.image.src="assets/Run.png",this.frames={max:6,current:0,timeElapsed:0,timeHold:6}}drawEnemy(t){const i=this.image.width/this.frames.max,e={position:{x:i*this.frames.current,y:0},width:i,height:this.image.height},n=this.position.x-50,o=this.position.y-10;t.drawImage(this.image,e.position.x,e.position.y,e.width,e.height,n,o,e.width,e.height),t.fillStyle="black",t.fillRect(this.position.x-this.width/2,this.position.y-10,this.width,8),t.fillStyle="purple",t.fillRect(this.position.x-this.width/2,this.position.y-10,this.width*this.health/100,8),this.frames.timeElapsed++,this.frames.timeElapsed%this.frames.timeHold==0&&(this.frames.current++,this.frames.current>=this.frames.max-1&&(this.frames.current=0))}update(i){this.drawEnemy(i);const e=t[this.waypointIndex],n=e.y-this.position.y,o=e.x-this.position.x,s=Math.atan2(n,o);this.velocity.x=2*Math.cos(s),this.velocity.y=2*Math.sin(s),this.position.x+=this.velocity.x,this.position.y+=this.velocity.y,Math.abs(Math.round(this.position.x)-Math.round(e.x))<Math.abs(this.velocity.x)&&Math.abs(Math.round(this.position.y)-Math.round(e.y))<Math.abs(this.velocity.y)&&this.waypointIndex<t.length-1&&this.waypointIndex++}}var o=e(637),s=e.n(o);class r{constructor(t){let{position:i={x:0,y:0},enemy:e}=t;this.position=i,this.velocity={x:0,y:0},this.speed=5,this.enemy=e,this.radius=10,this.image=new Image,this.image.src="assets/projectile.png"}draw(t){t.drawImage(this.image,this.position.x,this.position.y)}update(t){this.draw(t);const i=new(s())(this.position.x,this.position.y),e=new(s())(this.enemy.position.x,this.enemy.position.y).subtract(i).clone().normalize().multiplyScalar(this.speed);i.add(e.clone().multiplyScalar(1)),this.position.x=i.x,this.position.y=i.y}}class h{constructor(t){let{position:i={x:0,y:0}}=t;this.position=i,this.size=64,this.center={x:this.position.x+this.size/2,y:this.position.y+this.size/2},this.projectiles=[new r({position:{x:this.center.x,y:this.center.y},enemy:f[0]})],this.occupied=!1,this.radius=250,this.target,this.frames=0,this.image=new Image,this.image.src="assets/sunglassescat.png"}draw(t){t.drawImage(this.image,this.position.x,this.position.y),t.beginPath(),t.arc(this.center.x,this.center.y,this.radius,0,2*Math.PI),t.fillStyle="rgba(0,0,255,0)",t.fill()}update(t){this.draw(t),this.frames%90==0&&this.target&&this.projectiles.push(new r({position:{x:this.center.x,y:this.center.y},enemy:this.target})),this.frames++}}document.getElementById("play-game-button").addEventListener("click",(function(){document.getElementById("instructions").style.display="none",document.getElementById("social-links").style.visibility="visible",document.getElementById("side-section").style.display="flex",document.getElementById("canvas").style.display="block",p.src="assets/finalMap.png"}));const a=document.getElementById("canvas"),y=a.getContext("2d");a.width=1280,a.height=768,y.fillStyle="white",y.fillRect(0,0,a.width,a.height);const p=new Image;p.onload=()=>{S()};const c=[];for(let t=0;t<i.length;t+=20)c.push(i.slice(t,t+20));class u{constructor(t){let{position:i={x:0,y:0}}=t;this.position=i,this.size=64,this.color="rgba(255, 255, 255, 0.2)",this.occupied=!1}draw(){y.fillStyle=this.color,y.fillRect(this.position.x,this.position.y,this.size,this.size)}update(t){this.draw(),t.x>this.position.x&&t.x<this.position.x+this.size&&t.y>this.position.y&&t.y<this.position.y+this.size?this.color="rgba(255, 255, 255, 0.2)":this.color="rgba(255, 255, 255, 0)"}}const l=[];c.forEach(((t,i)=>{t.forEach(((t,e)=>{965===t&&l.push(new u({position:{x:64*e,y:64*i}}))}))}));let d,x,f=[],m=[],g=3,v=100,w=9,M=0;function b(i){for(let e=1;e<i+1;e++){let i=130*e,o=new n({position:{x:t[0].x-i,y:t[0].y}});f.push(o)}}function S(){x=requestAnimationFrame(S),y.drawImage(p,0,0);for(let t=f.length-1;t>=0;t--){const i=f[t];i.update(y),i.position.x>a.width&&(w-=1,f.splice(t,1),document.querySelector("#hearts").innerHTML=w,0===w&&(cancelAnimationFrame(x),y.font="bold 75px Archivo Black",y.fillStyle="white",y.strokeStyle="black",y.textAlign="center",y.lineWidth=7,y.strokeText("Game Over",a.width/2,a.height/2),y.fillText("Game Over",a.width/2,a.height/2),document.getElementById("play-again-button").style.display="block"))}0===f.length&&(g+=2,b(g)),l.forEach((t=>{t.update(I)})),m.forEach((t=>{t.update(y),t.target=null;const i=f.filter((i=>{const e=i.position.x-t.center.x,n=i.position.y-t.center.y;return Math.hypot(e,n)<i.radius+t.radius}));t.target=i[0];for(let i=t.projectiles.length-1;i>=0;i--){const e=t.projectiles[i];e.update(y);const n=e.enemy.position.x-e.position.x,o=e.enemy.position.y-e.position.y;if(Math.hypot(n,o)<e.enemy.radius+e.radius){if(e.enemy.health-=20,e.enemy.health<=0){const t=f.findIndex((t=>e.enemy===t));t>-1&&(f.splice(t,1),v+=20,document.querySelector("#diamonds").innerHTML=v,M+=10,document.querySelector("#score-number").innerHTML=M)}t.projectiles.splice(i,1)}}}))}b(g);const z=document.getElementById("pause-button"),E=document.getElementById("resume-button");z.addEventListener("click",(function(){cancelAnimationFrame(x)})),E.addEventListener("click",(function(){S()})),document.getElementById("play-again-button").addEventListener("click",(function(){w=9,document.querySelector("#hearts").innerHTML=w,M=0,document.querySelector("#score-number").innerHTML=M,v=100,document.querySelector("#diamonds").innerHTML=v,g=3,f=[],m=[],b(g),this.style.display="none",S()}));let I={x:void 0,y:void 0};a.addEventListener("click",(t=>{d&&!d.isOccupied&&v-50>=0&&(v-=50,document.querySelector("#diamonds").innerHTML=v,m.push(new h({position:{x:d.position.x,y:d.position.y}})),d.isOccupied=!0)})),a.addEventListener("mousemove",(t=>{I.x=t.clientX,I.y=t.clientY,d=null;for(let t=0;t<l.length;t++){const i=l[t];if(I.x>i.position.x&&I.x<i.position.x+i.size&&I.y>i.position.y&&I.y<i.position.y+i.size){d=i;break}}}));const X=function(t,i){let e=Date.now();return function(i){e+100-Date.now()<0&&(t(i),e=Date.now())}}(mouseMoveListener);a.addEventListener("mousemove",X)}()}();
//# sourceMappingURL=main.js.map