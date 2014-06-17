var jerry = {
    x: jerry.getAttribute("x"),
    y: jerry.getAttribute("y"),
    
    move: function (event) {
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
    },
}
