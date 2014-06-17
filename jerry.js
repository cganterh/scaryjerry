var jerry = {
    x: document.getElementById("jerry").getAttribute("x"),
    y: document.getElementById("jerry").getAttribute("y"),
    image: document.getElementById("jerry"),
    
    move: function (event) {
        switch(event.keyCode) {
            case 37:
                var x = this.image.getAttribute("x");
                this.image.setAttribute("x", +x-50);
                break;
                
            case 38:
                var y = this.image.getAttribute("y");
                this.image.setAttribute("y", +y-50);
                break;
                
            case 39:
                var x = this.image.getAttribute("x");
                this.image.setAttribute("x", +x+50);
                break;
                
            case 40:
                var y = this.image.getAttribute("y");
                this.image.setAttribute("y", +y+50);
                break;
        }
    },
}
