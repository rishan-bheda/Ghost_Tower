var tower, towerImage, ghost, ghostImage, door, doorImage, climber, door, climberImage, doorImage, climberGroup, spookySound;

var gameState = "play";

function preload(){
  
  towerImage = loadImage("tower.png");
  ghostImage = loadImage("ghost-standing.png");
  climberImage = loadImage("climber.png");
  doorImage = loadImage("door.png");
  spookySound = loadSound("spooky.wav");
}

function setup(){
  
  createCanvas(600,600)
  
  tower = createSprite(300,300);
  tower.addImage(towerImage);
  tower.velocityY = 2;
  
  ghost = createSprite(300,300);
  ghost.addImage(ghostImage);
  ghost.scale = 0.4;
  
  climberGroup = new Group();
}

function draw(){
  
  background(0);
  
  spookySound.loop();
  
  if (gameState === "play"){
    
   if(tower.y >600){
    tower.y = 300;
  }  
    
  if(keyDown("space")){
    ghost.velocityY = -10;
  }
  
  if(keyDown("left_arrow")){
    ghost.x = ghost.x - 2;
  }
  if(keyDown("right_arrow")){
    ghost.x = ghost.x + 2;
  }
  
   ghost.velocityY = ghost.velocityY + 0.5;
  
  spawnWindow();
    
    if(ghost.y > 600 || ghost.isTouching(climberGroup)){
      gameState = "end";
    }
  
  drawSprites();
  }
  
  if(gameState === "end"){
    
    stroke("yellow");
    textSize(30);
    fill("yellow");
    text("Game Over", 250,300);
    
  }
}

function spawnWindow(){
  if (frameCount%200 === 0){
    door = createSprite(200,100);
    door.addImage(doorImage);
    door.velocityY = 2;
    
    climber = createSprite(200,150);
    climber.addImage(climberImage);
    climber.velocityY = 2;
    
    door.x = Math.round(random(120,400));
    climber.x = door.x;
    
    climberGroup.add(climber);
  }
}
