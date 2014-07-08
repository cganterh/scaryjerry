function clone_to(node_a, parent_a) {
    if (typeof node_a == "string")
        var node = document.getElementById(node_a).cloneNode(true);
    else
        var node = node_a.cloneNode(true);
        
    if (typeof parent_a == "string")
        var parent = document.getElementById(parent_a);
    else
        var parent = parent_a;

    node.removeAttribute("id");
    parent.appendChild(node);
    return node;
}

function clone_to_and_set_pos(node_a, parent_a, x, y) {
    var node = clone_to(node_a, parent_a);
    node.setAttribute("x", x);
    node.setAttribute("y", y);
    return node;
}

function load_image(name, x, y, layer) {
    return clone_to_and_set_pos(name, layer, board.to_board_x(x),
                                board.to_board_y(y));
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
