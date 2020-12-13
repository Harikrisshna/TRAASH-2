
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var box1;
var paper1;
var bin,binimg;

function preload(){
  binimg=loadImage("images/dustbingreen.png")
}

function setup() {
	createCanvas(1360, 650);

	engine = Engine.create();
  world = engine.world;

  	box1 = new Box(1100,630,200,20);
    box2 = new Box(1200,590,20,100);
    box3 = new Box(1000,590,20,100);
    
    bin = createSprite(1100,500,200,20)
    bin.addImage(binimg);
    bin.scale=0.9;
    
	ground = new Ground(650,height,1500,20);

	paper1=new Paper();
}


function draw() {
  background(255);
  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  ground.display(); 
  paper1.display();
  bin.display();
}
function keyPressed(){
	if (keyCode===UP_ARROW) {
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})
	}
}



