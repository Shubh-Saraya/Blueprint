class Box{

    constructor(x,y,width,height){
        //passing extra property 
        var option={
          restitution:1
        }
       // creating object or bodies 
       this.body=Bodies.rectangle(x,y,width,height,option);
       this.width=width;
       this.height=height;
       //attaching body and world
       World.add(world,this.body);

    }   

    display(){
     var pos=this.body.position;
     var angle=this.body.angle;
     push();
     translate(pos.x,pos.y);
     rotate(angle);
        rectMode(CENTER);
        fill(255);
        rect(0,0,this.width,this.height);
        pop();

    }
}