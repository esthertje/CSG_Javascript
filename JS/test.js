function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  canvas.parent('processing');
  //noLoop();
}

function draw() {
  MaakKerk('blue');
  translate(150,0);
  MaakKerk('red');
  translate(150,0);
  MaakKerk('yellow')
  }
function MaakKerk(kleur){
  noStroke();
  fill(kleur);
  triangle(150,200,100,280,200,280);
  fill('lightblue');
  rect(100,280,100,150);
  fill('blue')
  ellipse(150,325,50);
}
