class slingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        this.visibility=225;
        World.add(world, this.sling);
    }

    attach(body){
        this.sling.bodyA=body;
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(5);
                line(pointA.x, pointA.y, pointB.x, pointB.y);
            }

    
        console.log(this.body.speed);
          if(this.body.speed<2.5){
          this.body.display();
        }
            else{
                World.remove(world,this.body)
            push();
            this.visiblity=this.visibility-5;
            tint(225,this.visibility);
            pop();
            }
    }
    
}