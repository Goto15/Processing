let canvasX = 600;
let canvasY = 300;

function setup(){
  createCanvas(canvasX, canvasY, SVG);
  rectMode(CENTER);
  noFill();
}

function randIntBetween(min, max) {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.floor(min));
}

function randPositiveAndNegative(num){
  return (Math.random() * (2 * num)) - num;
}

function degreeToRadian(degree){
  return degree * (Math.PI / 180);
}

function draw(){
  let padding = 4;
  let randSum = 0;
  let randStep = .25;
  let width = 16;
  let interval = padding + width;

  for(let i = 40; i < canvasX - 40; i += interval){
    for(let j = 40; j < canvasY - 40; j += interval){
      randSum += (i / interval) * randStep;
      let rotation = randPositiveAndNegative(randSum);
      let xNoise = randPositiveAndNegative(randSum);
      let yNoise = randPositiveAndNegative(randSum);

      push();
      translate(i + (width / 2) + (xNoise * .02), j + (width / 2) + (yNoise * .02));
      rotate(degreeToRadian(rotation));
      square(0, 0, width);
      pop();
    }
  }

  noLoop();
}