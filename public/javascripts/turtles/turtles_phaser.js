var scene;
const config = {
    type: Phaser.AUTO,
    width: 960,
    height: 480,
    parent: 'phaser-example',
    backgroundColor: '#e3f1f1',
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene : {
        preload : preload,
        update : update,
        create : create
    }
};

const game = new Phaser.Game(config)

function finished_loading(){
    window.parent.postMessage("phaser_loaded", "*");
    // window.parent.postMessage("no errors found", "*")

     console.log("loaded with no errors");
}


function preload()
{
    // makes the scene accessible outside this scope, not sure how to do this better?
    scene = this;
    this.load.image('turtle','/assets/sprites/turtle_small.png');
}
    
function create()
{
    this.draw_graphics = this.add.graphics(0,0);
    this.draw_graphics.lineStyle(5, 0x000000, 1.0);
    this.draw_graphics.fillStyle(0x000000, 1.0);
    this.blocks = this.physics.add.staticGroup({});
    this.turtle_current = scene.add.existing(new Turtle(this, 100, 200))
    finished_loading();
}
    
function update(time,delta)
{
    this.turtle_current.update();
}

window.addEventListener('message', function(e){
    let data = e.data;
    if(data.type == "end")
    {
        end_phaser();
    }
    else if(data.type == "reset")
    {
        restart();
    }

    else if (data.type == "turtle code")
    {
    // check if there are new orders and give them to the turtle
    //console.log(e);
    // console.log("CODE in data", data);
    //   console.log("----- new orders for ID----");

        let turtle_current = scene.turtle_current;
        turtle_current.speed = data.speed;
        turtle_current.draw = data.draw;
        console.log("Draw set to : ", turtle_current.draw);
        let newOrders = data.code;
        console.log(newOrders);   
        try{
            eval(newOrders);
        }
        catch(e){
            console.log("Error reading turtle code: ", e);
        }
    }
});
  