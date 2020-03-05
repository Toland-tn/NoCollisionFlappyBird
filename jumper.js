function jumper() {
  this.x = 0;
  this.y = 0;
  this.gravity = 0.5; //force of of gravity
  this.lift = -10; //the opposing force of gravity
  this.velocity = 0; //speed of gravity force
  
  //I am building a function to display on the screen. this is where i put my values of what the jumper will look like.
  this.show = function() {
    fill(255,0,0);
    ellipse(this.x, this.y, 50, 50);
  }
  //Build a function called up that will take the initial velocity and modify by opposing gravity.
  this.up = function() {
    this.velocity += this.lift;
  }
  //This will continuously update the jumper.
  this.update = function() {
    this.velocity += this.gravity;
    this.y += this.velocity;
    this.velocity *= 0.9; //air resistance
    //This will prevent the jumper from leaving the ground.
    if (this.y > h) {
      this.y = h;
      this.velocity = 0;
    }
    //This will prevent the jumper from leaving the ceiling.
    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }
  
  
  
  
  
  
}