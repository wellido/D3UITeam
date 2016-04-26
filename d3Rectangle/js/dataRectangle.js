function trans_count_chart() {
	var earliest = 1457400519.0;
	var latest = 1457407769.0;
	var dim_trans_type = '*';
	var dim_sub_trans_type = '*';
	var metric = 1;
	rectangle_box(earliest, (new Date().getTime())/1000, dim_trans_type, dim_sub_trans_type, metric, "year");
}

function getNewResults() {
		var select_business = d3.select("#select_business")[0][0].selectedIndex;
		var select_options = d3.select("#select_options")[0][0].selectedIndex;
		var optionValue = (d3.select("#select_options")[0][0].selectedOptions)[0].value;
		var fromDate = d3.select("#fromDate")[0][0].realValue;
		var endDate = d3.select("#endDate")[0][0].realValue;
		if (select_business <= 0 || select_options <= 0 || fromDate == null || fromDate == "" || endDate == null || endDate == "") {
			return false;
		} else {
			if(optionValue == "" || optionValue == null || optionValue == "undefined"){
				optionValue = "year";
			}
			load_js('js/dataRectangle.js',function(){
				var svg = d3.select("#svg")[0][0];
				if(svg == null){
					rectangle_box((new Date().getTime())/1000 - 2000, (new Date().getTime())/1000, '*', '*', 1, optionValue);
				}else{
					svg.remove();
					rectangle_box(((new Date(fromDate)).getTime())/1000, ((new Date(endDate)).getTime())/1000, '*', '*', 1, optionValue);
				}
				
			})
		}
	}

function time_Format(time) {
	var x_Time1 = new Date(time * 1000).toLocaleString();
	return (x_Time1);
}
var state = null;
function rectangle_box(earliest, latest, dim_trans_type, dim_sub_trans_type, metric, units) {
	if(state != null){
		clearInterval(state);		
	}
	var app_name = "app1";
	var cap_name = "intf3";
	var earliest ="1459336740.0";
	var latest = "1459337640.0";
	var csrf_token ="whOXjXHNQpOsiuIi4O9e8lUcfq2kFpIL";
	//定义一个数组
	var ser_data = { /*请求数据*/
		'csrfmiddlewaretoken': csrf_token,
		'endponit': "/zh-cn/stat/task/"+ app_name +"/cap/"+ cap_name +"/",
		'app_name': app_name,
		'metric': "",
		'search_mode': 'normal',
		'scope': 'capture',
		'cap_name': cap_name,
		'earliest': earliest,
		'latest': latest,
		'dim_trans_type': '*',
		'dim_sub_trans_type': '*'
	};

	
	var time = [];
	var count = [];
	ser_data.search = 'trans_count';
	d3.json(ser_data.endponit)
		.header("Content-Type", "application/x-www-form-urlencoded")
		.post("unit="+ units +
			  "&search=" + ser_data.search +
			  "&endpoint=" + ser_data.endpoint +
			  "&app_name=" + ser_data.app_name +
			  "&search_mode=" + ser_data.search_mode +
			  "&scope=" + ser_data.scope +
			  "&cap_name=" + ser_data.cap_name +
			  "&earliest=" + earliest + 
			  "&latest=" + latest + 
			  "&dim_trans_type=" + dim_trans_type + 
			  "&dim_sub_trans_type=" + dim_sub_trans_type + 
			  "&metric=" + metric, function(e, datas) {
			if (datas['ok']) {
				function fordata() {
					d3.json(ser_data.endponit + '/' + datas.job_id + '/')
						.header("Content-Type", "application/x-www-form-urlencoded")
						.post("csrfmiddlewaretoken=RAFAfBHNzbmebeDooNMSs2jrgVcNaAeU", function(e, result) {
							var chart_data = [];
							if (result.status != null && result.status.isDone) {
								clearInterval(state);
								var stat_data = result.results;
								for (var i = 0; i < stat_data.length; i++) {
									var t = stat_data[i].time;
									time.push(time_Format(t));
									if (stat_data[i].trans_count) {
										count.push(stat_data[i].trans_count);
									} else {
										count.push(0);
									}
								}
								createSVG(time, count);
							}
						})
				}
				state = setInterval(fordata, 1000);

			}
		})

	function getValues() {
		var fromDate = d3.select("#fromDate")[0][0].realValue;
		var endDate = d3.select("#endDate")[0][0].realValue;
		var fromTime = getTime(fromDate);
		var endTime = getTime(endDate);
	}

	function getTime(date) { //时间转为毫秒数
		var time = (new Date(time)).getTime();
		return time;
	}
	
	function getFunllString(value){//定义成两位数
		if(value < 10){
			return "0" + value;
		}else{
			return value;
		}
	}

	function createSVG(time, count) {
		//网页可见区域宽高
		var bodyX = document.body.clientWidth;
	    var bodyY = document.body.clientHeight;
	    //var padding = bodyX/20;//X边界值
	    //var paddingY = bodyY/15; //Y边界值
		var axisW = bodyX - padding - 100;//坐标轴宽度
		var width = bodyX - padding;//SVG宽度
		var height = bodyY - padding;//SVG高度
		//画布大小
		/*var width = 800;
		var height = 400;*/
		var width = bodyX - 100;
		var height = bodyY - 100;
		var pad = 20; //标题y轴位置
	
		//在 body 里添加一个 SVG 画布	
		var svg = d3.select("#svg")[0][0];
	
		if(svg != null){
			svg.remove();
		}else{
			svg = d3.select("body")
				.append("svg")
				.attr("id", "svg")
				.attr("width", width)
				.attr("height", height);
		}
	
	
		//画布周边的空白
		var padding = {
			left: 60,
			right: 30,
			top: 60,
			bottom: 20
		};

		var title = "交易量";
		var str = []; //[ "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月" ];
		var dataset = []; //[4, 6.8, 5, 5, 6.5, 7.2, 3.8, 5.8, 8, 3.9, 2.6, 19.99];
		var optionValue = (d3.select("#select_options")[0][0].selectedOptions)[0].value;
		//x轴
//		var time_2 = [];
		if (optionValue == "year" || optionValue == "") { //年
			for (var i = 0; i < time.length; i++) {
				var values = time[i].replace(" ","/").split("/");//拆分时间字符串
				str.push(values[0]);//取适合的时间段
			}
		} else if (optionValue == "month") { //月
			for (var i = 0; i < time.length; i++) {
				var values = time[i].replace(" ","/").split("/");
				str.push(values[0] + "/" + getFunllString(values[1]));
			}
		} else if (optionValue == "week") { //周
			for (var i = 0; i < time.length; i++) {				
				var values = time[i].replace(" ","/").split("/");
				str.push(values[0] + "/" + getFunllString(values[1]) + "/" + getFunllString(values[2]));
			}
		}
    
//  str = time;
		for (var i = 0; i < count.length; i++) {
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
			.domain([1, d3.max(dataset)])
			.range([height - padding.top - padding.bottom, 0]);
		//定义纵轴网格线
		var yInner = d3.svg.axis()
			.scale(yScale)
			.tickSize(-(width - pad * 3), 0, 0)
			.tickFormat("")
			.orient("left")
			.ticks(8);
		//添加纵轴网格线
		var yBar = svg.append("g")
			.attr("class", "axis")
			.attr("transform", "translate(" + pad * 3 + ",60)")
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
		
		//添加提示元素
		var tooltip = d3.select("body")
		    .append("div")
		    .attr("class","tooltip")
		    .style("opacity","0.0");

		//添加矩形元素
		var rects = svg.selectAll(".MyRect")
			.data(dataset)
			.enter()
			.append("rect")
			.on("mouseover",function(d,i){
				tooltip.html(
				    str[i]
				    + "<br/>"
					+ "交易量: "
					+ d +"(笔)"
				)
	               .style("left", d3.event.pageX + "px")
	               .style("top", (d3.event.pageY + 20) + "px")
	               .style("opacity",0.8);
			})
			.on("mousemove",function(){
			    tooltip.style("left", d3.event.pageX + "px")
	                   .style("top", (d3.event.pageY + 20) + "px")
			})
			.on("mouseout",function(){
				tooltip.style("opacity",0.0);
			})
			.attr("class", "MyRect")
			.attr("transform", "translate(" + padding.left + "," + padding.top + ")")
			.attr("x", function(d, i) {
				return xScale(str[i]) + rectPadding / 2;
			})
			.attr("width", function(){
				if((xScale.rangeBand() - rectPadding) < 1){
					return 1;
				}else{
					return xScale.rangeBand() - rectPadding;
				}
			})
			.attr("y", function(d) {
				var min = yScale.domain()[0];
				return yScale(min);
			})
			.attr("height", function(d) {
				return 0;
			})
			.transition()
			.delay(function(d, i) {
				return i * 200;
			})
			.duration(2000)
			.ease("bounce")
			.attr("y", function(d) {
				return yScale(d);
			})
			.attr("height", function(d) {
				if((height - padding.top - padding.bottom - yScale(d)) < 0){
					return 0;
				}else{
					return height - padding.top - padding.bottom - yScale(d);
				}
			});

		//添加x轴
		svg.append("g")
			.attr("class", "axis")
			.attr("transform", "translate(" + padding.left + "," + (height - padding.bottom) + ")")
			.call(xAxis);

		//添加y轴
		svg.append("g")
			.attr("class", "axis")
			.attr("transform", "translate(" + padding.left + "," + padding.top + ")")
			.call(yAxis);
        
        //自适应
	window.onresize = function(d){
	     svg.remove();
	     tooltip.remove();
	     createSVG(time, count);
	 }
	}
}