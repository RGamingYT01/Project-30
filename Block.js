class Block{
    constructor(x, y, width, height) {
        var options = {
           
            restitution :0.2,
            friction :0.01,
            //isStatic:true
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        if(this.body.speed<3){
          push();
          translate(this.body.position.x, this.body.position.y);
          rectMode(CENTER);
          rect( 0, 0, this.width, this.height);
          pop();
        }
          else{
           World.remove(world,this.body);
          
           push();
            this.visibility = this.visibility  - 5;
            tint(255,this.visibility);
            pop ();
          }
      
        }
}