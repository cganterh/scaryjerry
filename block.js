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
