for (x=0; x < board.width; x++) {
    for (y=0; y < board.height; y++) {
        board.blocks[x][y] = new Block(x, y, ground, "grass");
    }
}

rectangle(5,8,5,14,"water")
rectangle(6,9,0,5,"water")
rectangle(2,5,5,11,"forest")
rectangle(1,2,6,9,"forest")
rectangle(1,2,10,11,"forest")
rectangle(3,6,1,5,"forest")
rectangle(9,16,5,7,"forest")
rectangle(8,9,5,12,"forest")
rectangle(10,12,1,5,"forest")
rectangle(14,16,1,5,"forest")
rectangle(12,14,1,5,"shadow")
rectangle(9,12,7,12,"hills")
rectangle(12,16,8,11,"lava")

