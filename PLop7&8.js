/* 
    Equipe: 
        Gabriel Souto Lozano Barbosa - Subturma A (Líder) 
        Gustavo Henrique Santos de Lima - Subturma A 
        Etapa 7 & 8
*/

var pontos=0
var nivel = 1
var barreiradepontos= 1000
var vxo= []
var vyo= []
var vtam= []
var qtobjetos = 20
function setup() {
  createCanvas(500, 500);
  frameRate(30)
  for( var i=0;i < qtobjetos;i++){
    vxo[i]= random(0,500);
    vyo[i]= random(0,500);
    vtam[i]= random (2,40)
  }
}

function draw() {
  background(0);
  fill(130,10,10)
  for(var i=0;i < qtobjetos; i++){
    ellipse(vxo[i],vyo[i], vtam[i],vtam[i])
            }
  textSize(24)
  fill(35,135,235)
  text('Nivel:'+ nivel,30,60)
  text('Pontos:'+ pontos,300,60)
  pontos=pontos+10
  if(pontos>barreiradepontos){
    nivel++
    barreiradepontos=barreiradepontos+1000
  }
  
}
