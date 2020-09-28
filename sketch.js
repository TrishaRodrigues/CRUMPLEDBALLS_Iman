var ball_body,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	var op2 = {
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2
	}
//	ball_body = Bodies.circle(200,200,20,op2);
//	World.add(world,ball_body);

	var options = {
		isStatic:true
	}
	ground = Bodies.rectangle(0,600,200000,10,options);
	World.add(world,ground);
	ball=new Ball(200,450,40);
	box1 = new Box(500,580,200,20);
	box2 = new Box(700,480,20,100);
	box3 = new Box(480,480,20,100);
	Engine.run(engine);
	
	

}


function draw() {
  background(0);
  Engine.update(engine)
// var pos = ball_body.position;
 // var pos2 = ground.position;
 // fill("red");
//	ellipse(pos.x,pos.y,20);/
//	fill("orange");
//	rect(pos2.x,pos2.y,200000,10);
//	if(keyWentDown("1")){
//		ball_body.velocityX = 20;
//	}
	
 // drawSprites();
  ball.display();
  box1.show();
  box2.show();
  box3.show();
 
 
}
function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	  // ball_body.velocityX = 20;
	  Matter.Body.applyForce(ball_body.body,ball_body.body.position,{x:85,y:-85});
	 }
   }