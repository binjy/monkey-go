var gorillaImage,bananaImage,stoneImage,groundImage,backgroundImage,ground,banana,gorilla,stone,mini,junior,stone2,stone2Image
 var survivalTime,score
 
function preload(){
  stoneImage = loadImage("stone.png")
  bananaImage=loadImage("banana.png")
  backgroundImage = loadImage("jungle.jpg")
  gorillaImage =  loadImage("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_10.png")
  
  stone2Image = loadImage("stone.png")
}


function setup() {
  createCanvas(600, 200);
  gorilla = createSprite(200,100,1,1)
  gorilla.addImage("go",gorillaImage)
  gorilla.scale = 0.1
  


  
  
  banana = createSprite(300,70,1,1)
  banana.addImage("ban",bananaImage)
  banana.scale = 0.05
  
  stone = createSprite(1,115,1,1)
  stone.addImage("sto",stoneImage)
  stone.scale = 0.1
  
  
  stone2 = createSprite(350,115,1,1)
  stone2.addImage("sto2",stone2Image)
  stone2.scale = 0.1
  stone2.velocityX = -3
  
  
  ground = createSprite(200,130,1000,1)
  
  ground2 = createSprite(200,135,1000,1)
  ground2.visible = false
  
  gorilla.collide(ground2)
  
  ground.shapeColor = "black"
  
  
}

function draw() {
background("lightgreen")
  
  ground.velocityX = -3
  stone.velocityX = -3
  banana.velocityX = -3
 
  
 
  
  
  
      if (ground.x < 0){
        ground.x = ground.width/2;
      }
  if (stone.x < 0) {
    stone.x = stone.width/1
  }
  
  if (banana.x <0){
      banana.x = banana.width/2
      
      }
  
  
  
  if(ground2.x <0){
     ground2.x = ground.width/1
     
     
     }
  
  
  
  

  
 
  
  
 
  
  
  
  gorilla.collide(ground2 )
  
  if(keyDown("space")){
  gorilla.velocityY = -14 ;
  
      }
   gorilla.velocityY = gorilla.velocityY + 0.8;
  
  
  
if(banana.isTouching(gorilla)){
  banana.destroy()
  
}
  
  text("survivalTime:" + survivalTime,100,50)
  survivalTime = Math.ceil(frameCount/frameRate())
  
  
  
  if(gorilla.isTouching(stone2)){
     
     gorilla.scale = 0.12
    stone2.visible = false
}
 
if(gorilla.isTouching(stone)){
  gorilla.velocityX  = 0
  ground.velocityX = 0
  stone.velocityX = 0
  stone2.velocityX = 0
  survivalTime = 0
  
}
  
  
  
  drawSprites()
}