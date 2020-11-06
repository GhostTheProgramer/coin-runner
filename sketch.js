function preload(){
  mySound = loadSound('ppe.mp3');

}
function setup(){  
    createCanvas(900,400);

time = 0;

  sprite2=createSprite(150,200,0,0);
img=loadImage("e.png")
sprite2.addImage(img);
sprite2.scale=0.5
  sprite = createSprite(10, 200,0,0);
img=loadImage("s.png")
sprite.addImage(img);
  group = createGroup();
group.add(sprite);
  score = 0 ;
  scorebak=0;
  pause = 0;
  pause2 = .5; 
  coincollect = 2;
  coincollectbak=0;
  time2 = 0;
  timebak=0;
  
}




  
 function draw() {
     if (keyDown("right")) {
       timebak=time;
         planexbak=sprite.x;
  planeybak=sprite.y;
  coinxbak=sprite2.x;
  coinybak=sprite2.y;
  scorebak=score;
   coincollectbak=coincollect;
    }
   

  

      
  time=time+1
  
  
  textSize(50);
  sprite.scale=.50;
    if (coincollect>25){coincollect=25}

  if (sprite.x>900){
  window.location.href = "https://troydatboi134.github.io/coin-runner/";
}
  
    background("blue");
  
  
  if (sprite.x===sprite.x) {
    sprite.y = mouseY;
          sprite.x = sprite.x+coincollect;
      if (coincollect>40){coincollect=40}
    
     if (keyDown("left")) {
       time=timebak*2;
       score=scorebak/2;
       coincollect=coincollectbak*2;
  sprite.x=planexbak;
  sprite.y=planeybak;
  sprite2.x=coinxbak;
  sprite2.y=coinybak;
    }
    

   
    
   if (group.isTouching(sprite2)) {
       mySound.play();
     sprite.x=0;
   coincollect=coincollect+.5;
             score = score+1;
 sprite2.x=random(400,900);
      sprite2.y=random(20,370); 
      }


    fill("yellow");
                
 text('speed',192,40 );
fill("red");
                  
text(coincollect,192,82 );
    fill("yellow");
fill("red");


      text("score",50,300 );
   fill("red");
    
   text(score,100,342 );
    fill("yellow");
    
 



drawSprites();
 }
 }


