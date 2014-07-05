/*
se calcula la posición del globo y la consecuente flecha que tendrá.
de acuerdo a la posición del globo y la flecha correspondiente es que
se calcula la posición de la flecha.
*/
var relative_x=2;
var relative_y=2;
var message_blocks = {
	cloud:new Block(0,0,message_cloud,"cloud"),
	cloud_right_arrow:new Block(this.relative_x,this.relative_y,message_cloud,"cloud-right-arrow"),
	cloud_left_arrow:new Block(this.relative_x,this.relative_y,message_cloud,"cloud-left-arrow"),
	cloud_right_up_arrow:new Block(this.relative_x,this.relative_y,message_cloud,"cloud-right-up-arrow"),
	cloud_left_up_arrow:new Block(this.relative_x,this.relative_y,message_cloud,"cloud-left-up-arrow"),
	setx: function (x) {
		var desplazamiento=relative_x*board.block.width+x;
	    this.cloud.image.setAttribute("x", +x);
	    this.cloud_right_arrow.image.setAttribute("x", desplazamiento);
	    this.cloud_left_arrow.image.setAttribute("y", desplazamiento);
	    this.cloud_right_up_arrow.image.setAttribute("x",x+50);
	    this.cloud_left_up_arrow.image.setAttribute("x",x+50);

	},
	sety: function (y) {
		var desplazamiento =relative_y*board.block.height + y;
	    this.cloud.image.setAttribute("y", +y);
		this.cloud_right_arrow.image.setAttribute("y", desplazamiento);
		this.cloud_right_up_arrow.image.setAttribute("y",y-50);
		this.cloud_left_up_arrow.image.setAttribute("y",y-50);
	},
}

hidden_message();

function message(){
	hidden_message();
	var jerry_x=jerry.getx();
	var jerry_y=jerry.gety();
	// Jerry en esquina superior derecha
	if(jerry_y<board.block.height*2){
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
		
	}else{
			message_blocks.setx(jerry_x);
		    message_blocks.sety(jerry_y - board.block.height*2s);
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
}