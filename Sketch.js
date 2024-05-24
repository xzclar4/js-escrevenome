function setup() {
    createCanvas(700, 700);
    background ("white")
  }
  function draw(){
    
    stroke("blue");
    fill("red");
    
    if ( mouseIsPressed) {
    rect( mouseX,mouseY, 20,35);
    }
    }
