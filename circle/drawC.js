function drawC() {
  preCanvas.noFill();
  preCanvas.strokeWeight(0.5);
  preCanvas.stroke("green");
  for (let i = 1; i < width / w; i++) {
    preCanvas.circle(i * w + w / 2, w / 2, r);
    preCanvas.circle(w / 2, i * w + w / 2, r);
  }
}
