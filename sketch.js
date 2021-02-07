const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var Box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";

var score=0
function preload() {
 
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);
    ground1=new Ground(800,350,400,20)
    Box1=new Box(700,255)
    Box2=new Box(730,255)
    Box3=new Box(760,255)
    Box4=new Box(790,255)
    Box5=new Box(820,255)
    Box6=new Box(850,255)
    Box7=new Box(880,255)
    //layer two
     Box8= new Box (730,235)
     Box9=new Box(760,235)
     Box10=new Box(790,235)
     Box11=new Box(820,235)
     Box12=new Box(850,235)
     //layer 3
     Box13= new Box(760,195)
     Box14=new Box(790,195)
     Box15=new Box (820,195)
     //layer 4
     Box16= new Box(790,155)
 
     platform1=new Ground(750,150,300,10);
    bird = new Bird(200,50);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
   
}

function draw(){
   
    background("red");
    Engine.update(engine);
    //strokeWeight(4);

    ground.display();
    ground1.display();
    fill("skyblue")
    Box1.display();
    Box2.display();
    Box3.display();
    Box4.display();
    Box5.display();
    Box6.display();
    Box7.display();
    //layer two for platform
    fill("pink")
Box8.display();
Box9.display();
Box10.display();
Box11.display();
Box12.display();
//layer three for platform
fill("blue")
Box13.display();
Box14.display();
Box15.display();
//layer four for platform
fill("grey")
Box16.display();
    bird.display();
    platform.display();
    
    slingshot.display();   


}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        bird.trajectory=[]
       Matter.Body.setPosition(bird.body,{x:200,y:50})
       slingshot.attach(bird.body);
      bird.options={
          isStatic:true
      }
    }
    gameState="Onsling"
}

    