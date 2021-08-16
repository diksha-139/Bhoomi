/*


write your own story

*/
var girl, girlImg;
var bg, bgImg;

var invisible_ground;



function preload(){
 girlImg = loadAnimation("Girl-1.png", "Girl-2.png", "Girl-3.png", "Girl-4.png",);
 bgImg = loadImage("Background.png");
}



function setup() {
  createCanvas(1200, 1000);

  bg = createSprite(500,500,1200,600);
  bg.addImage(bgImg);
  bg.velocityX = -5;
  bg.scale = 1.3



  girl = createSprite(50,900);
  girl.addAnimation("GirlRunning",girlImg);
  //girl.depth = +10
  
invisible_ground=createSprite(600,980,1200,20)
 invisible_ground.visible=false
  
}

function draw() {
  background("0");
  
 if (bg.x < 0 ){
    bg.x = bg.width/2
}

//jumping
if(keyDown("up")){
  girl.velocityY=-16
}
//gravity
girl.velocityY = girl.velocityY +0.6
  girl.collide(invisible_ground)
  drawSprites();

}

