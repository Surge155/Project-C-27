class Bob{
    constructor(x){
        var options = {
            isStatic: true,
            restitution:  0.3,
            friction: 0.5,
            density:1.2
          }
          this.Body = Bodies.circle(x,600,50,options);
          this.radius = 50;
          World.add(world,this.Body);

          
    }

    display(){
        fill("blue");
        ellipseMode(CENTER);
        ellipse(this.Body.position.x,this.Body.position.y,this.radius,this.radius);

       
    }
}