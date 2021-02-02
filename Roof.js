class Roof{
    constructor(){
        var options = {
            isStatic: true,
            //restitution:  0.3,
           // friction: 0.5,
           // density:1.2
          }
          this.Body = Bodies.rectangle(400,200,20,100);
          this.width = 550;
          this.height = 20;
          World.add(world,this.Body);
    }

    display(){
        fill("yellow");
        rectMode(CENTER);
        rect(370,200,this.width,this.height);
    }
}