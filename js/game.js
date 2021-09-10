class Game
 {
    constructor()
    {
  
    }
  
    getState()
    {
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data)

      {
         gameState = data.val();
      })
  
    }
  
    update(state)
    {
      database.ref('/').update
      ({
        gameState: state
      });
    }

    async start()
    {

      if(gameState === 0)
      {
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");

        if(playerCountRef.exists())
        {
          playerCount = playerCountRef.val();
          player.getCount();
        }

        form = new Form()
        form.display();
      }
  
    }
    play()
    {
      form.hidden()

      background(bgimg)

      Player.getPlayerInfo()

     if(allPlayers!==undefined)
    {
        player.getposition();

       

          if(player.index===1)
          {
            hero2.x=allPlayers["player2"].x;
            hero2.y=allPlayers["player2"].y;
            hero2.health=allPlayers["player2"].health;
            hero1.health=player.health;
            
            //player.health=hero1.health
           //console.log("player1 " +player.health)
            hero1.x=player.xpos;
            hero1.y=player.ypos; 
            hero1.name=player.name;
            hero2.name=allPlayers["player2"].name;
            textSize(20);
            fill("red")
            text(player.name,hero1.x,hero1.y+60); 
//            player.updateHealth();
            // if(keyCode===UP_ARROW)
            // {
            //   player.changePosition(0,-4)  

            //   hero1.changeAnimation("hero jump",jump)
            //   hero1.endAnimation=frameCount+10;
            // }

            if(keyCode===LEFT_ARROW)
            {
              player.changePosition(-10,0)

              hero1.endAnimation=frameCount+10
              hero1.changeAnimation("hero lwalk",lwalking)
            }

            if(keyCode===RIGHT_ARROW)
            {
              hero1.changeAnimation("hero walk",walking) 
              hero1.endAnimation=frameCount+10

              player.changePosition(10,0)
            }

            if(keyCode===113)
            {
              hero1.changeAnimation("hero punch",punch)
              hero1.endAnimation=frameCount+10;
              hitman="hero1";

              kickpunch.play()
            hero1.setCollider("rectangle",25,-40,10,10)
                

            }  

            if(keyCode===101)
            {
              hero1.changeAnimation("hero kick",kick)
              hero1.endAnimation=frameCount+10; 
              hitman="hero1";
              kickpunch.play() 
              hero1.setCollider("rectangle",30,-40,10,10)

            }

            if(keyCode===101&&hero2.isTouching(hero1)||keyCode===113&&hero2.isTouching(hero1))
            {
                player.changePosition(-20,0);
                hero2.changeAnimation("hero2 recover",lrecover);
             //   console.log("touch me not")
                if(hero1.x<hero2.x)//&&hitman==="hero2"
                {
                  //hero2.health-=10;
           //     console.log("In touching")     
                 //allPlayers["player2"].health=hero2.health;
                 // console.log(allPlayers["player2"].health)
                 player.health-=20;
                 player.updateHealth();
                 }

                if(player.health<=10)
                {
               //   allPlayers["player2"].health=0;
                  //hero2.health=0;
                  
                  player.health=0;
                  player.updateHealth();
                }

                hero2.endAnimation=frameCount+10; 

                kicksound.play()    
            }

            keyCode=65;

            if(player.health<=0)
            {
              gameState=2;
              game.update(2);
            }
          }
          
          if(player.index===2)
        {
              
           // player.health=hero2.health;
            hero1.x=allPlayers["player1"].x;
            hero1.y=allPlayers["player1"].y;
            hero1.health=allPlayers["player1"].health;
            hero2.health=player.health;
            hero2.x=player.xpos;
            hero2.y=player.ypos;     
            //console.log("player2 " +player.health)
           
            hero2.name=player.name;
            hero1.name=allPlayers["player1"].name;
            textSize(20);
            fill("red")
            text(player.name,hero2.x,hero2.y+60);    
  //          player.updateHealth();
            // if(keyCode===UP_ARROW)
            // {
            //   player.changePosition(0,-4) 

            //   hero2.changeAnimation("hero2 jump",jump)
            //   hero2.endAnimation=frameCount+10;
            // }

            if(keyCode===LEFT_ARROW)
            {
              player.changePosition(-10,0) 

              hero2.changeAnimation("hero2 lwalk",lwalking)
              hero2.endAnimation=frameCount+10;
            }

            if(keyCode===RIGHT_ARROW)
            {
              player.changePosition(10,0)

              hero2.changeAnimation("hero2 walk",walking)           
              hero2.endAnimation=frameCount+10; 
            }

            if(keyCode===113)
            {
              hero2.changeAnimation("hero2 punch",lpunch)
              hero2.endAnimation=frameCount+10;
              hitman="hero2";
              kickpunch.play() 

             // hero2.setCollider("rectangle",-25,-25,10,10)         
            }

            if(keyCode===101)
            {
              hero2.changeAnimation("hero2 kick",lkick)
              hero2.endAnimation=frameCount+10;   
              hitman="hero2";
              kickpunch.play()    

            // hero2.setCollider("rectangle",-30,-40,10,10)        
            }

            if(keyCode===101&&hero1.isTouching(hero2)||keyCode===113&&hero1.isTouching(hero2))
            {
              kicksound.play()

              player.changePosition(20,0);
              hero1.changeAnimation("hero recover",recover)
            //  console.log("in pl1");              
              if(hero1.x<hero2.x)//&& hitman==="hero1"
               {
             //    console.log("in pl1 touch")
                 //hero1.health-=20;
                player.health-=20;
                player.updateHealth();
               }

                hero1.endAnimation=frameCount+10;

               if(player.health<=10)
               {
                 //hero1.health=0;
                 player.health=0;
                 player.updateHealth();
               }
            }

          if(player.health<=0)
          {
            gameState=2
            game.update(2)
          }

            keyCode=65;

       }
       this.showHealth();
      hero1.collide(invisibl)
      hero2.collide(invisibl)
  }
}

    showHealth()
    {
      textSize(20);
      fill("blue");
      text(hero1.name,200,50)

      fill("white")
      rect(width/3,30,200,20)

      fill("yellow")
      rect(width/3,30,hero2.health,20)
    //  console.log("hero1 "+hero1.health);
    //console.log("hero2 "+hero2.health);
      

      textSize(20);
      fill("green");
      text(hero2.name,width/2+100,50)

      fill("white")
      rect(width-400,30,200,20)

      fill("blue")
      rect(width-400,30,hero1.health,20)

    }

    end(){
      hero1.visible=false

      hero2.visible=false

      box.visible=true

      trofi.visible=true

      textSize(30)
      fill("red")
      text("Fighting Finish",width/2-100,150);
      var msg=createElement("h1");
      if(hero1.health>hero2.health)
      {
        msg.html("Player 1 WIns")
      }
      else
      {
        msg.html("Player 2 WIns")
      }
      msg.position(displayWidth/2-150,displayHeight/2)
    }
  }