class rubber{
    constructor(x,y,width,radius){
        var options={
             'density':1,
            'friction':5,
            'restitution':0.3,
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius;
        
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("gray");
        ellipse(0,0,40,40);
        pop();
    }
}