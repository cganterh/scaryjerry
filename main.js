var ground        = document.getElementById("ground");
var entities      = document.getElementById("entities");
var hills         = document.getElementById("hills");
var hill_entities = document.getElementById("hill-entities");
var shadows       = document.getElementById("shadows");
var jerry         = document.getElementById("jerry");

var board = {
    block: {width: 50, height: 50},
    width: 800.0/50.0,
    height: 600.0/50.0,
    blocks: [],
}

for (x=0; x < board.width; x++) {
    board.blocks[x] = [];
}

function Block(x, y, layer, type) {
    this.x = x;
    this.y = y;
    this.layer = layer;
    this.type = type;
    this.image = document.getElementById(this.type).cloneNode(true);
    
    this.image.id = "";
    this.image.setAttribute("x", board.block.width*this.x+"px");
    this.image.setAttribute("y", board.block.height*this.y+"px");
    layer.appendChild(this.image);
}

function move(event) {
    switch(event.keyCode) {
        case 37:
            var x = jerry.getAttribute("x");
            jerry.setAttribute("x", +x-50);
            break;
            
        case 38:
            var y = jerry.getAttribute("y");
            jerry.setAttribute("y", +y-50);
            break;
            
        case 39:
            var x = jerry.getAttribute("x");
            jerry.setAttribute("x", +x+50);
            break;
            
        case 40:
            var y = jerry.getAttribute("y");
            jerry.setAttribute("y", +y+50);
            break;
    }
}
