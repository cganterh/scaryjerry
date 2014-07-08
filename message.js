/*
se calcula la posición del globo y la consecuente flecha que tendrá.
de acuerdo a la posición del globo y la flecha correspondiente es que
se calcula la posición de la flecha.
*/

var bubble = {
	cloud: document.getElementById("cloud"),
	cloud_right_arrow: document.getElementById("cloud-right-arrow"),
	cloud_left_arrow: document.getElementById("cloud-left-arrow"),
	
	cloud_right_up_arrow: document.getElementById(
	    "cloud-right-up-arrow"),
	    
	cloud_left_up_arrow: document.getElementById(
	    "cloud-left-up-arrow"),
	    
	text: document.getElementById("bubble-text"),
	line1: document.getElementById("line1"),
	line2: document.getElementById("line2"),
	line3: document.getElementById("line3"),
	line4: document.getElementById("line4"),
	                              
	// se invoca a setx con la posición x que deberá tener la esquina
	// superior derecha del globo del mensaje,
	// dentro de setx() se calcula la posición de los demás elementos
	// en relación a ese valor de x
	setx: function (x) {
	    var bw = board.block.width;
	    
	    this.cloud.setAttribute("x", x);
	    this.text.setAttribute("x", x);
	    this.line1.setAttribute("x", x);
	    this.line2.setAttribute("x", x);
	    this.line3.setAttribute("x", x);
	    this.line4.setAttribute("x", x);
	    this.cloud_right_arrow.translate({x: bw+x});
	    this.cloud_left_arrow.translate({x: bw+x});
	    this.cloud_right_up_arrow.translate({x: bw+x});
	    this.cloud_left_up_arrow.translate({x: bw+x});
	},
	
	// se invoca a sety con la posición y que deberá tener la esquina
	// superior derecha del globo del mensaje,
	// dentro de sety() se calcula la posición de los demás elementos
	// en relación a ese valor de y
	sety: function (y) {
	    var bh = board.block.height;
	    
	    this.cloud.setAttribute("y", y);
	    this.text.setAttribute("y", y);
		this.cloud_right_arrow.translate({y: bh*2+y});
		this.cloud_left_arrow.translate({y: bh*2+y});
		this.cloud_right_up_arrow.translate({y: y-bh});
		this.cloud_left_up_arrow.translate({y: y-bh});
	},
}

bubble.cloud_right_arrow.translate = translate;
bubble.cloud_left_arrow.translate = translate;
bubble.cloud_right_up_arrow.translate = translate;
bubble.cloud_left_up_arrow.translate = translate;

function show_message(message){
    var message = message || {};

    bubble.cloud_right_arrow.setAttribute("visibility", "hidden");
    bubble.cloud_left_arrow.setAttribute("visibility", "hidden");
    bubble.cloud_right_up_arrow.setAttribute("visibility", "hidden");
    bubble.cloud_left_up_arrow.setAttribute("visibility", "hidden");
    
	l_message_cloud.setAttribute("visibility", "visible");
	
	bubble.line1.textContent = message.l1 || " ";
	bubble.line2.textContent = message.l2 || " ";
	bubble.line3.textContent = message.l3 || " ";
	bubble.line4.textContent = message.l4 || " ";
	
	var jerry_x = jerry.getx();
	var jerry_y = jerry.gety();
	
	// Jerry en esquina superior derecha
	if (jerry_y < board.block.height*3) {
		if(jerry_x < board.block.width*2) {
			bubble.setx(jerry_x);
		    bubble.sety(jerry_y + board.block.height*2);
			bubble.cloud.setAttribute("visibility",
			    "inherited");
			bubble.cloud_left_up_arrow.setAttribute(
			    "visibility", "inherited");
		}
		else { // Jerry en la parte superior de la pantalla
			bubble.setx(jerry_x - board.block.width*2);
		    bubble.sety(jerry_y + board.block.height*2);
			bubble.cloud.setAttribute("visibility",
			    "inherited");
			bubble.cloud_right_up_arrow.setAttribute(
			    "visibility","inherited");
		}
	}
	else if (jerry_x > board.block.width*48) {
		bubble.setx(jerry_x - board.block.width*2);
	    bubble.sety(jerry_y - board.block.height*3);
		bubble.cloud.setAttribute("visibility",
		    "visible");
		bubble.cloud_right_arrow.setAttribute(
		    "visibility","visible");
	}
	else {
		bubble.setx(jerry_x);
	    bubble.sety(jerry_y - board.block.height*3);
		bubble.cloud.setAttribute("visibility",
		    "visible");
		bubble.cloud_left_arrow.setAttribute("visibility",
		    "visible");
	}
}

function hide_message() {
	l_message_cloud.setAttribute("visibility", "hidden");
}
