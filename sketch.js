
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 900);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(250);
	bob2 = new Bob(300);
	bob3 = new Bob(350);
	bob4 = new Bob(400);
	bob5 = new Bob(450);
	roof = new Roof();
	rope1 = new Rope(bob1.Body,roof.Body,);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();

  
  drawSprites();
 
}



