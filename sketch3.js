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
  pause = 0;
  pause2 = .5; 
  coincollect = 6;
  time2 = 0;
}




  
 function draw() {
 

  

      
  time=time+1
  
  
  textSize(50);
  sprite.scale=.50;
  if (coincollect>50){coincollect=50}

   if (sprite.x>900)
  { alert("you lose")
  window.location.href = "https://bigboybryson.github.io/theplanegame/";
}
  
    background("blue");
  
  
  if (sprite.x===sprite.x) {
    sprite.y = sprite2.y;
          sprite.x = sprite.x+coincollect;


    
    
    


   
    
   if (group.isTouching(sprite2)) {
       mySound.play();
     sprite.x=0;
   coincollect=coincollect+.5;
             score = score+1;
 sprite2.x=random(400,900);
      sprite2.y=random(20,370);
      }


    fill("yellow");
                
 text('score',192,40 );
fill("red");
                  
text(score,192,82 );
    fill("yellow");
fill("red");


      text("time",50,300 );
   fill("red");
    
   text(time/15,100,342 );
    fill("yellow");
    
 



drawSprites();
  
  }
 }








