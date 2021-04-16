class Box{
    constructor(x, y) {
        var options = {
           
            restitution :0.4,
            friction :0.5,
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, 70, 70, options);
        this.width = 70;
        this.height = 70;
        World.add(world, this.body);
      }
      display(){
        
        var pos= this.body.position;
        var angle= this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("yellow")
        strokeWeight(3);
        stroke("blue")
        rect(0,0,this.width, this.height);
        pop();
      }
}