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
