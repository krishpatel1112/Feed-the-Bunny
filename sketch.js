//creating physics engine
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

//defining variables
let engine;
let world;
var ground;
var fruit,rope;
var fruit_con;

//defining variables
var bg_img;
var food;
var rabbit;
var bunny;
var button;

function preload()
{
//loading images
  bg_img = loadImage('background.png');
  food = loadImage('melon.png');
  rabbit = loadImage('Rabbit-01.png');
}

function setup() 
{
//create canvas
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
 
  //create ground and bunny
  ground = new Ground(200,680,600,20);
  bunny = createSprite(250, 650, 100, 100);
  bunny.addImage(rabbit);
  bunny.scale = 0.2;
  
  //creating button
  button = createImg("cut_button.png");
  button.position(220, 30);
  button.size(50, 50);
  button.mouseClicked(drop);

  //creating rope and fruit
  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  fruit_con = new Link(rope,fruit);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  imageMode(CENTER);
  
}

function draw() 
{
  background(51);
  
  //adding image to background
  image(bg_img,width/2,height/2,490,690);

  //creating fruit and dislplaying image
  image(food,fruit.position.x,fruit.position.y,70,70);
  rope.show();
  Engine.update(engine);
  ground.show();

 drawSprites();
   
}
 //drop funcion
function drop(){
   rope.break();
   fruit_con.detach();
   fruit_con = null;
 }
