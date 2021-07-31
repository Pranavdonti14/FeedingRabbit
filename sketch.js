var garden,rabbit
var gardenImg,rabbitImg, appleImg, grassImg, leafImg,orangeLeafImg 

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  grassImg = loadImage("grass.png");
  leafImg = loadImage("leaf.png");
  orangeLeafImg = loadImage("orangeLeaf.png");
redImg = loadImage("redImage.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden = createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(200,340,30,30);
rabbit.scale = 0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges = createEdgeSprites();
  rabbit.x = World.MouseX;

  rabbit.collide(edges);

  drawSprites();

  var select_sprites = Math.round(random(1,2));

  if (frameCount % 80 == 0) {
    if(select_sprites == 1) {
createApples()
    }
    else {
createOrange()
createRed()
    }
  }
}

function createApples() {
  apple = createSprite(random(50,350),40,10,10)
  apple.addImage(appleImg)
  apple.scale = 0.07;
  apple.velocityY = 3
  apple.lifetime = 150


}

function createOrange() {
  orange = createSprite(random(50,350),40,10,10)
  orange.addImage(orangeLeafImg)
  orange.scale = 0.07;
  orange.velocityY = 3
  orange.lifetime = 150


}

function createRed() {
  redL = createSprite(random(50,350),40,10,10)
  redL.addImage(redImg)
  redL.scale = 0.07;
  redL.velocityY = 3
  redL.lifetime = 150


}