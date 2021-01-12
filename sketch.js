
function preload(){
  mySound = loadSound('ppe.mp3');

}
function setup(){  
    createCanvas(900,400);

time = 0;

  sprite2=createSprite(450,200,0,0);
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
  coincollect = 7;
  coincollectbak=0;
  time2 = 0;
  timebak=0;
  
}




  
 function draw() {
  

      
  time=time+1
  
  
  textSize(50);
  sprite.scale=.50;
    if (coincollect>40){coincollect=40}

  if (sprite.x>900){
  window.location.href = "https://troydatboi134.github.io/coin-runner/";
}
  
    background("blue");
  
  
  if (sprite.x===sprite.x) {
    sprite.y = mouseY;
          sprite.x = sprite.x+coincollect;
    

    

   
    
   if (group.isTouching(sprite2)) {
       mySound.play();
     sprite.x=0;
   coincollect=coincollect+1;
             score = score+1;
 sprite2.x=random(300,850);
      sprite2.y=random(50,370); 
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
