 var hr ;
 var mm ;
 var sc; 
var camera
var scAngle;
var hrAngle;
var mmAngle;


function setup() {
  createCanvas(800,600);

  rocket=createSprite(400,200,20,20);

 //createSprite(400, 200, 50, 50);
}

function draw() {

var hr = hour();
var mm = minute();
var sc = second();



  background(255,255,255);  

  if(keyWentDown("RIGHT_ARROW")){
    
    rocket.velocityX = 15;
    rocket.velocityY=0;
  }
  if(keyWentUp("RIGHT_ARROW")){
    
    rocket.velocityX=0;
    rocket.velocityY=0;
  }
  
  if(keyWentDown("LEFT_ARROW")){
    
    rocket.velocityX = -15;
    rocket.velocityY=0;
  }
  if(keyWentUp("LEFT_ARROW")){
    
    rocket.velocityX= 0;
    rocket.velocityY=0;
  }
   if(keyWentDown("UP_ARROW")){
    
    rocket.velocityY = -15;
    rocket.velocityX=0;
    
  }
  if(keyWentUp("UP_ARROW")){
    
    rocket.velocityY=0;
    rocket.velocityX=0;
  }
  
  if(keyWentDown("DOWN_ARROW")){
    
    rocket.velocityY=15;
    rocket.velocityX = 0;
    
  }
  if(keyWentUp("DOWN_ARROW")){
    rocket.velocityY=0;
    rocket.velocityX= 0;
  }

  camera.x=rocket.x;
  camera.y=rocket.y;
  push();

  scAngle = map(sc,0,60,0,360);

  rotate(scAngle);
stroke(255,0,0);
strokeWeight(7);
//translate(400,200);
arc(0,0,200,200,0,scAngle);
line(100,0,0,0);

pop();

push();

hrAngle = map(hr,0,60,0,360);
rotate(hrAngle);
stroke("blue");
strokeWeight(7);
//translate(400,200);
arc(0,0,100,100,0,hrAngle);
line(50,0,0,0);

pop();

push();

mmAngle = map(mm,0,60,0,360);
rotate(mmAngle);
stroke("lime");
strokeWeight(7);
//translate(400,200);
arc(0,0,150,150,0,mmAngle);
line(75,0,0,0);

pop();
  drawSprites();
}
