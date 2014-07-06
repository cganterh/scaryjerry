/*
se calcula la posición del globo y la consecuente flecha que tendrá.
de acuerdo a la posición del globo y la flecha correspondiente es que
se calcula la posición de la flecha.
*/
var message_blocks = {
	cloud:new Block(0,0,l_message_cloud,"cloud"),
	cloud_right_arrow:new Block(0,0,l_message_cloud,"cloud-right-arrow"),
	cloud_left_arrow:new Block(0,0,l_message_cloud,"cloud-left-arrow"),
	cloud_right_up_arrow:new Block(0,0,l_message_cloud,"cloud-right-up-arrow"),
	cloud_left_up_arrow:new Block(0,0,l_message_cloud,"cloud-left-up-arrow"),
	// se invoca a setx con la posición x que deberá tener la esquina superior derecha del globo del mensaje,
	// dentro de setx() se calcula la posición de los demás elementos en relación a ese valor de x
	setx: function (x) {
	    this.cloud.image.setAttribute("x", +x);
	    text.setAttribute("x", +x);
	    this.cloud_right_arrow.image.setAttribute("x", board.block.width+x);
	    this.cloud_left_arrow.image.setAttribute("x", board.block.width+x);
	    this.cloud_right_up_arrow.image.setAttribute("x",x+50);
	    this.cloud_left_up_arrow.image.setAttribute("x",x+50);
	},
	// se invoca a sety con la posición y que deberá tener la esquina superior derecha del globo del mensaje,
	// dentro de sety() se calcula la posición de los demás elementos en relación a ese valor de y
	sety: function (y) {
	    this.cloud.image.setAttribute("y", +y);
	    text.setAttribute("y", +y);
		this.cloud_right_arrow.image.setAttribute("y", board.block.height*2+y);
		this.cloud_left_arrow.image.setAttribute("y", board.block.height*2+y);
		this.cloud_right_up_arrow.image.setAttribute("y",y-50);
		this.cloud_left_up_arrow.image.setAttribute("y",y-50);
	},
}

text_box();
hidden_message();

function message(current_message){
	hidden_message();
	text.setAttribute("visibility","visible");
	text1.textContent = current_message.slice(0,20);
	text2.textContent = current_message.slice(20,40);
	text3.textContent = current_message.slice(40,60);
	text4.textContent = current_message.slice(60,80);
	var jerry_x=jerry.getx();
	var jerry_y=jerry.gety();
	// Jerry en esquina superior derecha
	if(jerry_y<board.block.height*3){
		if(jerry_x<board.block.width*2){
			message_blocks.setx(jerry_x);
		    message_blocks.sety(jerry_y + board.block.height*2);
			message_blocks.cloud.image.setAttribute("visibility","visible");
			message_blocks.cloud_left_up_arrow.image.setAttribute("visibility","visible");
		}else{ // Jerry en la parte superior de la pantalla
			message_blocks.setx(jerry_x-board.block.width*2);
		    message_blocks.sety(jerry_y+board.block.height*2);
			message_blocks.cloud.image.setAttribute("visibility","visible");
			message_blocks.cloud_right_up_arrow.image.setAttribute("visibility","visible");
		}
	}
	else if(jerry_x>board.block.width*48){
		message_blocks.setx(jerry_x-board.block.width*2);
	    message_blocks.sety(jerry_y-board.block.height*3);
		message_blocks.cloud.image.setAttribute("visibility","visible");
		message_blocks.cloud_right_arrow.image.setAttribute("visibility","visible");
	}else{
		message_blocks.setx(jerry_x);
	    message_blocks.sety(jerry_y - board.block.height*3);
		message_blocks.cloud.image.setAttribute("visibility","visible");
		message_blocks.cloud_left_arrow.image.setAttribute("visibility","visible");
	}
}

function hidden_message(){
	message_blocks.cloud.image.setAttribute("visibility","hidden");
	message_blocks.cloud_right_arrow.image.setAttribute("visibility","hidden");
	message_blocks.cloud_left_arrow.image.setAttribute("visibility","hidden");
	message_blocks.cloud_right_up_arrow.image.setAttribute("visibility","hidden");
	message_blocks.cloud_left_up_arrow.image.setAttribute("visibility","hidden");
	text.setAttribute("visibility","hidden");
}

function text_box(){
	var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	//svg.setAttribute('xlink','http://www.w3.org/1999/xlink');
	svg.setAttribute('id','text');
	svg.setAttribute('width','150');
	svg.setAttribute('height','100');

	var text1 = document.createElementNS('http://www.w3.org/2000/svg', 'text');
	text1.setAttribute('id', 'text1');
	text1.setAttribute('x', '10');
	text1.setAttribute('y', '20');
	text1.setAttribute('fill', '#000');


	var text2 = document.createElementNS('http://www.w3.org/2000/svg', 'text');
	text2.setAttribute('id', 'text2');
	text2.setAttribute('x', '10');
	text2.setAttribute('y', '40');
	text2.setAttribute('fill', '#000');

	var text3 = document.createElementNS('http://www.w3.org/2000/svg', 'text');
	text3.setAttribute('id', 'text3');
	text3.setAttribute('x', '10');
	text3.setAttribute('y', '60');
	text3.setAttribute('fill', '#000');

	var text4 = document.createElementNS('http://www.w3.org/2000/svg', 'text');
	text4.setAttribute('id', 'text4');
	text4.setAttribute('x', '10');
	text4.setAttribute('y', '80');
	text4.setAttribute('fill', '#000');

	text1.textContent = '';
	text2.textContent = '';
	text3.textContent = '';
	text4.textContent = '';

	svg.appendChild(text1);
	svg.appendChild(text2);
	svg.appendChild(text3);
	svg.appendChild(text4);
	l_message_cloud.appendChild(svg);
}