function rectMove() {
  randNum = Math.floor(Math.random() * h);
  this.x = w;
  this.y = randNum;
  this.gravity = 10; //force of of gravity
  this.velocity = 0; //speed of gravity force
  this.show = function() {
    fill(255,0,0);
    rect(this.x,this.y,100,-500)
    rect(this.x,this.y + 250,100,h)
  }
  this.up = function() {
    this.velocity -= this.lift;
  }
  //This will continuously update the jumper.
  this.update = function() {
    this.velocity = this.gravity;
    this.x -= this.velocity;
    this.velocity *= 0.9; //air resistance
    randNum = Math.floor(Math.random() * h)
    //This will prevent the jumper from leaving the ground.
    if ((this.x < 0) || ((this.y + 200) > h)) {
      this.x = w;
      this.y = randNum;
    }
    
  }
}