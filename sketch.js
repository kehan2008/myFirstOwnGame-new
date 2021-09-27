var forest,desert,mountain,ocean;
var canvas, backgroundImage;
var monsters,monster1,monster2,monster3,monster4,monster5;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game, instructions;

function preload(){
  monster1 = loadImage("images/monster1.png");
  monster2 = loadImage("images/monster2.png");
  monster3 = loadImage("images/monster3.png");
  monster4 = loadImage("images/monster4.png");
  monster5 = loadImage("images/monster5.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}








// preload , setup and draw