function rectangle_box(){
  //画布大小
	var width = 800;
	var height = 400;
	var pad = 20;//标题y轴位置

	//在 body 里添加一个 SVG 画布	
	var svg = d3.select("#svg")[0][0];
	if(svg != null){
		svg.html("");
	}else{
		svg = d3.select("body")
		.append("svg")
		.attr("id","svg")
		.attr("width", width)
		.attr("height", height);
	}
	

	//画布周边的空白
	var padding = {left:40, right:30, top:60, bottom:20};

	//定义一个数组
	var ser_data = { /*请求数据*/
      'csrfmiddlewaretoken': 'RAFAfBHNzbmebeDooNMSs2jrgVcNaAeU',
        'endponit': "/zh-cn/stat/task/app2/cap/intf6/",
        'app_name':'app2',
        'metric': "",
        'search_mode': 'normal',
        'scope':'capture',
        'cap_name':'intf6',
        'earliest': '1457312940.0',
        'latest': '1457313840.0',
        'dim_trans_type': '*',
        'dim_sub_trans_type': '*'
   };
      function time_Format(time){
        var x_Time1 = new Date(time*1000).toLocaleString();
        return(x_Time1);
    }
    var time = [];
    var count = [];
	ser_data.search = 'trans_count';
	d3.json('/zh-cn/stat/task/app2/cap/intf6/')
  		.header("Content-Type", "application/x-www-form-urlencoded")
  		.post("search=rr_rate&endpoint=/zh-cn/stat/task/app2/cap/intf6/&app_name=app2&search_mode=normal&scope=capturer&cap_name=intf6&earliest=1457400519.0&latest=1457407769.0&dim_trans_type=*&dim_sub_trans_type=*&metric=1", function (e, datas) { 
  			if(datas['ok']){
  				function fordata(){
  					d3.json('/zh-cn/stat/task/app2/cap/intf6/' + datas.job_id + '/')
		  				.header("Content-Type", "application/x-www-form-urlencoded")
		  				.post("csrfmiddlewaretoken=RAFAfBHNzbmebeDooNMSs2jrgVcNaAeU", function (e, result) { 
		    				var chart_data = [];
		                  if(result.status.isDone){
		                      clearInterval(state);
		                      var stat_data = result.results;
		                      for(var i=0; i< stat_data.length; i++){
		                          var t = stat_data[i].time;
		                          time.push(time_Format(t));
		                          if(stat_data[i].trans_count){
		                          		count.push(stat_data[i].trans_count);
		                          }else{
		                          		count.push(0);
		                          }
		                      }
		                      createSVG(time,count);
		                  }
		  			})
  				}
  				var state = setInterval(fordata,500);
  				
  			}
  	})
  		debugger;
  	
  function getValues(){
  	var fromDate = d3.select("#fromDate")[0][0].realValue;
  	var endDate = d3.select("#endDate")[0][0].realValue;
  	var fromTime = getTime(fromDate);
  	var endTime = getTime(endDate);
  }
  		
 	function getTime(date){//时间转为毫秒数
 		var time = (new Date(time)).getTime();
 		return time;
 	}

	function createSVG(time,count){
		
		var title = "交易量";
		var str = [];//[ "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月" ];
		var dataset = [];//[4, 6.8, 5, 5, 6.5, 7.2, 3.8, 5.8, 8, 3.9, 2.6, 19.99];
		var optionValue = d3.select("#select_options")[0][0].selectedIndex;
		//x轴
		if(optionValue == 1){//年
			for(var i = 0; i < time.length; i++){
				time[i] = time[i].substr(0,4);
			}
		}else if(optionValue == 2){//月
			for(var i = 0; i < time.length; i++){
				time[i] = time[i].substr(0,6);
			}
		}else if(optionValue == 3){//日
			for(var i = 0; i < time.length; i++){
				time[i] = time[i].substr(0,8);
			}
		}/*else{
			for(var i = 0; i < time.length; i++){
				str.push(time[i]);
			}
		}*/
		if(time.length < 5){
			for(var i = 0; i < 5; i++){
					if(i < 5 - time.length){
						str.push("");
						dataset.push(0);
					}else{
						str.push(time[i - time.length]);
					}
				}
			}else{
				for(var i = 0; i < time.length; i++){
					str.push(time[i]);
				}
			}			
		
		for(var i = 0; i < count.length; i++){
			dataset.push(count[i]);
		}
	
	//添加标题
	if (title != "") {
		svg.append("g")
			.append("text")
			.text(title)
			.attr("x", width / 40)
			.attr("y", pad);
	}
	
	//x轴的比例尺
	var xScale = d3.scale.ordinal()
	    .domain(str)
	 	/*.domain(d3.range(str.length))*/
		.rangeRoundBands([0, width - padding.left - padding.right]);

	//y轴的比例尺
	var yScale = d3.scale.linear()
		.domain([1,d3.max(dataset)])
		.range([height - padding.top - padding.bottom, 0]);
	//定义纵轴网格线
	var yInner = d3.svg.axis()
		.scale(yScale)
		.tickSize(-(width - pad * 2), 0, 0)
		.tickFormat("")
		.orient("left")
		.ticks(8);
	//添加纵轴网格线
	var yBar = svg.append("g")
		.attr("class", "axis")
		.attr("transform", "translate(" + pad * 2 + ",60)")
		.call(yInner);

	//定义x轴
	var xAxis = d3.svg.axis()
		.scale(xScale)
		.orient("bottom");
		
	//定义y轴
	var yAxis = d3.svg.axis()
		.scale(yScale)
		.orient("left");

	//矩形之间的空白
	var rectPadding = 4;
	
	//添加矩形元素
	var rects = svg.selectAll(".MyRect")
		.data(dataset)
		.enter()
		.append("rect")
		.attr("class","MyRect")
		.attr("transform","translate(" + padding.left + "," + padding.top + ")")
		.attr("x", function(d,i){
			return xScale(str[i]) + rectPadding/2;
		} )
		.attr("width", xScale.rangeBand() - rectPadding )
		.attr("y",function(d){
			var min = yScale.domain()[0];
			return yScale(min);
		})
		.attr("height", function(d){
			return 1;
		})
		.transition()
		.delay(function(d,i){
			return i * 200;
		})
		.duration(2000)
		.ease("bounce")
		.attr("y",function(d){
			return yScale(d);
		})
		.attr("height", function(d){
			return height - padding.top - padding.bottom - yScale(d);
		});
		
	//添加文字元素
	/*var texts = svg.selectAll(".MyText")
		.data(dataset)
		.enter()
		.append("text")
		.attr("class","MyText")
		.attr("transform","translate(" + padding.left + "," + padding.top + ")")
		.attr("x", function(d,i){
			return xScale(i) + rectPadding/2;
		} )
		.attr("dx",function(){
			return (xScale.rangeBand() - rectPadding)/2;
		})
		.attr("dy",function(d){
			return 20;
		})
		.text(function(d){
			return d;
		})
		.attr("y",function(d){
			var min = yScale.domain()[0];
			return yScale(min);
		})
		.transition()
		.delay(function(d,i){
			return i * 200;
		})
		.duration(2000)
		.ease("bounce")
		.attr("y",function(d){
			return yScale(d);
		});*/
		
	//添加x轴
	svg.append("g")
		.attr("class","axis")
		.attr("transform","translate(" + padding.left + "," + (height - padding.bottom) + ")")
		.call(xAxis); 
		
	//添加y轴
	svg.append("g")
		.attr("class","axis")
		.attr("transform","translate(" + padding.left + "," + padding.top + ")")
		.call(yAxis);
		
	}
}