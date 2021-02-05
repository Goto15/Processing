import processing.svg.*;

int canvasX = 500;
int canvasY = 500;
int rand = (int)(Math.random() * 10000); 

void setup(){
  size(500, 500, SVG, "truchetTiles" + rand + ".svg");
  background(23, 23, 23);
}

void truchetTile(int x, int y){
  int tileType = (int)(Math.random() + .5);

  // Top left arc
  if(tileType == 0){
    arc(x, y, 25, 25, 0, PI/2);
    arc(x+25, y+25, 25, 25, PI, 1.5*PI);
  } else {
    arc(x, y+25, 25, 25, 1.5*PI, 2*PI);
    arc(x+25, y, 25, 25, PI/2, PI);
  }
}

void draw(){
  for(int i = 0 ; i < canvasX; i += 25){
    for(int j = 0; j < canvasY; j += 25){
      truchetTile(i , j);
    }
  }
  
  System.out.println("Finished");
  exit();
}
