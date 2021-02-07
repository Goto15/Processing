let canvasX = 100;
let canvasY = 100;

function setup(){
  createCanvas(canvasX, canvasY, SVG);
  noFill();
}

function randIntBetween(min, max) {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.floor(min));
}

function truchetTile(x, y){
  let tileType = randIntBetween(0, 2);

  if(tileType === 0){
    arc(x, y, 25, 25, 0, Math.PI/2);
    arc(x + 25, y + 25, 25, 25, Math.PI, 1.5 * Math.PI);
  } else {
    arc(x, y+25, 25, 25, 1.5*Math.PI, 2*Math.PI);
    arc(x+25, y, 25, 25, Math.PI/2, Math.PI);
  }
}

function draw(){
  for(let i = 0; i < canvasX; i += 25){
    for(let j = 0; j < canvasY; j += 25){
      truchetTile(i, j);
    }
  }

  noLoop();
  save("tiles" + randIntBetween(0, 10000) + ".svg");
}