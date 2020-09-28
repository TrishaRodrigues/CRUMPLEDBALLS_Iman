class Box{
    constructor(x,y,w,h){
        var func = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,w,h,func);
        this.width = w;
        this.height = h;
        World.add(world,this.body);
    }
    show(){
        var pos = this.body.position;
        fill("yellow");
        rect(pos.x,pos.y,this.width,this.height);
    }
}