var fixedRect, movingRect;
var car,bike;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car = createSprite(60,400,50,80);
  car.velocityX=10
  bike = createSprite(700,400,50,80);
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(car,bike)){
  car.shapeColor = "red";
  bike.shapeColor = "red";
  car.velocityX = car.velocityX*(-1)
}
else {
  car.shapeColor = "green";
  bike.shapeColor = "green";
}

 
  drawSprites();
}
