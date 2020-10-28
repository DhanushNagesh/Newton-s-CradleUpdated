
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var ball1,ball2,ball3,ball4

var roof 

var chain1

function preload()
{
	
}

function setup() {
	createCanvas(1000,1000);


	engine = Engine.create();
	world = engine.world;

	ball1 = new Ball(300,600)
	ball2 = new Ball(400,600)
	ball3 = new Ball(500,600)
	ball4 = new Ball(600,600)
	ball5 = new Ball(700,600)


roof = new Roof(500,100,800,20)

chain1 = new Chain(ball1.body,roof.body,-200,0)
chain2 = new Chain(ball2.body,roof.body,-100,0)
chain3 = new Chain(ball3.body,roof.body,0,0)
chain4 = new Chain(ball4.body,roof.body,100,0)
chain5 = new Chain(ball5.body,roof.body,200,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();



  roof.display();


  drawSprites();
 
}



function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball5.body,ball1.body.position,{x:105,y:-95})
	}
}