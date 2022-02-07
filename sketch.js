
var box1;
var box2;
function setup() {
  createCanvas(600, 400);
  box1=new Box()
  box2=new Box()
  box3=new Box()
  
}

function draw() {
  background(220);
  fill ("red") 
box1.show()
box1.move(2)

fill ("blue") 
box2.show()
box2.move(4)

fill ("green") 
box3.show()
box3.move(6)
}

