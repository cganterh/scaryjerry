var jerry = {
    step: 3,
    moveDelay: 12,
    moving: false,
    moveInterval: null,
    
    image: document.getElementById("jerry"),
    
    fears: {
        water: true,
        forest: true,
        hill: true,
        lava: true,
        shadow: true,
        spider: true,
    },

    animate: function (final_pos) {
        var x = this.getx();
        var y = this.gety();
        
        var dx = final_pos.x - x;
        var dy = final_pos.y - y;
        
        this.moving = dx!=0 || dy!=0;
        
        if (this.moving) {
            if (dx >= this.step)
                this.setx(x+this.step);
            else if (dx <= -this.step)
                this.setx(x-this.step);
            else
                this.setx(final_pos.x);
                
            if (dy >= this.step)
                this.sety(y+this.step);
            else if (dy <= -this.step)
                this.sety(y-this.step);
            else
                this.sety(final_pos.y);
        }
        else
            window.clearInterval(this.moveInterval);
    },

    move: function (event) {
        if (this.moving)
            return;
            
        var bx = board.to_block_x(this.getx());
        var by = board.to_block_y(this.gety());
        
        switch(event.keyCode) {
        case 37:
            var pos = {x: bx-1, y: by};
            this.test_and_move(pos);
            break;
            
        case 38:
            var pos = {x: bx, y: by-1};
            this.test_and_move(pos);
            break;
            
        case 39:
            var pos = {x: bx+1, y: by};
            this.test_and_move(pos);
            break;
            
        case 40:
            var pos = {x: bx, y: by+1};
            this.test_and_move(pos);
            break;
        }
    },

    scared: function (pos) {
        var block = board.blocks[pos.x][pos.y];
        
        if (block.hill && this.fears.hill)
            return true;
        
        if (block.shadow && this.fears.shadow)
            return true;
    
        switch (block.modifier) {
            case("forest"):
                if (this.fears.forest)
                    return true;
        }
    
        switch (block.type) {
            case("lava"):
                if (this.fears.lava)
                    return true;
            case("water"):
                if (this.fears.water)
                    return true;
        }
        
        return false;
    },
    
    setx: function (x, set_layer) {
        this.image.setAttribute("x", +x);
        this.conditioned_set_layer(set_layer);
    },
    
    sety: function (y, set_layer) {
        this.image.setAttribute("y", +y);
        this.conditioned_set_layer(set_layer);
    },
    
    set_pos: function (x, y, set_layer) {
        this.setx(x, false);
        this.sety(y, false);
        this.conditioned_set_layer(set_layer);
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
    
    set_layer: function (layer) {
        layer.appendChild(this.image);
    },
    
    auto_set_layer: function () {        
        var pos = this.get_pos();
        
        if (board.blocks[pos.x][pos.y].hill)
            this.set_layer(l_hill_entities);
        else
            this.set_layer(l_ground_entities);
    },
    
    conditioned_set_layer: function (set_layer) {
        if ((set_layer === undefined || set_layer == true) &&
            !this.moving)
                this.auto_set_layer();
    },
    
    test_and_move: function (pos) {
        if (board.is_inside(pos)) {
        
            if (this.scared(pos))
                this.fear_globe();
                
            else {
                this.moving = true;
                var self = this;
                
                var move_f = function () {
                    self.animate(board.to_board_pos(pos))
                };
                
                this.moveInterval = window.setInterval(move_f,
                    this.moveDelay);

                if (board.blocks[pos.x][pos.y].gem) {
                    this.gem_event();
                    board.blocks[pos.x][pos.y].remove_gem();
                }
            }
        }
    },
    
    fear_globe: function () {
        show_message({l1: "Que miedo!", 
                      l2: "No puedo ir ahí!",});
        window.setTimeout(hide_message, 2000);
    },
}
