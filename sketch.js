var movingRect;
var fixedRect;
function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 50);
fixedRect = createSprite(200,200,50,50);
movingRect.shapeColor = "green";
fixedRect.shapeColor = "green";
}


function draw() {
  background("black");  
  movingRect.y = mouseY
  movingRect.x = mouseX
  if(movingRect.x-fixedRect.x<=((movingRect.width+fixedRect.width)/2)
  && fixedRect.x-movingRect.x<=((movingRect.width+fixedRect.width)/2)
  && movingRect.y-fixedRect.y<=((movingRect.height+fixedRect.height)/2)
  && fixedRect.y-movingRect.y<=((movingRect.height+fixedRect.height)/2)
){
movingRect.shapeColor = "red"
fixedRect.shapeColor = "red"
  }
  else{
    movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  }
  drawSprites();
}