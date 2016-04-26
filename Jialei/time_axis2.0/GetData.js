function GetData(time){          //时间轴的API调用方法

        d3.json("/zh-cn/timeaxis/app1/timeline/?csrfmiddlewaretoken=JYAbCFS64m5qUKJ4SN0XCCJ3OMkPZ5wC&ts=" + time + "")
            .header("Content-Type", "application/x-www-form-urlencoded")
            .get(timeTest,function(e,data){
            timeTest = data;
			
            //alert(timeTest.hour);
             //alert(6);
             var myDate1 = new Date();
            var Year1 = myDate.getFullYear();
            var Month1 = myDate.getMonth();
            var Day1 = myDate.getDate();
            var Hour1 = myDate.getHours();
            //alert(Hour);
            var Min1 = myDate.getMinutes();
            timenow = ( new Date(Year1,Month1,Day1,Hour1,Min1)).getTime();
            timenow = timenow/1000;
            
            for (var i = 0 ; i < 24 ; i ++){
               var  temphours = (new Date(Year,Month,Day,i,0)).getTime();
				temphours = temphours/1000;
                HourArr[i] = timeTest.hour[i];
				 tds[i].style("fill","#5e84c9"); 
                
                if(HourArr[i].has_alert == true ){
                    
                    tds[i].style("fill","#b10d0d");
                    
                }
                else if ( timenow <=  temphours ){
                    
                    tds[i].style("fill","black");
                    
                }
                else if(HourArr[i].has_located_alert == true ){
                    
                    tds[i].style("fill","#b4a817");
                    
                }
				else if(HourArr[i].has_data == false ){
                    
                    tds[i].style("fill","#303030");
                    
                }
                
                
                
            }
            for (var i = 0 ; i < 60 ; i ++){
                
                MinArr[i] = timeTest.minute[i]
				tempminutes =  (new Date(Year,Month,Day,Hour,i)).getTime();
				tempminutes= tempminutes/1000;
				if(i%5 == 0){
					
					tdc[i].attr("xlink:href","img/blueleaf.svg")
					
				}else {
					
					tdc[i].style("fill","#5e84c9");
					
				}
				
                
                if(MinArr[i].has_alert == true ){
                    
                    if(i%5 == 0){
                        
                        tdc[i].attr("xlink:href","img/redleaf.svg");
                    
                    }
                    else{
                        
                        tdc[i].style("fill","#b10d0d");
                        
                    }
                    
                }
				
				
				else if ( timenow <= tempminutes ){
                    
                    if(i%5 == 0){
                        
                        tdc[i].attr("xlink:href","img/noleaf.svg");
                        //lert(tdc[i]);
                    }
                    else{
                        
                        tdc[i].style("fill","black");
                        
                    }
                    
                }
				
				else if(MinArr[i].has_data == false ){
                    
                    if(i%5 == 0){
                        
                        tdc[i].attr("xlink:href","img/grayleaf.svg");
                    
                    }
                    else{
                        
                        tdc[i].style("fill","#303030");
                        
                    }
                    
                }
                
				
                else if(MinArr[i].has_located_alert == true ){
                    
                    if(i%5 == 0){
                        
                        tdc[i].attr("xlink:href","img/yellowleaf.svg");
                    
                    }
                    else{
                        
                        tdc[i].style("fill","#b4a817");
                        
                    }
                    
                }
                
                
            }
			
			
			
            
            
            //alert(HourArr[1].end);
        })
		
		d3.json("/zh-cn/mapdata/")//?csrfmiddlewaretoken=kCY1ugYXCoJXNLxJ0GUpyqWbXqDxpI6k&app_name=app1&intf=intf3&earliest=" + time + "")  
            .header("Content-Type", "application/x-www-form-urlencoded")
			.post("csrfmiddlewaretoken=PqZYshripDxiNjIF4XQrsGJgtNKvUIOh&app_name=app1&intf=intf3&earliest=" + time + "",function(e,data){
				if(data.ll_data){
					//alert("success");
					//changeUrl_map("银联", data.ll_data,"银联");
				}
			});
}