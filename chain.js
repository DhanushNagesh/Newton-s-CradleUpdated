class Chain {
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY},
          
        }
        
        this.chain=Constraint.create(options)
        
        World.add(world,this.chain)

    }
    display(){
var posA = this.chain.bodyA.position
var posB = this.chain.bodyB.position
fill("black");
strokeWeight(4)
     


var Anchor2X = posB.x+this.offsetX
var Anchor2Y = posB.y+this.offsetY
        line(posA.x,posA.y,Anchor2X,Anchor2Y)
    }
}
