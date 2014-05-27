var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

ctx.fillStyle = "#FF0000";
ctx.fillRect(0,0,150,100);
ctx.drawImage(img,10,10); //http://www.techrepublic.com/article/preloading-and-the-javascript-image-object/
