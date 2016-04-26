window.onload = function(){
	var home_dashboard = d3.select('body')
		.append('div')
		.attr('class','home_dashboard');
	
	var health = home_dashboard.append('div')
		.attr('class','indexHealth bg');
	loadHealthDiv();
	gethealths(); 
	
	var tradingVolume = home_dashboard.append('div')
		.attr('class','trans_count_div indexTradingVolumes indexHealth bg');
	gettradingVolume();
	tradingVolumes();
	
}
