
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer1,rubber1,ground1,stone1;


function setup() {
	createCanvas(800, 700);

  engine = Engine.create();
	world = engine.world;

  ground1=new Ground(400,height,800,20);

	hammer1=new hammer(400,350,100,20);
  rubber1=new rubber(330,430,15,15);
  stone1= new stone(200,780,250);
  


	Engine.run(engine);
  
}


function draw() {
  background("pink");
  hammer1.display();
  rubber1.display();
  ground1.display();
  stone1.display();
  
  drawSprites();
 
}



