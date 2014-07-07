var board = {
    block: {width: 50, height: 50},
    width: 800.0/50.0,
    height: 600.0/50.0,
    blocks: [],
    
    is_inside: function (pos) {
        if (pos.x < 0 || pos.y < 0)
            return false;
        
        if (pos.x > this.width - 1 || pos.y > this.height - 1)
            return false;
        
        return true;
    },
    
    to_block_x: function (x) {
        return Math.floor(x/this.block.width);
    },
    
    to_block_y: function (y) {
        return Math.floor(y/this.block.height);
    },
    
    to_block_pos: function (pos) {
        return {x: this.to_block_x(pos.x),
                y: this.to_block_y(pos.y)};
    },
    
    to_board_x: function (x) {
        return x*this.block.width;
    },
    
    to_board_y: function (y) {
        return y*this.block.height;
    },
    
    to_board_pos: function (pos) {
        return {x: this.to_board_x(pos.x),
                y: this.to_board_y(pos.y)};
    },
}

for (x=0; x < board.width; x++) {
    board.blocks[x] = [];
    for (y=0; y < board.height; y++) {
        board.blocks[x][y] = new Block(x, y);
    }
}
