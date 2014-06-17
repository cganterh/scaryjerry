function rectangle(x_initial, y_initial, x_final, y_final, type){
    for (x=x_initial; x < x_final; x++) {
        for (y=y_initial; y < y_final; y++) {
            board.blocks[x][y] = new Block(x, y, ground, type);
        }
    }
}

