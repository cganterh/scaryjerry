rectangle( 5,  8,  5, 12, {type: "water"});
rectangle( 6,  9,  0,  5, {type: "water"});
rectangle( 2,  5,  5, 11, {modifier: "forest"});
rectangle( 1,  2,  6,  9, {modifier: "forest"});
rectangle( 1,  2, 10, 11, {modifier: "forest"});
rectangle( 3,  6,  1,  5, {modifier: "forest"});
rectangle( 9, 16,  5,  7, {modifier: "forest"});
rectangle( 8,  9,  5, 12, {modifier: "forest"});
rectangle(10, 12,  1,  5, {modifier: "forest"});
rectangle(14, 16,  1,  5, {modifier: "forest"});
rectangle(12, 14,  1,  5, {shadow: true, modifier: "forest"});
rectangle( 9, 12,  7, 12, {hill: true});
rectangle(12, 16,  8, 11, {type: "lava"});
board.blocks[3][3].set({gem: true});
board.blocks[15][0].set({gem: true});
board.blocks[15][11].set({gem: true});
board.blocks[6][8].set({type: "water", gem: true});
board.gems = 4;

jerry.set_pos(0, 0);

var spider1 = new spider("spider1");
spider1.set_pos(50, 50, ["d","u"]);

var spider2 = new spider("spider2");
spider2.set_pos(200, 200, ["l","r"]);

var spider3 = new spider("spider3");
spider3.set_pos(300, 300, ["d","r","u","l"]);

var spider4 = new spider("spider4");
spider4.set_pos(400, 400, ["r","d","l","u"]);
