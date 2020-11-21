class Ground{

    constructor(x,y,width,height){
        //passing extra property 
        var option={
          isStatic:true
        }
       // creating object or bodies 
       this.body=Bodies.rectangle(x,y,width,height,option);
       this.width=width;
       this.height=height;
       //attaching body and world
       World.add(world,this.body);

    }

    display(){
     var pos=this.body.position
        rectMode(CENTER);
        fill("brown");
        rect(pos.x,pos.y,this.width,this.height);

    }
}