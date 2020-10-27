class Stone  {
  constructor(x,y,r){
    var options = {
      isStatic:false,
      'restitution':0.8,
      'friction':1.0,
      'density':1.0
  }
  this.body = Bodies.rectangle(x, y,r/2, options);
  this.x=x;
  this.y=y;
  this.r=r;
  this.image = loadImage("sprites/stone.png");
  World.add(world, this.body);
  }

  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    ellipseMode(RADIUS);
    image(this.image, this.x, this.y, this.r*2, this.r*2);
    pop();
  }
}
