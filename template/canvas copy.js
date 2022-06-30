var canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d"),
  width = 1000,
  height = 500,
  size = 60, // 用于更换方向时初始化目标点的位置，该值决定了最小路径
  lines = []; // 存放最基础的能画线的原始线条对象

function line() {
  this.path = []; // 存放当前line实例里需要画的线段坐标
  this.speed = 20; // 每次新画线段的实际长度
  this.count = 10;
  this.x = width / 2 + 1; // 当前画笔所在点
  this.y = height / 2 + 1;
  this.target = {
    // 目标画笔所在点
    x: width / 2,
    y: height / 2,
  };
  this.dist = 0; // 连接目标点与当前点，形成的线段的长度
  this.angle = 0; // 目标点与当前点形成的夹角
  this.updateAngle(); // 初始化angle
  this.updateDist(); // 初始化dist
}

line.prototype.updateAngle = function () {
  var dx = this.target.x - this.x,
    dy = this.target.y - this.y;
  this.angle = Math.atan2(dy, dx);
};

line.prototype.updateDist = function () {
  var dx = this.target.x - this.x,
    dy = this.target.y - this.y;
  this.dist = Math.sqrt(dx * dx + dy * dy);
};

line.prototype.step = function (i) {
  this.x += Math.cos(this.angle) * this.speed;
  this.y += Math.sin(this.angle) * this.speed;
  this.updateDist();

  if (this.dist < this.speed) { // 当前点与目标点之间的距离 小于 当前速度，则当前点直接到目标点
    this.x = this.target.x;
    this.y = this.target.y;
    this.changeTarget();
  }

  this.path.push({
    x: this.x,
    y: this.y,
  });
};

// 改变方向
line.prototype.changeTarget = function () {
  var randStart = randInt(0, 3);
  switch (randStart) {
    case 0: // up
      this.target.y = this.y - size;
      break;
    case 1: // right
      this.target.x = this.x + size;
      break;
    case 2: // down
      this.target.y = this.y + size;
      break;
    case 3: // left
      this.target.x = this.x - size;
  }
  this.updateAngle();
};

line.prototype.draw = function (i) {
  ctx.beginPath();
  for (var j = 0, length = this.path.length; j < length; j++) {
    ctx[j === 0 ? "moveTo" : "lineTo"](this.path[j].x, this.path[j].y);
  }
  ctx.strokeStyle = "red";
  ctx.lineWidth = 1;
  ctx.stroke();
};

init();

function init() {
  canvas.width = width;
  canvas.height = height;
  lines.push(new line());
  loop();
}

function loop() {
  setTimeout(loop, 2000);
  // requestAnimationFrame(loop); // 这个太快不方便调试
  step();
  clear();
  draw();
}

function step() {
  var i = lines.length;
  while (i--) {
    lines[i].step(i);
  }
}

function clear() {
  ctx.clearRect(0, 0, width, height);
}

function draw() {
  ctx.save();
  var i = lines.length;
  while (i--) {
    lines[i].draw(i);
  }
  ctx.restore();
}

function randInt(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1));
}

