function load_image(name, x, y, layer) {
    var image = document.getElementById(name).cloneNode(true);
    image.id = "";
    image.removeAttribute("id");
    image.setAttribute("x", board.block.width*x);
    image.setAttribute("y", board.block.height*y);
    layer.appendChild(image);
    return image;
}

function remove_from_dom(node) {
    if (node && node.parentNode)
        node.parentNode.removeChild(node);
}

function translate(pos) {
    var pos = pos || {};
    
    if (pos.x === undefined)
        var x = this.x || 0;
    else
        var x = pos.x;
    
    if (pos.y === undefined)
        var y = this.x || 0;
    else
        var y = pos.y;
    
    this.x = x;
    this.y = y;
    this.setAttribute("transform", "translate(" + x +", "+ y + ")");
}
