
var bullet,wall;
var thickness,speed,weight;

function setup() {
  createCanvas(1600,400);
  speed = random(223,321)
  weight = random(30,52)
  thickness = random(22,83)
  bullet = createSprite(50,200,50,6);
  bullet.shapeColor = "white";
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor =color(80,80,80) ;

  bullet.velocityX= speed; 
}

function draw() {
  background("black");  
  drawSprites();
  bullet.collide(wall);

  if(HasCollided(wall,bullet)){
    var damage = 0.5 * weight * speed * speed/(thickness *thickness *thickness);
    if(damage>10){
      wall.shapeColor =color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor =color(0,255,0);
    }
  }
}

function HasCollided(_LBullet,_LWall){
bulletRightEdge = _LBullet.x + _LBullet.width; 
wallLeftEdge = _LWall.x;
if(bulletRightEdge>=wallLeftEdge){
return true
}
return false;
}