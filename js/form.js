class Form 
{

  constructor() 
  {
    this.input = createInput("").attribute("placeholder","enter name");
    this.button = createButton('fight');
    this.greeting = createElement('h1');
    this.input.size(200)
    this.button.size(100)
    this.gide=createElement('h2')
    this.gide2=createElement('h2')
    this.gide3=createElement('h2')
    this.gide4=createElement('h2')
    this.gide5=createElement('h2')
    this.reset=createButton('reset')
    this.reload=createButton('reload')
  }

  hidden()
  {
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.gide.hide();
    this.gide2.hide();
    this.gide3.hide();
    this.gide4.hide();
    this.gide5.hide();   
  }

  display()
  {
    this.input.position(displayWidth/2 -100 , 100);

    this.button.position(displayWidth/2 - 50, 150); 

    this.reload.position(displayWidth/2-650,displayHeight/2-370)

    this.button.mousePressed(()=>
    {
     this.input.hide();
     this.button.hide();

     ti.visible=false

     player.name = this.input.value();

     playerCount+=1;
     player.index = playerCount;

       if(player.index===1&&hero1!==undefined)
       {
         player.xpos=hero1.x
         player.ypos=hero1.y
       }

       if(player.index===2&&hero2!==undefined)
       {
        player.xpos=hero2.x
        player.ypos=hero2.y
       }

      player.update();
      player.updateCount(playerCount);

      this.greeting.html("Hello " + player.name)
      this.greeting.position(70, displayHeight/4);

      this.gide.html("Q = punch")
      this.gide.position(50 , displayHeight/4+50);

      this.gide2.html("E = kick")
      this.gide2.position(50 , displayHeight/4+100);

      this.gide3.html("SPACE = jump")
      this.gide3.position(50 , displayHeight/4+150);

      this.gide4.html("RIGHT ARROW = move right")
      this.gide4.position(50 , displayHeight/4+200);

      this.gide5.html("LEFT ARROW = move left")
      this.gide5.position(50 , displayHeight/4+250);
    })

    this.reload.mousePressed(()=>
    {
      game.update(0)

      player.updateCount(0)

      window.location.reload()
      
      database.ref('/').update(
      {
        players:null,
      })
      
    })
  }
}