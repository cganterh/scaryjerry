var jerry = {
    step: 2,
    moveDelay: 12,
    moving: false,
    moveInterval: null,
    
    image: document.getElementById("jerry"),
    
    animate: function (xfinal, yfinal) {
        var x = this.getx();
        var y = this.gety();
        
        var dx = xfinal - x;
        var dy = yfinal - y;
        
        this.moving = dx!=0 || dy!=0;
        
        if (this.moving) {
            if (dx >= this.step)
                this.setx(x+this.step);
            else if (dx <= -this.step)
                this.setx(x-this.step);
            else
                this.setx(xfinal);
                
            if (dy >= this.step)
                this.sety(y+this.step);
            else if (dy <= -this.step)
                this.sety(y-this.step);
            else
                this.sety(yfinal);
        }
        else
            window.clearInterval(this.moveInterval);
    },
    
    move: function (event) {
        if (!this.moving) {
            var x = this.getx();
            var y = this.gety();
            var self = this;
            
            switch(event.keyCode) {
                case 37:
                    this.moving = true;
                    this.moveInterval = window.setInterval(
                        function () {self.animate(+x-50, y)},
                        this.moveDelay);
                    break;
                    
                case 38:
                    this.moving = true;
                    this.moveInterval = window.setInterval(
                        function () {self.animate(x, +y-50)},
                        this.moveDelay);
                    break;
                    
                case 39:
                    this.moving = true;
                    this.moveInterval = window.setInterval(
                        function () {self.animate(+x+50, y)},
                        this.moveDelay);
                    break;
                    
                case 40:
                    this.moving = true;
                    this.moveInterval = window.setInterval(
                        function () {self.animate(x, +y+50)},
                        this.moveDelay);
                    break;
            }
        }
    },
    
    setx: function (x) {
        this.image.setAttribute("x", +x);
    },
    
    sety: function (y) {
        this.image.setAttribute("y", +y);
    },
    
    set_pos: function (x, y) {
        this.setx(x);
        this.sety(y);
    },
    
    getx: function () {
        return +this.image.getAttribute("x");
    },
    
    gety: function () {
        return +this.image.getAttribute("y");
    },
    
    get_pos: function () {
        return {
            x: this.getx(),
            y: this.gety(),
        }
    },
}
