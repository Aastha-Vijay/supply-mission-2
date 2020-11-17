class Basket{
    constructor(x,y,width,height){
        options = {
            isStatic:false
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.height = height;
        this.width = width;

        World.add(world, this.body);
    }
    diplay(){
        var pos = this.body.position;
        fill("purple");
        stroke("blue");
    }
};