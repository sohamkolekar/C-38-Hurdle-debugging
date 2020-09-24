class Form{
    constructor(){
        this.input=createInput("athleteName");
        this.title=createElement('h1');
        this.greeting=createElement('h2');
        this.button=createButton('play');
    }
    hide(){
        this.input.hide();
        this.button.hide();
    }
    display(){
        this.title.html('Hurdle Game');
        this.title.position(displayWidth/2,0);

        this.input.position(displayWidth/3,100);
        this.greeting.position(displayWidth/4,50);
        this.button.position(displayWidth/2,displayHeight/2);
        
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            //alert('all ok');
            player.name=this.input.value();
            playerCount=playerCount+1
            player.index=playerCount;   
            player.updateName();
            player.updateCount(playerCount);
            text("Hello"+player.name,100,100);
             
            
         }
        )
    }
}