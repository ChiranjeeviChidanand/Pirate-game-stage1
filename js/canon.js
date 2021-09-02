class Canon{

    constructor(x,y,w,h,a){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.a = a
        this.canonImg = loadImage("assets/canon.png");
        this.canonBaseImg = loadImage("assets/cannonBase.png")
    }

    display(){
        push ()
        imageMode(CENTER)
        image(this.canonImg,this.x,this.y,this.w,this.h)
        pop ()

        image (this.canonBaseImg, 70,20,200,200)
        noFill()
    }







}