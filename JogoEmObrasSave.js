//entradas
boolean esquerda;
boolean direita;

//hud
int pontos;

//blocos
boolean [] blocoVis;
float  [] blocoX;
float  [] blocoY;
float blocoAlt;
float blocoLarg;
color blocoCor;

//pad
float posX;
float posY;
float alt;
float larg;
color cor;

//bolinha
float b_posX;
float b_posY;
float b_alt;
float b_larg;
float b_velX;
float b_velY;
color b_cor;

void setup()
{
 size(800,600);
 background(0);
 
 //score
 pontos = 0;
 
 //inicializar pad
 posX = width/2 - 50;
 posY = 570;
 larg = 100;
 alt = 20;
 cor = color(0,0,255);
 //inicializar bolinha
 b_posX = width/2;
 b_posY = height/2;
 b_larg = 10;
 b_alt = 10;
 b_cor = color(0,255,0);
 b_velX = 3;
 b_velY = 3;

 //iniciliar blocos
 blocoLarg = 80;
 blocoAlt = 30 ;
 blocoCor = color(255,255,0);
 blocoVis = new boolean[10];
 blocoX = new float[10];
 blocoY = new float[10];
 
 //preencher vetores de blocos
 for(int i = 0 ; i < 10; i++)
 {
    blocoVis[i] = true;
      blocoY[i] = 40;
    blocoX[i] = i*blocoLarg ;
 }
}

void draw()
{
  //ENTRADA
  if(esquerda) posX -= 10;
  else if(direita) posX += 10;
  //LÓGICA
  //atualizar bolinha
  b_posX += b_velX;
  b_posY += b_velY;
  //testa colisão com pad
  if(testeColisao( posX, posY, larg, alt, b_posX, b_posY, b_larg, b_alt))
  {
    b_velY *= -1; 
  }
  //teste colisão bloco
  for(int i = 0; i <blocoX.length; i++)
  {
      if(blocoVis[i]  && testeColisao(blocoX[i], blocoY[i], blocoLarg, blocoAlt,
                                      b_posX, b_posY, b_larg, b_alt))
      {
        //inverter direção y
         b_velY *= -1;
         //destruir bloco
         blocoVis[i] = false;
         //soma pontuação
         pontos += 1;
       }
  }
  //limite da bolinha
  if(b_posX < 0 || b_posX > 790) b_velX *= -1;
  if(b_posY < 0 || b_posY > 590) b_velY *= -1;
  //limite do pad
  if(posX < 0) posX = 0;
  else if( posX > 700) posX = 700 ;
  //VISUAL
  background(0) ;
  noStroke() ;
  //bolinha
  fill(b_cor);
  rect(b_posX,b_posY,b_larg,b_alt);
  //pad
  fill(cor);
  rect(posX,posY,larg,alt);
  //bloco
  stroke(0);
  for(int i = 0; i < blocoX.length; i++)
  {
   if(blocoVis[i])
   {
     fill(blocoCor);
      rect(blocoX[i], blocoY[i] , blocoLarg, blocoAlt);
   }
  }
  
  //hud
  fill(255);
  textSize(28);
  text("pontuação:"+pontos, 20, 30);
}

//método teste colisão de retângulos 
boolean testeColisao( float x1, float y1, float larg1, float alt1,
                      float x2,float y2,float larg2,float alt2)
{
  boolean horizontal = false;
  boolean vertical = false;

//colisão em x
if(x1 < x2) horizontal = abs(x2 - x1) < larg1 ;
else horizontal =abs(x1 - x2) < larg2 ;
//colisão em y
if(y1 < y2) vertical = abs(y2 - y1) < alt1;
else vertical = abs(y1 - y2) < alt2;

 return horizontal && vertical;
}

void keyPressed()
{
  if(key == CODED)
  {
    if(keyCode == LEFT)
      esquerda = true ;
    else if(keyCode == RIGHT)
      direita = true;
  }
}

void keyReleased()
{
  if(key == CODED)
  {
    if(keyCode == LEFT)
      esquerda = false;
    else if(keyCode == RIGHT)
      direita = false; 
  }
}
