class Mountain{
    constructor(){
        this.image = loadImage("images/this.mountain")
        this.treasure = loadImage()
        this.monster3 = loadImage()
        
        
    }

    display(){
        imageMode("CENTER");
        image(this.image,displaywidth/2,displayHeight/2);

        this.spawnTreasure();
        this.spawnMonsters();
    }

    spawnTreasure(){
        if(frameCount%60 === 0){
            var x = Math.round(Math.random(50,displayWidth-50));
            treasure =  createSprite(x,displayHeight-50);
            var rand = Math.round(Math.random(1));
            if(rand == 1){
                treasure.addImage(treasure);
            
            treasure.lifetime(50);

            // add scale
        }
    }
}

    spawnMonsters(){
        if(frameCount%40 === 0){
            var x = Math.round(Math.random(50,displayWidth-50));
            monster =  createSprite(x,displayHeight-50);
            var rand = Math.round(Math.random(1));
            if(rand == 1){
                monster.addImage(monster3);
           
            }
            monster.lifetime(30);
            monster.scale = 1;

        }
    }

}
