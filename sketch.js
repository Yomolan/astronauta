var bg;
var sleep;
var brush;
var gym;
var eat;
var drink; 
var move; 
var astronaut



function preload() {
  bg = loadImage("iss.png");

  bath = loadAnimation("bath1.png", "bath2.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  gym = loadAnimation("gym1.png", "gym2.png");
  eat = loadAnimation("eat1.png", "eat2.png");
  drink = loadAnimation("drink1.png","drink2.png" );
  move = loadAnimation("move.png", "move1.png","move.png", "move1.png");
}

function setup(){
  createCanvas(600, 500);
  
  astronaut = createSprite(300,230); 
  astronaut.addAnimation("sleeping", sleep); 
  astronaut.scale = 0.1;

}

function draw() {
  background(bg);  
  edges = createEdgeSprites();
  
  astronaut.bounceOff(edges);
  

  if (keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if (keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gym", gym);
    astronaut.changeAnimation("gym");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("LEFT_ARROW")){
    astronaut.addAnimation("bath", bath);
    astronaut.changeAnimation("bath");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("M")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.y = 350;
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }

  drawSprites();
}