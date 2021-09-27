class Forest{
    constructor(){
        this.image = loadImage("images/this.forest");
        this.animal1 = loadImage()
        this.animal2 = loadImage()
        
        
    }

    display(){
        imageMode("CENTER");
        image(this.image,displaywidth/2,displayHeight/2);

        this.spawnAnimals();
        this.spawnMonsters();
    }

    spawnAnimals(){
        if(frameCount%40 === 0){
            var x = Math.round(Math.random(50,displayWidth-50));
            animal =  createSprite(x,displayHeight-50);
            var rand = Math.round(Math.random(1,2));
            if(rand == 1){
                animal.addImage(animal1);
            }else if(rand === 2){
                animal.addImage(animal2);
            }
            animal.lifetime(30);

            // add scale
        }
    }

    spawnMonsters(){

    }
}