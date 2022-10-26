
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ball_options={
	isStatic: false,
	restitution: 0.3,
	friction: 0,
	density: 1.2
}
var solo
var solo_options={
	isStatic: true 
}
var lado1
var lado1_options={
	isStatic: true
}
var lado2
var lado2_options={
	isStatic: true
}

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;

	ball=Bodies.circle(222, 222, 22, ball_options);
	World.add(world, ball);

	solo=Bodies.rectangle(400, 700, 800, 22, solo_options);
	World.add(world, solo);

	lado1=Bodies.rectangle(700, 650, 22, 80, lado1_options);
	World.add(world, lado1);
	lado2=Bodies.rectangle(750, 650, 22, 80, lado2_options);
	World.add(world, lado2);

	Engine.run(engine);
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, {x: 0, y:0}, {x: 20, y: -50})
	}


}

function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x, ball.position.y, 22);
  rect(solo.position.x, solo.position.y, 800, 22);
  rect(lado1.position.x, solo.position.y, 22, 80);
  rect(lado2.position.x, solo.position.y, 22, 80);

  drawSprites();
 

}





