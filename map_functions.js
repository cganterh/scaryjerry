function rectangle(x_initial, x_final, y_initial, y_final, options) {
    for (x=x_initial; x < x_final; x++) {
        for (y=y_initial; y < y_final; y++) {
            board.blocks[x][y].set(options);
        }
    }
}

