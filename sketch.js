
var database,canvas;
var player;
var form;
var playerCount,gameState=0
var game
var athlete1,athlete2,athlete3,athlete4,athletes;
var ath_runningimg,ath_jumpingimg;
var allPlayers

            


function preload(){
    ath_runningimg=loadAnimation("../images/step1.png","../images/step7.png")
    ath_jumpingimg=loadAnimation("../images/step2.png","../images/step3.png","../images/step4.png","../images/step5.png","../images/step6.png")
}

function setup(){
    canvas=createCanvas(displayWidth,displayHeight);
    database=firebase.database();

   
    game=new Game();
    game.getState();
    game.start();
    
}
function draw(){
    //background(rgb(0,200,100));
   if(playerCount===4){
    game.updateState(1)
   }
   if(gameState===1){
    clear();
    game.play();
   }

    
    
}   

