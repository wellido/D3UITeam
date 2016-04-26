window.onload = function(){
	var divBox = d3.select('body')
		.append('div')
		.attr('class','divBox');
	var ulBox = divBox.append('ul');
	var li1 = ulBox.append('li')
		.attr('class','meunLi');
	var system = li1.append('a')
		.attr('class','systemA')
		.attr('href','javascript:void(0);')
		.style('display','block')
		.style('text-decoration',' none');
	systems();
	var li2 = ulBox.append('li')
		.attr('class','meunLi');
	var manageApp = li2.append('a')
		.attr('class','manageA')
		.attr('href','../system/about2.html')
		.style('display','block')
		.style('text-decoration',' none');
	manageApps();
	
	var li3 = ulBox.append('li')
		.attr('class','meunLi');
	var restart = li3.append('a')
		.attr('class','restartA')
		.attr('href','javascript:void(0);')
		.style('display','block')
		.style('text-decoration',' none');
	restarts();
	
}
