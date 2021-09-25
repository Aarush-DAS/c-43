var form,canvas,game,player;
var bg,ship,monster,princess,astroids,alienSpaceShip,coin,landing,fuel,spaceShip,manImg;
var gameState=0;

function preload() {
  bg=loadImage("images/space.jpg");
  ship=loadImage("images/ship.png");
  monster=loadImage("images/monster.png");
  manImg=loadImage("images/man.png");
  landing=loadImage("images/landing.jpg");
  princess=loadImage("images/princess.png");
  alienSpaceShip=loadImage("images/alienShip.png");
  fuel=loadImage("images/fuel.png");
  astroids=loadImage("images/astroids.png");
  coin=loadImage("images/coin.png");
  spaceShip=loadImage("images/spaceship.png");
}

function setup() {
  canvas=createCanvas(windowWidth,windowHeight);
  database = firebase.database();
  game=new Game();
  game.getState();
  game.start();
 
  man=createSprite(width/2,height-20,20,20);
  man.addImage(manImg);
  man.visible=false
  }



function draw() {
  //background(bg);  
  if(gameState===1){
    game.play();
  }
  drawSprite();
  
}