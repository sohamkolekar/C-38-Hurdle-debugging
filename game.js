class Game{
    constructor(){

    }
    getState(){
        var gameStateRef=database.ref('gameState')
        gameStateRef.on("value",function(data){
            gameState=data.val();
        })
    }
    updateState(state){
        database.ref('/').update({
            gameState:state
        })
    }

    async start(){
        if(gameState===0){
            player=new Player();
            var playerCountRef=await database.ref('playerCount').once("value")
            if(playerCountRef.exists()){
                playerCount=playerCountRef.val()
                player.getCount();
            }
            form=new Form()
            form.display()
        }
        athlete1=createSprite(100,200);
        athlete1.addImage("ath1",ath_runningimg);

        athlete2=createSprite(100,400);
        athlete2.addImage("ath2",ath_runningimg);

        athlete3=createSprite(100,600);
        athlete3.addImage("ath3",ath_runningimg);

        athlete4=createSprite(100,800);
        athlete4.addImage("ath4",ath_runningimg);
        
        athletes=[athlete1,athlete2,athlete3,athlete4];
    }
    play(){
        form.hide();
        Player.getPlayerInfo();
        
        if(allPlayers!==undefined){
            var athleteindex=0;
            //x and y positions of athletes
            var x;
            var y=200;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
            for(var plr in allPlayers){
                athleteindex=athleteindex+1;
                console.log(athleteindex)
                //position of athletes a little away from each other
                y=y+200;

                x=displayWidth-allPlayers[plr].distance
                athletes[athleteindex-1].x=x;
                athletes[athleteindex-1].y=y;

                
            }
        }

        if(keyIsDown(LEFT_ARROW)&&player.index!==null){
            player.distance+=10
            player.updateDistance()
        }

        
    }

}