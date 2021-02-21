const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = matter.Constraint;

function setup() {
  createCanvas(1300,600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 590, 12000, 20);

  player = new Box(200, 200, 50, 50);

  box1 = new Rect(800, 550, 30, 80);
  box2 = new Rect(1000, 550, 30, 80);
  box3 = new Rect(800, 490, 80, 20);
  box4 = new Rect(800, 470, 30, 30);
  box5 = new Rect(1000, 490, 80, 20);
  box6 = new Rect(1000, 470, 30, 30);
  box7 = new Rect(900, 510, 350, 20);

  box9 = new Rect(900, 440, 640, 20);

  box10 = new Box(840, 420, 40, 40);
  box11 = new Box(960, 420, 40, 40);
  box12 = new Box(900, 380, 200, 10);
  box13 = new Box(820, 280, 10, 100);
  box14 = new Box(980, 280, 10, 100);
  box15 = new Box(900, 230, 200, 10);
  box16 = new Box(900, 220, 100, 10);
  box17 = new Box(870, 195, 10, 50);
  box18 = new Box(930, 195, 10, 50);
  box19 = new Box(890, 170, 100, 10);
  //box20 = new Box(900, 130, 40, 40);

  box21 = new Box(700, 400, 80, 80);
  box22 = new Box(700, 360, 120, 10);
  box23 = new Box(700, 320, 60, 60);
  box24 = new Box(700, 290, 80, 10);
  box25 = new Box(700, 240, 40, 40);

  box26 = new Box(1100, 400, 80, 80);
  box27 = new Box(1100, 360, 120, 10);
  box28 = new Box(1100, 320, 60, 60);
  box29 = new Box(1100, 290, 80, 10);
  box30 = new Box(1100, 240, 40, 40);

  slingShot = new Slingshot(this.ball,{x:200,y:200});

}

function draw() {
  background(0);
  Engine.update(engine);
  stroke("white");
  strokeWeight(3);
  fill("turquoise");
  player.display();

  ground.display();
  fill("pink");
  box1.display();
  box2.display();
  fill("yellow");
  box3.display();
  fill("magenta");
  box4.display();
  fill("yellow");
  box5.display();
  fill("magenta");
  box6.display();
  fill("cyan");
  box7.display();
  fill("orange");
  box9.display();
  fill("lime");
  box10.display();
  box11.display();
  fill("blue");
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  fill("lavender");
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  fill("violet");
  //box20.display();
  box21.display();
  fill("green");
  box22.display();
  fill("red");
  box23.display();
  fill("lightblue");
  box24.display();
  fill("gold");
  box25.display();
  fill("violet");
  box26.display();
  fill("green");
  box27.display();
  fill("red");
  box28.display();
  fill("lightblue");
  box29.display();
  fill("gold");
  box30.display();

  slingShot.display();
    
  drawSprites();
}