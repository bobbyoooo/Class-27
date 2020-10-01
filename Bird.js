class Bird extends BaseClass {
  constructor(x,y){
    //super will take all properties of base class into child class
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
  }

  display() {
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    //super.display will take display from base class
    super.display();
  }
}
