var astronaut;
var alien, alienImg,alienGroup;
var bush;
var farm;
var egg;
var ovni;
var bullet;
var play; 
var bg,bgImg;
var runRImg,runLImg;
var bulletImg;
var eggImg;
var playImg;
var runImg;

function preload () {
 runRImg = loadImage("images/animacion corer derecha rojo 1.gif");
 runImg = loadImage("images/animacion corer derecha rojo pn.png");
 runLImg = loadImage("images/animacion corer izquierda rojo 1.gif");
 bulletImg = loadImage("images/bullet.gif");
 eggImg = loadImage("images/huevo verde opciones.gif");
 playImg = loadImage("images/play REMASTERISADO.gif");
 bgImg = loadImage("images/fondo.jpg");
 runRImg = loadImage("images/animacion corer derecha rojo 1.gif");
 alienImg = loadImage("images/alien.gif");
 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = createSprite(displayWidth/2-45, displayHeight/2+35,50,50);
  bg.addImage(bgImg)
  bg.scale = 2
  //crear el sprite del astronauta 
  astronaut = createSprite(displayWidth/2,displayHeight/2,300,200);
  astronaut.addImage(runImg)
  bulletGroup = new Group()
  alienGroup = new Group()
  //crear sprites faltantes 

}

function draw() {
  background(0);
  if(keyDown("d")){
    astronaut.x = astronaut.x + 20;
    astronaut.addImage(runRImg)
  }

  if(keyDown("s")){
    astronaut.y = astronaut.y + 20;
  }

  if(keyDown("a")){
    astronaut.x = astronaut.x - 20;
  }

  if(keyDown("w")){
    astronaut.y = astronaut.y - 20;
  }
  
  drawSprites();
}

//function windowResized(){
//  resizedCanvas(windowWidth, windowHeight)
//}

function enemy(){
  if(frameCount%50===0){

  
    alien = createSprite(random(300,300),random(100,300),350,250);
    alien.addImage(alienImg)
    alien.velocityX = 5
    alien.debug= true
    alien.setCollider("rectangle",0,0,400,400)
    alien.lifetime = 400
    alienGroup.add(alien)
  }
}
