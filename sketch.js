const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world,ground,ball;


function setup() {
  createCanvas(800,400);
  var options ={
    isStatic:true
  }
var zoya = {
restitution:1


}

  engine = Engine.create();
  world = engine.world
  ground = Bodies.rectangle(400,350,800,5,options)
  World.add(world,ground)

  ball = Bodies.circle(400,50,30,zoya)
  World.add(world,ball)




  console.log(ball);
}

function draw() {
  background("black");
  Engine.update(engine) 
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,5)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,30,30)


}