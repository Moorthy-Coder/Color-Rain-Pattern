class Drop {
    constructor(x, y, w, h) {
        var options = {
            'isStatic': false,
            'frictionAir': 0.07
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;

        noStroke();
        fill(Math.round(random(0, 255)), Math.round(random(0, 255)), Math.round(random(0, 255)));
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
    }

    regenerate() {
        noStroke();
        fill(Math.round(random(0, 255)), Math.round(random(0, 255)), Math.round(random(0, 255)));
        var x1 = Math.round(random(0, 800));
        var y1 = Math.round(random(-10, -800))
        
        Matter.Body.setPosition(this.body, { x: x1, y: y1 });

    }
}
