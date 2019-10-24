let scl;

function setup() {
  createCanvas(1300, 600);
  angleMode(DEGREES);
  scl = 20;
}



function draw() {
  background(150, 150, 250);
  strokeWeight(width / 300);
  for (let i = 0; i <= width/scl; i++) {
    for (let j = 0; j <= height/scl; j++) {
      let cr = new cross(i * scl, j * scl);
      push();
      stroke(255);
      translate(i * scl, j * scl)
      rotate(frameCount*5);
      cr.show();
      pop();

    }
  }
}

class cross {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  rotateCr() {
    translate(this.x, this.y);
    rotate(frameCount * 0.25);
  }
  show() {
    line(-scl / 2, 0, scl / 2, 0);
    line(0, -scl / 2, 0, scl / 2);
  }
}
