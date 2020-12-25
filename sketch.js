var a,b;

function setup(){
  createCanvas(600,200);
  a = createSprite(200,200,100,50);
  b = createSprite(400,200,50,80);
  b.shapeColor = "blue";
  a.shapeColor = "blue";

}
function draw(){
  background(255,255,255);
  console.log(a.x-b.x)
  a.x = mouseX;
  a.y = mouseY;
  if(a.x-b.x>75 ){
    a.shapeColor = "red";
    b.shapeColor = "red";
  }


  
  else{
    a.shapeColor ="blue";
    b.shapeColor = "blue";
  }
  drawSprites();


}