var bg,bg2,form,system,code,security;
var score=0;
var scary;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg");
  
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();

  textSize(18);
  text("Score : "+score,500,40);
  fill("GOLD");
  
  if(score === 3){
    clear();
    background(bg2);
    fill("GOLD");
    textSize(40);
    text("TREASURE UNLOCKED!!!",250,200);
  }
  //  scary.play();
  
  drawSprites();
}
