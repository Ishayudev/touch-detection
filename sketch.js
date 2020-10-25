let fixed,moving;

function setup() {
  createCanvas(800,400);
  fixed=createSprite(300,200,20,50);
  moving=createSprite(500,200,50,20);
  fixed.debug=true;
  moving.debug=true;
  fixed.shapeColor="green";
  moving.shapeColor="green";
}

function draw() {
  background(0);
  moving.x=mouseX;
  moving.y=mouseY;

  if(moving.x-fixed.x<=(moving.width/2+fixed.width/2)&&fixed.x-moving.x<=(moving.width/2+fixed.width/2)&&moving.y-fixed.y<=(moving.height/2+fixed.height/2)&&fixed.y-moving.y<=(moving.height/2+fixed.height/2)){
   moving.shapeColor="red";
   fixed.shapeColor="red";
  }else {
    moving.shapeColor = "green";
    fixed.shapeColor  = 'green';
  }
  drawSprites();
}