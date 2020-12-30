class Rope {
    constructor(bodyA, bodyB, offsetX, offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options ={
            bodyA: bodyA,
            bodyB: bodyB,
            pointB:{x:this.offsetX, y:this.offsetY},
        }

        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display() {
        var posA = this.chain.bodyA.position;
        var posB = this.chain.bodyB.position;

     
        var Anchor1X = posA.x;
        var Anchor1Y = posA.y-16;

        var Anchor2X = posB.x + this.offsetX;
        var Anchor2Y = posB.y + this.offsetY;


        strokeWeight(2);
        line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);

    }
}