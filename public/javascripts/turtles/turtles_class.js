// const TURTLe_STATE=["idle","forward","left","right", "dead"];



class Turtle extends Phaser.Physics.Arcade.Sprite{
  constructor(scene, x, y)
  {
    super(scene, x, y, 'turtle');
  //  this.setPosition(x,y);
    this.setOrigin(0.5,0.5);
    this.orders = [];
    this.speed = 0;
    this.draw = true;
    this.state = 0;
    // counts down the number of steps to 0, then sets state back to idle for next order.
    this.stepCount = 0;
    this.newOrdersReceived = false;
    this.currentSquare;
    this.name = 'unnamed';
//   this.setVelocity(0,0)
    scene.add.existing(this);
    scene.physics.add.existing(this);

    
    this.setCollideWorldBounds(true);
  }
  static validOrders = ['frwd','turn'];
  // number of updates one 'forward' order will do before idle
  static steps = 10;

}

Turtle.prototype.forwardStart = function(){
  // this.setVelocity(100,200);
  this.stepCount = Turtle.steps;
  console.log("==== Forward: stepCount set to constant: ", Turtle.steps);
  this.state = 1;
  let newVel = this.scene.physics.velocityFromAngle(this.angle, this.speed);
  console.log("new vel: ", newVel)
  this.setVelocity(newVel['x'], newVel['y']);  
}

// stop the turtle
Turtle.prototype.stop = function(){
  console.log("STOP")
  // this.setVelocity(0,0);
  this.body.stop();
  this.state = 0;
}


Turtle.prototype.turn = function(degrees){
  console.log("Turning: ", degrees);
  this.angle = (this.angle + degrees) % 360;
  console.log("Angle now: ", this.angle);
}

Turtle.prototype.exit = function(){
  this.state = 0;
  this.setVelocity(0,0);
}
Turtle.prototype.addNewOrder = function(order){
  
  console.log('new Order');
  console.log(order);
  if (validateOrder(order) == false)
  {
    console.log('invalid order given');
    console.log(order);
  }
  else{
    // console.log('head: ', heading);
    this.orders.push(order);
    // console.log(this.getData("orders"));
  }
}

Turtle.prototype.update = function(){
  // console.log('turtle class update');
  // if turtle is idle get next order
  if(this.state == 0){
  //  console.log("idle")

    if (this.orders.length>0){
      let newOrder = this.orders.shift();
      // console.log("UPDATE next order", newOrder);
      switch (newOrder.command){
        case "frwd":
          console.log("turtle starts moving forward")
      //       console.log("speed in update: ", this.getData('speed'));
          this.forwardStart();
          break;
        case "turn":
          this.turn(newOrder.degrees);
          break
      }
    }
  }
  // not idle
  else {
    //console.log("not idle")

    if(this.state == 1){
        // if drawing then stamp a spot on the canvas
        // draw_graphics.fillRect(50, 50, 400, 200);
        if (this.draw == true){
          this.scene.draw_graphics.fillCircle(this.x, this.y, 2);          
        }
        // console.log("moving")
        // move one step, decriment step count
        this.stepCount --;
        // console.log("steps left: ", this.stepCount);
        if(this.stepCount==0){
          // stop moving, set state to idle
          this.stop();
        }
    }
    // if the turtle is dead
    if(this.state == 4){
      this.destroy();
    } 
  }
}
// returns the pixel value of the center of the x,y square coords given
function getCenterOfSquare(x,y){
  newX = (x*30)+15;
  newY = (y*30)+15;
  return [newX,newY];
}

//returns the square of the x,y coords given
function getSquare(x,y){
  newX = parseInt(x/30);
  newY = parseInt(y/30);
  return [newX,newY];
}

// check that the order given is in the list of orders for this class
function validateOrder(order){
  if (Turtle.validOrders.includes(order.command)){
    return true;
  }  
  else
  {
    return false;
  }
}