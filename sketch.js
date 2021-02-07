let canvasX = 300;
let canvasY = 600;

function setup(){
  createCanvas(canvasX, canvasY, SVG);
  noFill();
}

function randIntBetween(min, max) {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.floor(min));
}

function draw(){
  let padding = 4;
  let width = 16;

  for(let i = 2; i < canvasX; i += 20){
    push(); // Start translation
    translate(i, 0);
    for(let j = 0; j < canvasY; j += 20 + padding){
      translate(0, width + padding);
      square(0, 0, width);
    }
    pop();  // End translation
  }

  noLoop();
}