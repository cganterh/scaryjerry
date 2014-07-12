function spider(image){
    this.step = 3;
    this.moveDelay = 12;
    this.moving = false;
    this.moveInterval = null;
    this.movement_list = null;
    this.iterator = 0;
    this.movement_delay = 500;
    this.image = document.getElementById(image);

    this.iterate_movement = function (){
	var bx = board.to_block_x(this.getx());
        var by = board.to_block_y(this.gety());
	
	switch(this.movement_list[this.iterator]) {
 	case "l":
            var pos = {x: bx-1, y: by};
            this.test_and_move(pos);
            break;
            
        case "d":
            var pos = {x: bx, y: by+1};
            this.test_and_move(pos);
            break;
            
        case "r":
            var pos = {x: bx+1, y: by};
            this.test_and_move(pos);
            break;
            
        case "u":
            var pos = {x: bx, y: by-1};
            this.test_and_move(pos);
            break;
        }
	if(this.iterator < this.movement_list.length - 1) this.iterator += 1;
	else this.iterator = 0;
    };
	
    this.animate = function (final_pos) {
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
    };
    
    this.setx = function (x, set_layer) {
        this.image.setAttribute("x", +x);
        this.conditioned_set_layer(set_layer);
    };
    
    this.sety = function (y, set_layer) {
        this.image.setAttribute("y", +y);
        this.conditioned_set_layer(set_layer);
    };
    
    this.set_pos = function (x, y, movement_list, set_layer) {
        this.setx(x, false);
        this.sety(y, false);
        this.movement_list = movement_list;
        this.conditioned_set_layer(set_layer);
        window.setInterval(function(){this.iterate_movement()}.bind(this), this.movement_delay);
    };
    
    this.getx = function () {
        return +this.image.getAttribute("x");
    };
    
    this.gety = function () {
        return +this.image.getAttribute("y");
    };
    
    this.get_pos = function () {
        return {
            x: this.getx(),
            y: this.gety(),
        }
    };
    
    this.set_layer = function (layer) {
        layer.appendChild(this.image);
    };
    
   this.auto_set_layer = function () {        
        var pos = board.to_block_pos(this.get_pos());
        
        if (board.blocks[pos.x][pos.y].hill)
            this.set_layer(l_hill_entities);
        else
            this.set_layer(l_ground_entities);
    };
    
    this.conditioned_set_layer = function (set_layer) {
        if ((set_layer === undefined || set_layer == true) &&
            !this.moving)
                this.auto_set_layer();
    };

    this.test_and_move = function (pos) {
        if (board.is_inside(pos)) {
	    this.moving = true;
            var self = this;
             
            var move_f = function () {
                self.animate(board.to_board_pos(pos))
            };
                
            this.moveInterval = window.setInterval(move_f,
                this.moveDelay);

        }
    };
};
