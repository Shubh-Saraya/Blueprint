// namspqacing 
const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

// creating variable 
var engine, world;
//object variable
var box1,box2;
var ground;
var anyob;
function setup() {
  createCanvas(400,400);
  // creating engine
  engine=Engine.create();
  // aading world 
  world=engine.world;
  // object create
  box1=new Box(240,300,50,50);
  box2=new Box(230,100,50,100);
  ground=new Ground(200,390,400,20);
  anyob=new Box(260,50,50,50);


}

function draw() {
  background("pink"); 
  
  // updating engine
  Engine.update(engine); 
  drawSprites();
  box1.display();
  box2.display();
  ground.display();
  anyob.display();
}