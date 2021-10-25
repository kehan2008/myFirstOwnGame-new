class Ocean{
    constructor(){
        this.image = loadImage("images/this.ocean")
        this.pearl = loadImage()
        this.monster4 = loadImage()
        this.monster5 = loadImage()
    }

    display(){
        imageMode("CENTER");
        image(this.image,displaywidth/2,displayHeight/2);

        this.spawnPearls();
        this.spawnMonsters();
    }

    spawnPearls(){
        if(frameCount%40 === 0){
            var x = Math.round(Math.random(50,displayWidth-50));
            pearl =  createSprite(x,displayHeight-50);
            var rand = Math.round(Math.random(1));
            if(rand == 1){
                pearl.addImage(pearl);
            
                pearl.lifetime(50);

            // add scale
        }
    }
}

    spawnMonsters(){
        if(frameCount%40 === 0){
            var x = Math.round(Math.random(50,displayWidth-50));
            monster =  createSprite(x,displayHeight-50);
            var rand = Math.round(Math.random(4,5));
            if(rand == 1){
                monster.addImage(monster4);
            }else{(rand == 2)
                monster.addImage(monster5);
            }
        }
            monster.lifetime(30);
            monster.scale = 1;

        }
    }
    