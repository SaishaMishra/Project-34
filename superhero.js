class Ball{
    constructor(x, y) {
        var options = {
           
            restitution :0.4,
            friction :0.5,
            density :1.0
            //isStatic:true
           
        }
        this.body = Bodies.circle(x, y, 50, options);
        this.radius = 50;
        World.add(world, this.body);
      }
      display(){
        
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius, this.radius);
        pop();
      }
}
