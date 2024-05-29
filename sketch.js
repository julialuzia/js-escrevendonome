function setup() {
    createCanvas(600, 600);
    background("yellow");
  }
  function draw() {
  
  
    stroke("lightblue");
    fill("pink");
  
    // console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  