function clock(container, r, className){
	var d = 2 * r;
	var circle = container.append('div')/*外面最大的div圆圈*/
		.style('position', 'relative')
	    .style('margin', '0 auto')
	    .style('padding', 0)
	    .style('width', d + 'px')
	    .style('height', d + 'px')
	    .style('border-radius', r + 'px')
	    .style('border', '1px solid white')
	    .style('margin','20px 50px');
	var one_minute = d3.range(60).map(function(d){return d * 360 /60; });
	circle.selectAll('div.one_minute')
		.data(one_minute)
		.enter()
		.append('div')
		.attr('class','one_minute')
		.style('position','absolute')
		.style('margin', 0)
		.style('padding', 0)
		.style('top', r + 'px')
		.style('left', r + 'px')
		.style('width', r + 'px')
		.style('height', '2px')
		.style('transform-origin', '0 0')
		.style('transform', function (d) { return `rotate(${d}deg)`;})
		.append('div')  //刻度齿
		.attr('class','gear')
		.attr('class',className)
	    .style('position', 'absolute')
	    .style('left', '90%')
	    .style('width', '10%')
	    .style('height', '100%')
	    .style('background', 'white');
	var second_hand = circle.append('div')//指针
		.attr('class',className + '_secondh')
	    .style('position', 'absolute')
	    .style('margin', 0)
	    .style('padding', 0)
	    .style('top', r + 'px')
	    .style('left', r + 'px')
	    .style('width', r * 0.75 + 'px')
	    .style('height', 1 + 'px')
	    .style('transform-origin', '0 0')
	    .style('background', 'white')
	    .style('transform','rotate(270deg)');
	return circle; 
}

var second = 0;
function update_now(updateFunctions) {
	second++;
    for(var j = 0;j < updateFunctions.length; j++ ){
    	var gears = d3.selectAll('.' + updateFunctions[j])[0];
    	var seconds_deg = second * 360 / 60 - 90;
    	d3.select('.' + updateFunctions[j] + '_secondh')
    		.style('transform', `rotate(${seconds_deg}deg)`);
    	for (var i = 0; i < 60; i++) {
	    	gears[i].style.background="white";
	    }
    	if(second < 15){
	    	for (var i = 45; i < (45 + second); i++) {
	    		gears[i].style.background="#0c67a4";
	    	}
	    }else if(second < 60){
	    	for (var i = 45; i < 60; i++) {
	    		gears[i].style.background="#0c67a4";
	    	}
	    	for (var i = 0; i < (second - 15); i++) {
	    		gears[i].style.background="#0c67a4";
	    	}
	    }else{	    	
	    	second = 0;
	    }
    }
   

}
