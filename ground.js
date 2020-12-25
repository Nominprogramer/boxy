console.log("hi")

class Ground{
    constructor(x,y,w,h){
        let gro={
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,w,h,gro);
        this.w = w;
        this.h = h;
        World.add(world,this.body)
    }

    display(){
        let pos = this.body.position
        //fill(color);
        rectMode(CENTER)
        rect(pos.x,pos.y,this.w,this.h);
    }
}