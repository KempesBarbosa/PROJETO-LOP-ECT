//  https://editor.p5js.org/Kempes/sketches/vIOE7vfQz
/* 
    Equipe: 
        Gabriel Souto Lozano Barbosa - Subturma A (Líder) 
        Gustavo Henrique Santos de Lima - Subturma A 
        Etapa 1 & 2
*/


var x = 200;
var y = 355;
var x2 = 190
var y2 = 130

function setup() {
  createCanvas(400, 400);
}

function draw(nave) {
  background(0);

  if(x2 > 400)
    x2 = 0;

  if(x2 < 0)
    x2 = 400;

  if(y2 > 400)
    y2 = 0;

  if(y2 < 0)
     y2 = 400;

  if (keyIsDown(LEFT_ARROW))
    x2-=10;

  if (keyIsDown(RIGHT_ARROW))
    x2+=10;

  if (keyIsDown(UP_ARROW))
    y2-=10;

  if (keyIsDown(DOWN_ARROW))
    y2+=10;

  fill(140, 0, 0)
  rect(x2, y2, 50, 60, 0);

  if(x > 400)
    x = 0;

  if(x < 0)
    x = 400;

  if(y > 400)
    y = 0;

  if(y < 0)
     y = 400;

  if (keyIsDown(LEFT_ARROW))
    x-=10;

  if (keyIsDown(RIGHT_ARROW))
    x+=10;

  if (keyIsDown(UP_ARROW))
    y-=10;

  if (keyIsDown(DOWN_ARROW))
    y+=10;

  fill(0,0,180)
  ellipse(x, y, 50, 50);

}
