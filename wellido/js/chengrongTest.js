function time_Format(time){
        var x_Time1 = new Date(time*1000).toLocaleString();
        return(x_Time1);
    }
var stat_data;
    var time = [];
    var count = [];
	d3.json('/zh-cn/stat/task/app2/cap/intf6/')
  		.header("Content-Type", "application/x-www-form-urlencoded")
  		.post("search=rr_rate&endpoint=/zh-cn/stat/task/app2/cap/intf6/&app_name=app2&search_mode=normal&scope=capturer&cap_name=intf6&earliest=1457407519.0&latest=1457407769.0&dim_trans_type=*&dim_sub_trans_type=*&metric=1", function (e, datas) { 
  			if(datas['ok']){
  				d3.json('/zh-cn/stat/task/app2/cap/intf6/' + datas.job_id + '/')
  				.header("Content-Type", "application/x-www-form-urlencoded")
  				.post("csrfmiddlewaretoken=RAFAfBHNzbmebeDooNMSs2jrgVcNaAeU", function (e, result) { 
    				var chart_data = [];
                  if(result.status.isDone){
                      stat_data = result.results;
                      for(var i=0; i< stat_data.length; i++){
                          var t = stat_data[i].time;
                          time.push(time_Format(t));
                          count.push(stat_data[i].trans_count);
                      }
                 
                  }
  			})
  			}
  	});