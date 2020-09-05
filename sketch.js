
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(1600, 700);
    rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//bobObject1 = new Bob(width/2 - 80, width/2, 40);
	bobObject1 = new Bob(300,300,40);
	bobObject2 = new Bob(330,300,40);
	bobObject3 = new Bob(360,300,40);
	bobObject4 = new Bob(390,300,40);
	bobObject5 = new Bob(420,300,40);

    roof = new Roof(370,100,300,20);

    rope1 = new Rope(bobObject1.body, roof.body, -160, 0);

	Engine.run(engine);
  
}


function draw() {
	background(230);  
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();
	roof.display();
	rope1.display();
    drawSprites();
 
}



