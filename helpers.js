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
