var jerry = {
    step: 3,
    moveDelay: 12,
    moving: false,
    moveInterval: null,
    
    image: document.getElementById("jerry"),
    
    fears: {
        water: true,
        forest: true,
        hills: true,
        lava: true,
        shadow: true,
        spider: true,
    },

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
                    if (this.scared((+x-50)/50.0,y/50.0)) {
                        this.moving = true;
                        this.moveInterval = window.setInterval(
                            function () {self.animate(+x-50, y)},
                            this.moveDelay);
                    }
                    else this.fear_globe();
                    break;
                    
                case 38:
                    if (this.scared(x/50.0,(+y-50)/50.0)) {
                        this.moving = true;
                        this.moveInterval = window.setInterval(
                            function () {self.animate(x, +y-50)},
                            this.moveDelay);
                    }
                    else this.fear_globe();
                    break;
                    
                case 39:
                    if (this.scared((+x+50)/50.0,y/50.0)) {
                        this.moving = true;
                        this.moveInterval = window.setInterval(
                            function () {self.animate(+x+50, y)},
                            this.moveDelay);
                    }
                    else this.fear_globe();
                    break;
                    
                case 40:
                    if (this.scared(x/50.0,(+y+50)/50.0)) {
                        this.moving = true;
                        this.moveInterval = window.setInterval(
                            function () {self.animate(x, +y+50)},
                            this.moveDelay);
                    }
                    else this.fear_globe();
                    break;
            }
        }
    },

    scared: function (x,y){
        switch(board.blocks[x][y].type){
            case("water"): if(this.fears.water) return false;
                            else return true;
            case("forest"): if(this.fears.forest) return false;
                            else return true;
            case("hills"): if(this.fears.hills) return false;
                            else return true;
            case("lava"): if(this.fears.lava) return false;
                            else return true;
            case("shadow"): if(this.fears.shadow) return false;
                            else return true;
            default: return true;
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
