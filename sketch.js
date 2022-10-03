var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  ghost = createSprite(300,300)
  ghost.addImage("ghost",ghostImg)
  ghost.scale = 0.35
  doorsGroup = new Group()
  climbersGroup = new Group()
  invisibleBlockGroup = new Group()
}

function draw() {
  background(200);
  
  if(gameState = "play") {

  
  if(tower.y > 400){
      tower.y = 300
    }
    if(keyDown("space")) {
      ghost.velocityY = -5 
    }
    ghost.velocityY = ghost.velocityY +1
    if(keyDown("a")) {
      ghost.x = ghost.x -2
    }
    if(keyDown("d")) {
      ghost.x = ghost.x +2
    }
    if(climbersGroup.isTouching(ghost ) && (ghost.y>600) ){
ghost.velocityY = 0    } 
if(invisibleBlockGroup.isTouching(ghost)) {
  ghost.destroy ()
  gameState = "end"
}
    spawnDoors()
 
    drawSprites ()
  }

spookySound.play ()
if (gameState == "end") {
  text("Game Over!",300, 300)
}
    

   
}


function spawnDoors () {
  if (frameCount %300 === 0) {

  
  door = createSprite(200,-50)
  climber = createSprite(200,10)
  invisibleBlock = createSprite(200,15)
  invisibleBlock.width = climber.width
  invisibleBlock.height = 2
  invisibleBlock.x = door.x
  door.x = Math.round(random(120,400))
  climber.x = door.x
  door.addImage("door",doorImg)
  climber.addImage("climber",climberImg)
  door.velocityY = +2
  climber.velocityY = 2
  invisibleBlock.velocityY = 2

  doorsGroup.add(door)
  climbersGroup.add(climber)
  invisibleBlockGroup.add(invisibleBlock)
}
}