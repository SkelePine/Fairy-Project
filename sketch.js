var starImg,bgImg;
var star, starBody;
var fairy, fairyimg
var fairySound
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyimg = loadImage('images/fairyImage1.png')
	fairySound = loadSound('sound/JoyMusic.mp3')

}

function setup() {
	createCanvas(800, 750);

	

	fairySound.loop()
	fairy = createSprite(50,650,10,10)
	fairy.addImage(fairyimg)
	fairy.scale = 0.2

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 
 
  console.log(star.y);

 if(fairy.x > 650 ){
	Matter.Body.setStatic(starBody,false);
 }

  drawSprites();

}

function keyPressed() {
	if(keyCode === RIGHT_ARROW){
		fairy.x = fairy.x + 20
	}
	if(keyCode === LEFT_ARROW){
		fairy.x = fairy.x - 20
	}

	
}
