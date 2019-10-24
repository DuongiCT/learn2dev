let w = 100;
let r = 4 * w / 5;
let angle = 0;
let xh = [];
let yh = [];
let xc = [];
let yc = [];
let preCanvas;

function setup() {
  fullscreen();
  createCanvas(500, 500);
  preCanvas = createGraphics(500, 500);
  preCanvas.background(220);
  angleMode(DEGREES);  background(220);
smooth();

  // drawC();
}

function draw() {
  drawC();
  background(220);
  image(preCanvas, 0, 0);
  for (let i = 1; i < width / w; i++) {
    xh[i] = i * w + w / 2 + r / 2 * cos(angle * i);
    yh[i] = w / 2 + r / 2 * sin(angle * i);
    xc[i] = (w / 2) + r / 2 * cos(angle * i);
    yc[i] =i * w + w / 2 + r / 2 * sin(angle * i);
    stroke('red');
    strokeWeight(4);
    point(xh[i], yh[i]);
    point(xc[i], yc[i]);
    stroke(150);
    strokeWeight(0.75);
    line(xh[i], yh[i], xh[i], width - (w - r) / 2);
    line(xc[i], yc[i], width - (w - r) / 2, yc[i]);
  }
  stroke('purple');
  strokeWeight(4);
  preCanvas.stroke('blue');
  preCanvas.strokeWeight(1);
  for (let i = 1; i < width / w; i++) {
    for (let j = 1; j < width / w; j++) {
      point(xh[i], yc[j]);
      preCanvas.point(xh[i], yc[j]);
    }
  }
  angle += 0.5;
  if (angle == 360) {
    preCanvas.clear();
    angle = 0;

  }
  saveFrames("Liss#####");
}
