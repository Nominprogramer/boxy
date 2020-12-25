const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

let engine, world;
let ground, ball , box;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(200,390,400,10);
    box = new Boxy(200,200,50,50,"brown");

}

function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    box.display("green");
}