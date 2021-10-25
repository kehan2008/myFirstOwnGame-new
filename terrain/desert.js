class Desert{
    constructor(){
        this.image = loadImage("images/this.desert")
        this.diamond = loadImage();
        this.monster2 = loadImage();
        
        
        
    }

    display(){
        imageMode("CENTER");
        image(this.image,displaywidth/2,displayHeight/2);

        this.spawnDiamonds();
        this.spawnGold();
        this.spawnMonsters();
    }

    spawnDiamonds(){
            if(frameCount%60 === 0){
                var x = Math.round(Math.random(50,displayWidth-50));
                diamond =  createSprite(x,displayHeight-50);
                var rand = Math.round(Math.random(1));
                if(rand == 1){
                    diamond.addImage(diamond);
                }
                diamond.lifetime(40);
                diamond.scale = 0.5;
            // add scale
        }
    }

    spawnGold(){
        if(frameCount%40 === 0){
            var x = Math.round(Math.random(40,displayWidth-40));
            gold =  createSprite(x,displayHeight-40);
            var rand = Math.round(Math.random(1));
            if(rand == 1){
                gold.addImage(gold);
            }
            gold.lifetime(40);
            gold.scale = 0.5;
    }
}

    spawnMonsters(){
        if(frameCount%50 === 0){
            var x = Math.round(Math.random(50,displayWidth-50));
            monster =  createSprite(x,displayHeight-50);
            var rand = Math.round(Math.random(2));
            if(rand == 1){
                monster.addImage(monster2);
            
            monster.lifetime(50);
            monster.scale = 1;
             }
        }
    
    }
}
