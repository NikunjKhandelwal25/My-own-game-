class Box  {
  constructor(x, y) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':0.15
    }
    this.width = 30;
    this.height = 40;
    this.box = Bodies.rectangle(x, y, 30,40, options);
    
   
    World.add(world, this.box);
  }
  display(){
    var angle = this.box.angle;
    push();
    translate(this.box.position.x, this.box.position.y);
    rotate(angle);
   rectMode(CENTER);
   rect(0,0,this.width,this.height)
    pop();
  }
}
