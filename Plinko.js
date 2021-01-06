class Plinko{

    constructor(x, y){

        var options = {
            isStatic : true
        }

        this.body = Bodies.circle(x, y, 10, options);
        this.x = x;
        this.y = y;
        this.radius = this.body.circleRadius
        World.add(world, this.body);

    }

    display(){

        ellipseMode(RADIUS);
        fill("cyan");
        ellipse(this.x, this.y, 10);
        
    }

}