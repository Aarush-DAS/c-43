class Form{
    constructor (){
        this.input=createInput("").attribute("placeHolder","Enter Your Name");
        this.button=createButton("play");
        this.greeting=createElement("h2");

    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }

    display(){
        this.input.position(width/2-100,height/2-100);
        this.button.position(width/2-90,height/2-80);
        this.greeting.position(width/2-200,height/2-100);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name=this.input.value();
            player.update(player.name);
            fill("red");
            this.greeting.html("Hello " + player.name )
      this.greeting.position(displayWidth/2-50, displayHeight/4)
      game.update(1);
      player.update();
      drawSprites();
    })
}
}