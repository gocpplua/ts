import shape = require("./module_IShape"); 

export class Circle implements shape.IShape{
    public draw(){
        console.log("Circle is draw ");
    }
}