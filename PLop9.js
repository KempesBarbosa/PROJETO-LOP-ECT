/* 
    Equipe: 
        Gabriel Souto Lozano Barbosa - Subturma A (Líder) 
        Gustavo Henrique Santos de Lima - Subturma A 
        Etapa 9
*/


var tela = 1
var vidas = 3
var pontos = 0
var nivel = 1
var barreiradepontos = 1000
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  if (tela == 1) {
  background(255, 0, 0);
  textSize(40);
  fill(0);
  text("PROJETO LOP", 50, 100);
  textSize(30);
  text("Press Enter to start", 70, 350);
    if(keyIsDown(ENTER)) {
      tela = 2;
    }
  }
  if (tela == 2) {
    background(255);
    
       //informações
    textSize(20);
    fill(0, 100, 150);
    text("Vidas:" + vidas, 10, 20);
    text("Pontos:" + pontos, 150, 20);
    text("Nivel:" + nivel, 300, 20);
    pontos = pontos+10
      
    if(pontos>barreiradepontos){
    nivel++
    barreiradepontos=barreiradepontos+1000
  }
    if(nivel>2){
      tela=3
    }
}
  if ( tela == 3 ) {
    background(0);
    textSize(32);
    fill(255, 0, 0);
    text("Game Over", 120, 100);
    text("A vida é só uma pcr", 50, 300);
    text("Press Espace to restart", 40, 350);
    vidas = 3;
    pontos = 0;
    nivel = 1;
    bdp = 200;

    if (keyIsDown(32)) {
      tela = 1;
  }
  }
}
