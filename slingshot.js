class Slingshot {
    constructor(body1,body2){
        var options = {
            length : 10, 
            stiffness : 0.04,
            bodyA : body1,
            bodyB : body2
        }
        this.slingshot = Constraint.create(options);
        World.add(world,this.slingshot);
    }

    display(){
        var pointA = this.slingshot.bodyA.position;
        var pointB = this.slingshot.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}