const DPR = window.devicePixelRatio || 1;
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
console.log(111, ctx)
var canvasWidth = canvas.width; // max X distance
var canvasHeight = canvas.height; // max Y distance
const scale = 50;
let origin = {x: 0, y: 0}
let temp = 0

function draw() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
// 存储上下文
ctx.save();

ctx.translate(origin.x, 0)
canvas.style.left =0 + 'px'
// canvas.style.left = temp - 20 + 'px'
  ctx.lineWidth = 1;
ctx.fillStyle = "#f6f7f9";
ctx.rect(0, 0, canvasWidth, canvasHeight);
ctx.fill();

ctx.strokeStyle = "#4E5969";
var correction = 0.5 * (ctx.lineWidth % 2);
ctx.setLineDash([1, scale - 1]);
ctx.beginPath();
const mid = scale / 2 - 1;

for (var i = mid; i < canvasWidth; i += scale) {
  ctx.moveTo(Math.round(i + correction) - correction, mid);
  ctx.lineTo(Math.round(i + correction) - correction, canvasHeight);
}

ctx.stroke();
ctx.restore();
}



setInterval(() => {  
  temp = origin.x
origin.x += 20
  console.log(222)
  
  draw()
  
}, 2000);

