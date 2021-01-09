class Bob{
    constructor(x,y,radius){
    var options={isStatic:false, "restitution":1, "friction":0, "density":0.8};
    this.body=Matter.Bodies.circle(x,y,radius,options);
    World.add(world,this.body);
    }
    keypressed(){
    if(keyDown("up")){
        Matter.Body.applyForce(this.body,this.body.position, {x:-30, y:-30});
    }
    }
    display(){
    var pos=this.body.position;
    ellipseMode(CENTER);
    ellipse(pos.x,pos.y,this.radius);
    }
}