var layer1 = document.getElementById("layer1");
var l1ctx = layer1.getContext('2d');

var layer2 = document.getElementById("layer2");
var l2ctx = layer2.getContext('2d');

var layer3 = document.getElementById("layer3");
var l3ctx = layer3.getContext('2d');

l1ctx.fillStyle = "#FF0000";
l1ctx.fillRect(0,0,150,150);

l2ctx.fillStyle = "#00FF00";
l2ctx.fillRect(100,100,260,110);

l3ctx.fillStyle = "#0000FF";
l3ctx.fillRect(200,200,370,120);
