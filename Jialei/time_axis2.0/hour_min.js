function hour_min (container){  

//var tdc=[];// temp delect
		//var tds=[];//  
		
		var temp2=1500;
    	var width = 1280; //画布的x y
	    var height = 1000;
        var temp;    //变色时储存颜色的临时变量
		var set = 10;  //初始时数字里边框的距离
		var num_y = 17.5;  //数字的高低
	    var rect_width = 52.0; //小时时间轴  每小时的宽度
	    var rect_height = 25; //小时时间轴  每小时的高度
		var rect_y = 10;
		
		var min_height = 47; //
		var min_width = 20.9;
		var r = 5 ;  




		
        var svg  = d3.select("body").append("svg")
	               .attr("width",width)
				   .attr("height",height);
	    
		svg.append("rect").attr("width",width).attr("height",height).style("fill","black");//设置背景色
		
		svg.style("fill","black");
	    svg.append("rect").attr("width",rect_width*24).attr("height",rect_height)
		   .attr("stroke","#303030").attr("stroke-width","4").style("fill","black").attr("y",rect_y);
		
		for (var i=0;i<24;i++){  //生成小时时间轴
	  
	     tds[i]= svg.append("rect")
		   .attr("width",rect_width)
		   .attr("height",rect_height)
		   .attr("fill","#5e84c9")
		   .attr("value",i)
		   .attr("id","hour")
                    .attr("x",i*rect_width)
					.attr("y",rect_y);
          svg.append("text")
            .attr("x",set+i*rect_width)
			.attr("y",num_y+rect_y)
            .style("fill","#c3c8d1")
			.style("font-size","x")
			.text(i);			
	    }
		
        d3.selectAll("#hour")//小时时间轴的动态显示
                .on("mouseover",function(d,i){  
                temp = d3.select(this).style("fill");
                d3.select(this)  
                  .style("fill","#475A7D");  
                 })
               .on("mouseout",function(d,i){  
                d3.select(this)  
                  .style("fill",temp);  
                })     
                 .on("click",function(d){  
        
                    var select_hour = d3.select(this);
                    Hour = select_hour.attr('value');
                    alert( Hour );
					Time = (new Date(Year,Month,Day,Hour,Min)).getTime();
					Time = Time/1000;
                    alert(Time);
                    GetData(Time);      
                
        });	
		
        for(var i =0;i<60;i++){ //生成分钟轴
		
		
		    if (i%5==0){
			
			tdc[i] = svg.append("image")
			    .attr("xlink:href","img/blueleaf.svg")
				.attr("id","leaf")
				.attr("value",i)
				.attr("x",i*min_width).attr("y",min_height)
				.attr("height","20px").attr("width","20px");
			  
			  svg.append("text")
                .attr("x",4+i*min_width)
			    .attr("y",min_height*2)
                .style("fill","#c3c8d1")
			    .style("font-size","x")
			    .text(i);	
			  
			}
		    else {
			
			 tdc[i] = svg.append("circle")
			    .attr("cx",10+i*min_width).attr("cy",min_height+10)
				.attr("r",r)
				.attr("value",i)
				.attr("id","cir")
			    .style("fill","#5e84c9")
				.attr("stroke","white")
				.attr("stroke-width","2*temp2");
			}
		}
		
	    d3.selectAll("#leaf")        //树叶的动态显示
          .on("mouseover",function(d){  
        
		    temp = d3.select(this).attr("xlink:href");
        
            var over = d3.select(this)
            over.attr("xlink:href","img/grayleaf.svg");  
        
          })
          .on("mouseout",function(d){  
          var out = d3.select(this)  
          out.attr("xlink:href",temp);  
          }) 
          .on("click",function(d){  
             //min = d3.select(this)  
          var select_min = d3.select(this);
            //select_min.onchange = function(){
            Min = select_min.attr("value");
            alert( Min );
            Time = (new Date(Year,Month,Day,Hour,Min)).getTime();
            
            Time = Time/1000;
            alert(Time);
            GetData(Time);            
          });
		
		
		d3.selectAll("#cir")        //圆形的动态显示
          .on("mouseover",function(d){  
        
		    temp = d3.select(this).style("fill");
        
            var over = d3.select(this)
            over.style("fill","#475A7D");  
        
          })
          .on("mouseout",function(d){  
          var out = d3.select(this)  
          out.style("fill",temp);  
          }) 
          .on("click",function(d){  
             //min = d3.select(this)  
          var select_min = d3.select(this);
            //select_min.onchange = function(){
            Min = select_min.attr("value");
            alert( Min );
            Time = (new Date(Year,Month,Day,Hour,Min)).getTime();
            
            Time = Time/1000;
            alert(Time);
            GetData(Time);            
          });

}