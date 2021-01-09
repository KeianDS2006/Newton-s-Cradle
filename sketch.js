
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;
var ground;


function setup(){
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
  bob1=new Bob(250,500,20);
	bob2=new Bob(300,500,20);
  bob3=new Bob(350,500,20);
	bob4=new Bob(400,500,20);
	bob5=new Bob(450,500,20);
	ground=new Ground(350,50,250,50);
	rope1=new Rope(bob1.body, {x: 250, y: 50});
	rope2=new Rope(bob2.body, {x: 300, y: 50});
	rope3=new Rope(bob3.body, {x: 350, y: 50});
	rope4=new Rope(bob4.body, {x: 400, y: 50});
	rope5=new Rope(bob5.body, {x: 450, y: 50});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  ground.display();
  bob1.keypressed();
  drawSprites();
}



