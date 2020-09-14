var fixedrect,movingrect;
function setup(){
  createCanvas(800,800);
  fixedrect = createSprite(400,400,150,100);
  movingrect = createSprite(750,300,150,100);
  fixedrect.shapeColor =  "black";
  movingrect.shapeColor = "black";
}
function draw(){
  background("pink");
  movingrect.x = mouseX;
  movingrect.y = mouseY;
  
  if(movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2 && 
    fixedrect.x - movingrect.x < movingrect.width/2 + fixedrect.width/2 && 
    movingrect.y - fixedrect.y < movingrect.height/2 + fixedrect.height/2 && 
    fixedrect.y - movingrect.y < movingrect.height/2 + fixedrect.height/2){
    fixedrect.shapeColor = "blue";
    movingrect.shapeColor ="blue";
  } else{
    fixedrect.shapeColor =  "black";
   movingrect.shapeColor = "black";
  }
  
  
  drawSprites();

}