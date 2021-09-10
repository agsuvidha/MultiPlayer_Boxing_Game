var walking,lwalking,punch,lpunch,lnock,nock,recover,kick,lkick,jump,ljump,restart,r
var gameState=0;
var database,game,player,form,playerCount,othplayer;
var edges
var firstpageimg
var bgimg,bgimg2;
var hero1,hero2
var invisibl
var allPlayers
var ju,jv
var kicksound,kickpunch
var timg,ti
var restart;
var backgroundsound
var box;
var hit;
var health1,health2;
var trofi,trofimg;
var hitman;
function preload(){
  trofimg=loadImage("photos/end.png")
  restart=loadImage("photos/restart.png")
  bgimg2=loadAnimation("photos/fighting2.png")
  timg=loadImage("photos/title.png")
  firstpageimg=loadImage("photos/fighting.png")
  kickpunch=loadSound("kick.mp3")
  kicksound=loadSound("hit.mp3")
  backgroundsound=loadSound("beatbox f.mp3")
  bgimg=loadImage("photos/fighting ground.gif")
  ju=loadImage("h/idel1.png")
  jv=loadImage("h/lidel1.png")
  hit=loadSound("hit.mp3")
  idel=loadAnimation("h/idel1.png","h/idel2.png","h/idel3.png","h/idel4.png")
  lidel=loadAnimation("h/lidel1.png","h/lidel2.png","h/lidel3.png","h/lidel4.png")
  walking=loadAnimation("h/walk1.png","h/walk2.png","h/walk3.png","h/walk4.png","h/walk5.png")
  lwalking=loadAnimation("h/lwalk1.png","h/lwalk2.png","h/lwalk3.png","h/lwalk4.png","h/lwalk5.png")
  punch=loadAnimation("h/punch1.png","h/punch2.png","h/punch3.png")
  lpunch=loadAnimation("h/lpunch1.png","h/lpunch2.png","h/lpunch3.png")
  kick=loadAnimation("h/kick1.png","h/kick2.png","h/kick3.png")
  lkick=loadAnimation("h/lkick1.png","h/lkick2.png","h/lkick3.png")
  nock=loadAnimation("h/k1.png","h/k2.png","h/k3.png","h/k4.png","h/k5.png")
  lnock=loadAnimation("h/lk1.png","h/lk2.png","h/lk3.png","h/lk4.png","h/lk5.png")
  recover=loadAnimation("h/kr3.png","h/kr4.png","h/kr5.png","h/kr7.png","h/kr8.png","h/lidel1.png")
  lrecover=loadAnimation("h/lkr3.png","h/lkr4.png","h/lkr5.png","h/kr7.png","h/kr6.png","h/lidel1.png")
  jump=loadAnimation("h/jump1.png","h/jump2.png","h/jump3.png","h/jump4.png","h/jump5.png","h/jump6.png","h/jump7.png")
  ljump=loadAnimation("h/ljump1.png","h/ljump2.png","h/ljump3.png","h/ljump4.png","h/ljump5.png","h/ljump6.png","h/ljump7.png")
  idel=loadAnimation("h/idel1.png","h/idel2.png","h/idel3.png","h/idel4.png");
  lidel=loadAnimation("h/lidel1.png","h/lidel2.png","h/lidel3.png","h/lidel4.png");
}
function setup()
 {
  createCanvas(windowWidth,windowHeight);

  database=firebase.database()

  game=new Game()
  game.getState();
  game.start();

  edges=createEdgeSprites();

  box=createSprite(windowWidth/2,windowHeight/2,300,300)
  box.visible=false

  ti=createSprite(windowWidth/2,windowHeight/2+200)
  ti.addImage("t",timg)
  ti.scale=1.5

  hero1=createSprite(width/5,height-170,20,20)
  hero1.addAnimation("hero1 ideal",idel)
  hero1.addAnimation("hero punch",punch)
  hero1.addAnimation("hero kick",kick)
  hero1.addAnimation("hero recover",recover)
  hero1.addAnimation("hero jump",jump)
  hero1.addAnimation("hero walk",walking)
  hero1.addAnimation("hero lwalk",lwalking)
  hero1.scale=1.3
  hero1.visible=false

  hero2=createSprite(width/1.5,height-170,20,20)
  hero2.addAnimation("hero2 idel",lidel)
  hero2.addAnimation("hero2 punch",lpunch)
  hero2.addAnimation("hero2 kick",lkick)
  hero2.addAnimation("hero2 recover",lrecover)
  hero2.addAnimation("hero2 lwalk",lwalking)  
  hero2.addAnimation("hero2 walk",walking)           
  hero2.addAnimation("hero2 jump",jump)
  hero2.scale=1.3
  hero2.visible=false

  invisibl=createSprite(width/2,height-100,width,10);
  invisibl.visible=false

  backgroundsound.play()

  box=createSprite(windowWidth/2,windowHeight/2,300,300)  
  box.visible=false

  trofi=createSprite(windowWidth/2,windowHeight/2-100,20,20)
  trofi.addImage("trofimg",trofimg)
  trofi.scale=0.5
  trofi.visible=false
}
function draw() 
{
  background(firstpageimg);
  hero1.setCollider("rectangle",0,0,30,80)
  hero1.debug=false

  hero2.setCollider("rectangle",0,0,30,80)
  hero2.debug=false

 if(playerCount===2)
 {
  gameState=1;
  game.update(1);  
 }

 if(gameState===1)
 {
  backgroundsound.stop()

  hero1.visible=true

  hero2.visible=true

  ti.visible=false

  hero1.collide(edges)

  hero2.collide(edges)

   if(frameCount===hero1.endAnimation)
   {
    hero1.changeAnimation("hero1 ideal",idel)
   }

   if(frameCount===hero2.endAnimation)
   {
    hero2.changeAnimation("hero2 idel",lidel)
   }

   game.play();
 }

 if(gameState===2)
 {
  game.end(); 
 }  
 

  drawSprites();
}