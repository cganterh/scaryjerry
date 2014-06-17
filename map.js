for (x=0; x < board.width; x++) {
    for (y=0; y < board.height; y++) {
        board.blocks[x][y] = new Block(x, y, ground, "grass");
    }
}
