function randIntBetween(min, max) {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.floor(min));
}

class TruchetTiles {
  tileZero(x, y){
    arc(x, y, 25, 25, 0, Math.PI/2);
    arc(x + 25, y + 25, 25, 25, Math.PI, 1.5 * Math.PI);
  }

  tileOne(x, y){
    arc(x, y+25, 25, 25, 1.5*Math.PI, 2*Math.PI);
    arc(x+25, y, 25, 25, Math.PI/2, Math.PI);
  }

  chooseTile(x, y){
    let tileType = randIntBetween(0, 2);
    tileType === 0 ? this.tileZero(x, y) : this.tileOne(x, y);
  }
}