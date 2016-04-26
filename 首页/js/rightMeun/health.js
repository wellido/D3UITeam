function gethealths(){	
	d3.json('/zh-cn/gethealth/')
		.header("Content-Type", "application/x-www-form-urlencoded")
		.post("", function(e, data) {
			if(data.error == 0){
				var totalhealth = 0;
				var titles = [];
				var healths = [];
				if(data.health.apps != ''){
					totalhealth = (data.health.health).toFixed(0);
					for(var i=0; i < data.health.apps.length; i++){
						var app = data.health.apps[i];
						titles.push(app.disp_name);
						if(app.health > 0){
							healths.push((app.health).toFixed(0));
						}else{
							healths.push('--');
						}
					}
				}else{
					totalhealth = "--";
				}				
				parseHealths(totalhealth, titles, healths);
			}
			setTimeout( gethealths,60000);
		});
}

function loadHealthDiv(){
	health = d3.select('.indexHealth')
		.append('div')
		.attr('class','health_a_div');
	var healthPoints = health.append('a')
		.attr('class','all_to_hea')
		.attr('href','#');
	healthPoints.append("span")
		    	.attr("class","hp-health")
		   		.html("健康度");
	var r = 40;
	var updateFunctions = ["health_phone1"];
	healthPoints.append("span")
		.attr("class","hp-number")
		.attr("id", "totalHealth")
    	.html("--");
    healthPoints.append("lable")
     	.style("margin-left","8px")
     	.html("分");
    
    var dashboard = health.append("span");
    
    for (var i=0;i < updateFunctions.length;i++) {
    	clock(dashboard, r, updateFunctions[i]);
    }
	
    setInterval(function(){
    	update_now(updateFunctions);
    }, 1000);
    
    var hr = health.append("hr");
    
    var hea_table = health.append('div')
    	.attr('class','health_div')
    	.attr('id','listHealthDiv');
    
}
    

function parseHealths(totalhealth, titles, healths){
	d3.select("#totalHealth").html(getHealthColor(totalhealth));
	var hea_info = d3.select("#listHealthDiv").html("").append('table')
    	.attr('class','table');
    for(var i=0; i < titles.length; i++){
    	var table_online = hea_info.append('tr');
	    table_online.append('td').html(titles[i]);
	    var healthTD = table_online.append('td');
	    healthTD.append('span').html(getHealthColor(healths[i]));
	    if(healths[i] > 0){
	    	healthTD.append('span').html("分");
	    }
	} 
}

function getHealthColor(item){	
	var colors = ["#ec9333","green","red", "white"];
	if(item < 60){
			return '<lable style="color:' + colors[2] + ';" >' + item + '</lable>';
	}else if(item < 90){
		return '<lable style="color:' + colors[0] + ';" >' + item + '</lable>';
	}else if(item <= 100){
		return '<lable style="color:' + colors[1] + ';" >' + item + '</lable>';
	}else if(item == "--"){
		return '<lable style="color:' + colors[3] + ';" >' + item + '</lable>';
	}
}
