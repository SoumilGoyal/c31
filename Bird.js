class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeimg = loadImage("sprites/smoke.png")
    this.trajectory = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if (this.body.velocity.x > 10 && this.body.position.x > 200) {
      var pos = [this.body.position.x,this.body.position.y]
      this.trajectory.push(pos);
    }
      
      //console.log (this.trajectory);
      for (let i = 0; i < this.trajectory.length; i++) {
        var x = this.trajectory[i][0]
        var y = this.trajectory[i][1]
        image(this.smokeimg,x,y);
        
      }
  }
}
