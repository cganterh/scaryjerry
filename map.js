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
board.blocks[4][11].set({gem: true});
board.blocks[15][0].set({gem: true});
board.blocks[15][11].set({gem: true});
board.blocks[6][8].set({type: "water", gem: true});
board.blocks[9][4].set({gem: true});
board.gems = 5;

jerry.set_pos(0, 0);

var spiders = new Array();
spiders.push(new spider("spider1"));
spiders[0].set_pos(50, 450, ["l","r"]);

spiders.push(new spider("spider2"));
spiders[1].set_pos(100, 150, ["l","l","r","r"]);

spiders.push(new spider("spider3"));
spiders[2].set_pos(250, 350, ["d","d","r","r","u","u","l","l"]);

spiders.push(new spider("spider4"));
spiders[3].set_pos(400, 150, ["d","d","r","r","u","u","l","l"]);
