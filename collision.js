function collision() {
	for(i = 0; i < spiders.length; i++){
		if(jerry.getx() < spiders[i].getx() + spiders[i].width  && jerry.getx() + jerry.width  > spiders[i].getx() &&
		jerry.gety() < spiders[i].gety() + spiders[i].height && jerry.gety() + jerry.height > spiders[i].gety()){
			if(jerry.fears.spider) jerry.defeat();
			else spiders[i].die();
		}
	}
}

var timer_colision = setInterval(function(){collision()}, 200);