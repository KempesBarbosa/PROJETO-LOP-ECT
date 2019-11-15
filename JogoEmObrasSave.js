//tela
int tela = 1;


//pos pads
int LrectY = 350;
int RrectY = 350;
//Bola
float ellx = 350;
float elly = 350;
//Mov Bola
boolean moveRigth = true;
boolean moveDown = true;

float speedSide = 3;
float speedVertical = 4;
//Pontuação
int countR = 0;
int countL = 0;
PFont font;

void setup () {
  
  size ( 700, 700);
  background (0);
  font = loadFont("Arial-BoldMT-48.vlw");
}
void draw () {
  
  if (tela == 1) {
  background(0);
  textSize(40);
  fill(255);
  text("PING PONG", 250, 350);
  textSize(20);
  fill(0,255,0);
  text("Press W and S to play", 10, 400);
  fill(0,0,255);
  text("Press I and K to play", 500, 400);
  textSize(40);
  fill(255);
  text("Precione B para iniciar.",175,600);
  
    if(keyPressed == true && key == 'b' ) {
      tela = 2;
    }
  }
  if (tela == 2) {
    background(255);
    
       //informações
    textSize(20);
    fill(0, 100, 150);
    
  
  textFont (font);
  
  
  fill(250,0,0);
  ellipse(ellx,elly,50,50);
  text ("Pong", 300, 40);
  
  fill(0,255,0);
  rect(20,LrectY,30,100);
  text (countL,200,50); 
  if(LrectY < 0) 
  {
    LrectY = 0;
  }
  if(LrectY > 600) 
  {
    LrectY = 600;
  }
  
  fill(0,0,255);
  rect(630,RrectY,30,100);
  text (countR,500,50);
  if(RrectY < 0) 
  {
    RrectY = 0;
  }
  if(RrectY > 600) 
  {
    RrectY = 600;
  }
  
  if (keyPressed == true && key == 'w') {
    LrectY = LrectY - 6;
  }
  if (keyPressed == true && key == 's') {
    LrectY = LrectY + 6;
  }
  
  if (keyPressed == true && key == 'i') {
    RrectY = RrectY - 6;
  }
  if (keyPressed == true && key == 'k') {
    RrectY = RrectY + 6;
  }
  if (moveRigth == true)
  {
    ellx = ellx + speedSide;
  }
  else
  {
    ellx = ellx - speedSide;
  }
  
  if (moveDown == true)
  {
    elly = elly + speedVertical;
  }
  else
  {
    elly = elly - speedVertical;
  }
  
  
  if (elly <= 10) {
    moveDown = true;
    speedSide = random(3, 6);
  }
  if (elly >= 690) {
    moveDown = false;
    speedSide = random(3, 6);
  }
  
 
  if (ellx >= 690) {
    countL += 1;
    ellx = 350;
    elly = 350;
    speedSide = random(3,6);
  }
  if (ellx <= 10) {
    countR += 1;
    ellx = 350;
    elly = 350;
    speedSide = random(3, 6);
  }
  
  if (ellx >=615 && elly > RrectY && elly < (RrectY + 100)) {
    moveRigth = false;
    speedSide = random(3, 6);
  }
  if (ellx <= 75 && elly > LrectY && elly < (LrectY + 100)) {
    moveRigth = true;
    speedSide = random(3, 6);
  }
}
    if( countR == 3) {
      tela = 3;
      textSize(32);
      fill(255);
      
    }
    if (countL == 3 )
      tela = 4;
      textSize(32);
      fill(255);{
      
    }
    if ( tela == 3 ) {
      background(0);
      textSize(32);
      fill(0, 0, 255);
      text("AZUL GANHOU!", 250, 100);
      fill(255);
      text("Press V to restart", 250, 350);
      countR = 0;
      countL = 0;
      if (keyPressed == true && key == 'v') {
         tela = 1;
      }
   }
   if ( tela == 4 ) {
      background(0);
      textSize(32);
      fill(0, 255, 0);
      text("VERDE GANHOU!", 250, 100);
      fill(255);
      text("Press V to restart.", 250, 350);
      countR = 0;
      countL = 0;
      if (keyPressed == true && key == 'v') {
         tela = 1;
      }
   }
}
 
