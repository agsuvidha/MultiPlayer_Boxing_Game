class Player
{

    constructor()
  {
      this.index = null;
      this.name = null;
      this.rank=null;
      this.xpos=0;
      this.ypos=0;
      this.health=200
  }
  
    getCount()
    {
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>
      {
        playerCount = data.val();
      })
    }

    getposition()
    {
      var playerpos = database.ref('players/player'+this.index);
      playerpos.on("value",(data)=>
      {
        var pos = data.val();
        this.xpos=pos.x;
        this.ypos=pos.y;
        this.health=pos.health;
      })
    }

    updateCount(count)
    {
      database.ref('/').update(
      {
        playerCount: count
      });
    }

    update()
    {
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set
      ({
        name:this.name,
        x:this.xpos,
        y:this.ypos,
        health:this.health
      });
    }
    
    static getPlayerInfo()
    {
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>
      {
        allPlayers = data.val();
      })
    }

    changePosition(myx,myy)
    {
       database.ref('players/player'+this.index).update
       ({
         'x':this.xpos+myx,
         'y':this.ypos+myy
       }) 
    }  
  
    updateHealth()
    {
      database.ref('players/player'+this.index).update
      ({
        'health':this.health
        
      }) 
   
    }
    
 }
  