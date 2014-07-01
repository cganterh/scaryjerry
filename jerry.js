var jerry = {
    x: document.getElementById("jerry").getAttribute("x"),
    y: document.getElementById("jerry").getAttribute("y"),
    image: document.getElementById("jerry"),
    
    fears: {
        water: true,
        forest: true,
        hills: true,
        lava: true,
        shadow: true,
        spider: true,
    },

    move: function (event) {
        var x = this.image.getAttribute("x");
        var y = this.image.getAttribute("y");
        switch(event.keyCode) {
            case 37:
                if(this.scared((+x-50)/50.0,y/50.0)) this.image.setAttribute("x", +x-50);
                else this.fear_globe();
                break;
                
            case 38:
                if(this.scared(x/50.0,(+y-50)/50.0)) this.image.setAttribute("y", +y-50);
                else this.fear_globe();
                break;
                
            case 39:
                if(this.scared((+x+50)/50.0,y/50.0)) this.image.setAttribute("x", +x+50);
                else this.fear_globe();
                break;
                
            case 40:
                if(this.scared(x/50.0,(+y+50)/50.0)) this.image.setAttribute("y", +y+50);
                else this.fear_globe();
                break;
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
    
    fear_globe: function (){},
}
