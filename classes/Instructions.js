class Instructions{
    constructor(){
        this.title = createElement('h2');
        this.instruction1  = createElement('p');
        this.instruction2 = createElement('p');
        this.start =  createButton("Start Game");
    }

    hide(){
        this.title.hide();
        // TODO -- hide all other elements
    }

    display(){
        this.title.position(displayWidth/2-100, 20);
        this.title.html("Instructions to Play the Game");
        //TO DO instructions to written here 

        this.start.position(displayWidth/2, displayHeight-100);
        this.start.mousePressed(()=>{
            game.play();
        });
    }
}