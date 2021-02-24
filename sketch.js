
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
var engine,world;
var ground;
function preload() {
    polygon_img=loadImage("polygon.png");
}


function setup(){
    var canvas = createCanvas(1500,500);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(600,490,1500,30);
    stand=new Ground(470,370,320,20);
    standReturns=new Ground(900,200,320,20);
    block1=new Block(500,140,30,40);
    block2=new Block(460,185,40,50);
    block3=new Block(500,185,40,50);
    block4=new Block(540,185,40,50);
    block5=new Block(410,235,40,50);
    block6=new Block(450,235,40,50);
    block7=new Block(490,235,40,50);
    block8=new Block(530,235,40,50);
    block9=new Block(570,235,40,50);
    block10=new Block(350,285,40,50);
    block11=new Block(390,285,40,50);
    block12=new Block(430,285,40,50);
    block13=new Block(470,285,40,50);
    block14=new Block(510,285,40,50);
    block15=new Block(550,285,40,50);
    block16=new Block(590,285,40,50);
    
    blockReturns1=new Block(900,70,40,50);
    blockReturns2=new Block(900,170,40,50);
    blockReturns3=new Block(850,170,40,50);
    blockReturns4=new Block(950,170,40,50);
    blockReturns5=new Block(800,170,40,50);
    blockReturns6=new Block(1000,170,40,50);
    blockReturns7=new Block(900,120,40,50);
    blockReturns8=new Block(850,120,40,50);
    blockReturns9=new Block(950,120,40,50);
    
    polygon=Bodies.circle(50,200,20);
    World.add(world,polygon);
    
   slingShot=new SlingShot(this.polygon,{x:80,y:200});





    
}

    function draw(){
        background("black");
       
        
        Engine.update(engine);

        ground.display();
        stand.display();
        standReturns.display();
        block1.display();
        block2.display();
        block3.display();
        block4.display();
        block5.display();
        block6.display();
        block7.display();
        block8.display();
        block9.display();
        block10.display();
        block11.display();
        block12.display();
        block13.display();
        block14.display();
        block15.display();
        block16.display();
        blockReturns1.display();
        blockReturns2.display();
        blockReturns3.display();
        blockReturns4.display();
        blockReturns5.display();
        blockReturns6.display();
        blockReturns7.display();
        blockReturns8.display();
        blockReturns9.display();
        slingShot.display();
        imageMode(CENTER);
        image(polygon_img,polygon.position.x,polygon.position.y,40,40);

    }
    function mouseDragged(){
        Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
    }
    function mouseReleased(){
        slingShot.fly();
    }
    











