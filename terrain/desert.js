class Desert{
    constructor(){
        this.image = loadImage("images/this.desert")
        this.animal3 = loadImage()
        this.animal4 = loadImage()
        
        
    }

    display(){
        imageMode("CENTER");
        image(this.image,displaywidth/2,displayHeight/2);

        this.spawnAnimals();
        this.spawnMonsters();
    }

    spawnAnimals(){
        if(frameCount%50 === 0){
            var x = Math.round(Math.random(50,displayWidth-50));
            animal =  createSprite(x,displayHeight-50);
            var rand = Math.round(Math.random(3,4));
            if(rand == 1){
                animal.addImage(animal3);
            }else if(rand === 2){
                animal.addImage(animal4);
            }
            animal.lifetime(30);

            // add scale
        }
    }

    spawnMonsters(){

    }
}

    

