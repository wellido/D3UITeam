function gettradingVolume(){
	d3.json('/zh-cn/globaltradeinfo/')
		.header("Content-Type", "application/x-www-form-urlencoded")
		.post("", function(e, data) {
//			if (app_name == '') {
				var days = [];//详细量交易数组
				var titles = []; //详细交易量业务名
				var current = data.transcount_current;//交易量
				var day = data.transcount_day;//日交易量
//				 if (app.app_name == app_name) {
//				 	transcount_day = app.transcount_day;
//				 }
				for(var i = 0; i < data.transcount_day_apps.length; i++){
					var app = data.transcount_day_apps[i];
					titles.push(app.disp_name);
					if(app.transcount_day > 0){
						days.push(app.transcount_day);
					}else{
						days.push('--');
					}
				}
			parseVolume(current,day,titles,days);
			setTimeout(gettradingVolume,60000);
//			}
		});
}

function tradingVolumes(){
	tradingVolume = d3.select('.indexTradingVolumes')
		.append('div');
	
	/*交易量和日交易量 start*/
	var tvtalbe = tradingVolume.append('table')
		.attr('class','table');
	var tvtable1 = tvtalbe.append('tr');
		tvtable1.append('td').html('交易量');
	var contSpan = tvtable1.append('td')
		contSpan.append('span')
			.attr('id','contSpanTotal')
			.html('--');
		contSpan.append('span').html('笔/分钟');
	
	var tvtable2 = tvtalbe.append('tr')
		tvtable2.append('td').html('日交易量');
	var spancont2 = tvtable2.append('td');
		spancont2.append('span')
			.attr('id','contSpanDay')
			.html('--');
		spancont2.append('span').html('笔');
	/*交易量和日交易量 end */
	
	tradingVolume.append('hr');/*分割线*/
	
	tradingVolume.append('div')
		.attr('id','tradingVolumeInfo');
}

function parseVolume(transcount_current,transcount_day,titles,transcount_days){
	/*详细交易量 start */
	d3.select("#contSpanTotal").html(transcount_current);
	d3.select("#contSpanDay").html(transcount_day);
	var tvDetailed  = d3.select("#tradingVolumeInfo")
						.html("")
						.append('table')
						.attr('class','table');
	for(var i=0; i < titles.length; i++){
		var DetailedOnline = tvDetailed.append('tr');
			DetailedOnline.append('td').html(titles[i]);
		var contSpan = DetailedOnline.append('td')
			contSpan.append('span').html(transcount_days[i]);
			contSpan.append('span').html('笔');
	}	
}
