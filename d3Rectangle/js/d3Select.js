function d3select(){
	testBusiness = ['请选择','网银','中行','中行']; 
	unit = ["","year", "month", "week"];
	d3.select('body').html('');
        var divBoxs = d3.select("body")
	     .append("div")
	     .attr("class","div-box");
	
	var selectd3 = divBoxs.append("select")
	    .attr("id","select_business")
	    .attr("class","select-bg");
//	  	.attr("onChange","getNewResults()");
	var business = selectd3.selectAll("option") 
	    .data(testBusiness); 
	    business.enter()
	    .append("option") 
	    .attr("value", function(d, i) { 
	    	return i; 
	    }) 
	    .text(function(d, i) { 
	    	console.log(' ? ' + d );
	    	return d; 
	    });
	    
	testoptions = ['请选择','/年','/月','/周']; 
	
	var selectd4 = divBoxs.append("select")
		.attr("id","select_options")
	    .attr("class","select-bg")
	    .attr("onChange","changeDateFormat()");
	var options = selectd4.selectAll("option") 
	    .data(testoptions); 
	    options.enter()
	    .append("option") 
	    .attr("value", function(d, i) { 
	    	return unit[i]; 
	    }) 
	    .text(function(d, i) { 
	    	console.log(' ? ' + d );
	    	return d; 
	    });
	    
	divBoxs.append("div")
	 	.attr("id","dateSelect");
	changeDateFormat();
	 
}

function changeDateFormat(){
	var optionValue = (d3.select("#select_options")[0][0].selectedOptions)[0].value;
	var dateSelect = d3.select("#dateSelect").html('');
	dateSelect.append("input")//开始 年、月、日、时  
		.attr("id","fromDate")
		.attr("type","text")
	  	.attr("class","combo-text")
	  	.attr("class","validatebox-text")
	  	.attr("onChange","getNewResults()");
	dateSelect.append("lable")//中间分隔线
		.attr("class","lab-Line");
	dateSelect.append("input")//结束 年、月、日、时
		.attr("id","endDate")
		.attr("type","text")
	  	.attr("class","combo-text")
	  	.attr("class","validatebox-text")
	  	.attr("onChange","getNewResults()");
	if(optionValue == "year"){//年
		dateSelect.select("#fromDate").attr("onFocus","WdatePicker({lang:'zh-cn',dateFmt:'yyyy'})");
		dateSelect.select("#endDate").attr("onFocus","WdatePicker({lang:'zh-cn',dateFmt:'yyyy'})");
	}else if(optionValue == "month"){//月
		dateSelect.select("#fromDate").attr("onFocus","WdatePicker({lang:'zh-cn',dateFmt:'yyyy-MM'})");
		dateSelect.select("#endDate").attr("onFocus","WdatePicker({lang:'zh-cn',dateFmt:'yyyy-MM'})");
	}else if(optionValue == "week"){//日
		dateSelect.select("#fromDate").attr("onFocus","WdatePicker({lang:'zh-cn',dateFmt:'yyyy-MM-dd'})");
		dateSelect.select("#endDate").attr("onFocus","WdatePicker({lang:'zh-cn',dateFmt:'yyyy-MM-dd'})");
	}else{
		dateSelect.select("#fromDate").attr("onFocus","WdatePicker({lang:'zh-cn',dateFmt:'yyyy-MM-dd HH'})");
		dateSelect.select("#endDate").attr("onFocus","WdatePicker({lang:'zh-cn',dateFmt:'yyyy-MM-dd HH'})");
	}
}
//function getNewResults() {
//		var select_business = d3.select("#select_business")[0][0].selectedIndex;
//		debugger;
//		var select_options = d3.select("#select_options")[0][0].selectedIndex;
//		var fromDate = d3.select("#fromDate")[0][0].realValue;
//		var endDate = d3.select("#endDate")[0][0].realValue;
//		if (select_business <= 0 || select_options <= 0 || fromDate == null || fromDate == "" || endDate == null || endDate == "") {
//			alert("请选择相应参数");
//			return false;
//		} else {
//			load_js('js/dataRectangle.js',function(){
//				var earliest2 = 
//				var svg = d3.select("#svg")[0][0];
//				svg.remove();
//				rectangle_box(earliest, latest, dim_trans_type, dim_sub_trans_type, metric);
//			})
//		}
//	}

