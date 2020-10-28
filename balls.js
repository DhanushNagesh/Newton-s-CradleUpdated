class Ball {
    constructor(x,y) {
      var options = {
        isStatic:false,
        restitution:1.1,
        friction:0.04,
        density:0.2
        
   
      }
      this.body = Bodies.circle(x, y, 50, options);
      this.width = 50;
      this.height = 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      fill(125);
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  };
