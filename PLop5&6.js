/* 
    Equipe: 
        Gabriel Souto Lozano Barbosa - Subturma A (Líder) 
        Gustavo Henrique Santos de Lima - Subturma A 
        Etapa 5 & 6
*/


var x= 250
var y=400
var xo=100
var yo=120
var raioP=20
var raioO=20
var vidas=3
var pontos=0
var dificuldade=1

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(210);
    fill(122,0,255)
  textSize(18)
  text("Vidas:" + vidas, 10, 30)
   text("Pontos:" + pontos, 200, 30)
   text("Nivel:" + dificuldade, 400, 30)
  fill(255)
  ellipse(x,y,40,40)
if (keyIsDown(LEFT_ARROW)){
    x=x-5;
}
  if (keyIsDown(RIGHT_ARROW)){
    x=x+5;
  }
  if (keyIsDown(UP_ARROW)){
    y=y-5;
  }
  if (keyIsDown(DOWN_ARROW)){
    y=y+5;
  }
  fill(70) 
ellipse(xo,yo,40,40)
  if(dist(x,y,xo,yo)< raioP+raioO) {
    x=250
  y= 400
}
     }
