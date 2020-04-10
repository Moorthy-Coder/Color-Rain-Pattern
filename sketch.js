const { Engine, World, Bodies } = Matter;

var engine;
var world;
var rain = [];

var drop;

function setup() {
  createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world;

  for (var i = 0; i < 750; i++) {
    drop = new Drop(Math.round(random(0, 800)), Math.round(random(-10, -800)), Math.round(random(0, 5)), Math.round(random(10, 20)));
    rain.push(drop);
  }
}

function draw() {
  background(0);
  Engine.update(engine);

  for (var i = 0; i < rain.length; i++) {
    rain[i].display();

    if (rain[i].body.position.y > 420) {
      rain[i].regenerate();

    }
  }
}
