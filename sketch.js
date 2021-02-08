var myParticles = [];

function setup() {
  createCanvas(1000, 1000);
  var cButton = select('#clear_button');
  cButton.mousePressed(clearParticles);
  // not completely sure why but taking away the parentheses makes 
  //the clear button work. I think maybe because it has no parameters so 
  //by including the parentheses it prevented from exectuing correctly
}

function draw() {
  background(220);

  for(var i=0; i < myParticles.length; i++){//added .length, since it's an array for the for loop to go through it it needs the .length
    myParticles[i].move();//added (); needs the () for the function to work as it is part of the class
    myParticles[i].render();
  }

}

function clearParticles(){
  myParticles = [];
}

function mouseDragged() {
  var tempParticle = new Particle(mouseX,mouseY);
  myParticles.push(tempParticle);
}

class Particle {
  constructor(mX,mY) {
    // this.x and this.y should be equal to mX and mY respectively. 
    //These are the values that are assigned by the constructor therefore 
    //they should be equal to the values in parentheses
    this.x = mX;
    this.y = mY;
    this.speedX = random(-3,3);
    this.speedY = random(-3,3);
    this.col = color(random(255), random(255), random(255));
    this.diameter = random(3,15);
  }

  move() {
    this.x += this.speedX;
    this.y += this.speedY;

    // if the particles approaches the 'wall' change direction
    if (this.x > width || this.x < 0) this.speedX *= -1;
    if (this.y > height || this.y < 0) this.speedY *= -1;
  }

  render() {
    noStroke();
    fill(this.col);
    // needed the this.x and this.y 
    //I think its because if it were just the x and y those dont have any
    // value in the class but the this.x and this.y do within the constructor
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}