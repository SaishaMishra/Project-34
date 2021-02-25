const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball, box, rope;

function preload() {
//preload the images here

}

function setup() {
  createCanvas(2000,700);
  engine = Engine.create();
  world = engine.world;
  
  ball = new Ball(550,200)

  rope = new Rope(ball.body, {x : 670, y : 100})

  box = new Box(800, 100)
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  box.display();

  ball.display();

  rope.display();
}

