import shape = require("./module_IShape")
import circle = require("./module_Circle")

function drawAll(shapeToDraw:shape.IShape){
    shapeToDraw.draw()
}

drawAll(new circle.Circle());