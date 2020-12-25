class Boxy{
    constructor(x,y,w,h){
        let bro={
            restitution : 2
        }
        this.body = Bodies.rectangle(x,y,w,h,bro);
        this.w = w;
        this.h = h;
        World.add(world,this.body)
    }

    display(color){
        push()
        let pos = this.body.position;
        let angle= this.body.angle;
        fill(color);
        rotate(angle);
        translate(pos.x,pos.y);
        rectMode(CENTER)
        rect(0,0,this.w,this.h);
        pop();
    }
}