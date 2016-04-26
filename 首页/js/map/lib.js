function map(container, data) {
  var rect = container.node().getBoundingClientRect();
  var w=rect.width;//获得外部div的xy
  var h = rect.height;
  container.style("position" , "relative")//设置相对定位 使两个子div能重合
  
  
  
  var countryDiv=container.append('div').attr('id','country');//国家地图


 
  var svg = countryDiv.append('svg')
    .attr('width', w)
	.attr('height', h)
	//.style('display','none')
	.attr('preserveAspectRatio', 'xMidYMid')
	.attr('viewBox', '0 0 ' + w + ' ' + h);
  var g1 = svg.append('g');
  var g2 = g1.append('g').attr('id','map_g'); 
  var dx = svg.attr('width') / 4;  
  var dy = svg.attr('height') / 4;
  console.log(dx);  
	var provinceDiv = container.append('div').attr('id','province'); //省级地图	
        provinceDiv.style('display','none')
    .style("position" , "absolute")
	.style("left" ,"0px")
	.style("top" , "0px")
    .attr('width', w)
	.attr('height', h)
 // var svg2 = provinceDiv.append('svg');

/****************************************************************/	

  map_data = data;  //在国家DIV里生成地图
  projection = d3.geo.mercator()
    .center([110,41])
    .scale(h*6);

  var path = d3.geo.path()
    .projection(projection);

  g2.selectAll('path')
    .data(data.features)
    .enter()
    .append('path')
    .attr('d', path)
    .attr('id', function(d) { return d.id; })
    .attr('fill', 'rgb(50, 85, 142)')//rgb(50, 85, 142)
    .attr('stroke', 'rgb(65, 100, 158)')//rgb(65, 100, 158)
    .attr('stroke-width', '2')
    .on('click', function(d) { zoom_in(d.id,d.properties.cp)});
	
/*******两个地图之间的切换function*********************************************/
	
  
  function zoom_out() {
    provinceDiv.style('display','none');
    d3.select('#prosvg').remove();
    g1.transition().duration(1000).attr('transform', 'scale(1)');
    g2.transition().duration(1000).attr('transform', 'scale(1)');
  }
  	
  function zoom_in(id,coordinates) {
    g1.transition().duration(1000).attr('transform', 'scale(2)');
	temp=projection(coordinates);
    g2.transition().duration(1000).attr('transform', 'translate(' + (dx-temp[0]) + ',' + (dy-temp[1]) + ')');
	console.log(id);
	
	//alert(id);
	
    setTimeout(function(){provinceDiv.style('display','block');}, 800);
    
	proMap(provinceDiv,id,coordinates);
    
    
  }

/********************让地图获取数据的方法********************************************/
  
  function getData() {
	  

    d3.json("js/map/mapdata.json", function (e, d) {
    //console.log(e, d);
      if(!e) {
	    data = d;
	    
	    g2.selectAll('cicrcle')
        .data(data.ll_data)
        .enter()
        .append('circle')
	    .attr('id',d.c)
        .attr('r', function (d){
		  return (d.trans_count-130)*0.2;
	    })
		.style("opacity",0.3)
        .attr('fill', 'white') 
        .attr('transform', function (d) {
		  var temp={ 'cp':[Number(d.d.longitude),Number(d.d.latitude)]};
		
          return 'translate('+ projection(temp.cp)+ ')';
		  console.log(projection(temp.cp));
        }) 

	
	
	  }
    });
  }
/*****************生成省级地图的function****************************************************/  
  
  function proMap(container,id,coordinates){
    coordinates=centerbox(coordinates,id);
	var scale = scalebox(id);
	console.log(scale);
    var svg = container.append('svg')
	.attr('id','prosvg')
    .attr('width', w)
	.attr('height', h)
	//.style('display','none')
	.attr('preserveAspectRatio', 'xMidYMid')
	.attr('viewBox', '0 0 ' + w + ' ' + h);
    var projection = d3.geo.mercator()  
      .center(coordinates)  
      .scale(scale*3.555) 
      //.translate([width/2, height/2]);  
	var path = d3.geo.path()  
      .projection(projection);  

    d3.json('js/map/mapjson/'+id+'.json', function (e, d) {
      if(!e) {
		
		var rect = svg.append('rect')
		.attr('width', w)
	    .attr('height', h)
		.attr('fill','black')
		//.style("opacity",0)
		 .on('click', function(d) { zoom_out(); });     

         console.log(d.features);  
        //var svg  = d3.select('body').append('div').append('svg')
        //.attr('width', '1000')
	    //.attr('height', '1000')	
        svg.selectAll("path")  
            .data( d.features )  
            .enter()  
            .append("path")  
            .attr("stroke",'rgb(65, 100, 158)')  //rgb(65, 100, 158)
            .attr("stroke-width",2)  
            .attr("fill", ' rgb(50, 85, 142)') // rgb(50, 85, 142)
            .attr("d", path )  
            .on("mouseover",function(d,i){  
                d3.select(this)  
                    .attr("fill",' rgb(50, 85, 142)');  
            })  
            .on("mouseout",function(d,i){  
                d3.select(this)  
                    .attr("fill",' rgb(50, 85, 142)');  
            });  
          svg.selectAll('circle')
            .data(d.features)
            .enter()
            .append('circle')
            .attr('r', '12')
			.style("opacity",0.3)
            .attr('fill', 'red')
            .attr('transform', function (d) {
              return 'translate(' + projection(d.properties.cp) + ')';
            }) 
        
		} 	   
	   
      });
	  
    }
/********地图放大缩小*************************************************************/	

  var zoom = d3.behavior.zoom()  
    .scaleExtent([1, 10])  
    .on("zoom", zoomed);  
  
  function zoomed() {  
    d3.selectAll('#map_g').attr("transform",   
      "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");  
  }  
  d3.selectAll('#map_g').call(zoom);

/***********显示各省信息**********************************************************/	
  //function infomationbox(container){
    var tooltip = container
    .append("div")   
    .style("opacity",0.0)
    .style("position","absolute")
    .style("width","auto")
    .style("height","auto")
    .style("font-family","simsun")
    .style("font-size","14px")
    .style("text-align","center")
    .style("border-style","solid")
    .style("border-width","1px")
    .style("background-color","gray")
    .style("border-radius","5px")
	.style("z-index","1");
    d3.selectAll('path')
	.on("mouseover",function(d){  

    })  
    .on("mousemove",function(d){  
    /* 鼠标移动时，更改样式 left 和 top 来改变提示框的位置 */  
      tooltip.html(d.properties.name) 
		.style("left", (d3.event.pageX ) + "px")  
        .style("top", (d3.event.pageY )  + "px")
		.style("opacity",1.0); 		
		console.log(d3.event.pageX + ',' + d3.event.pageY);
    })  
    .on("mouseout",function(d){  
    /* 鼠标移出时，将透明度设定为0.0（完全透明）*/  
      tooltip.style("opacity",0.0);  
    })
  //}
/*********************************************************************/		
	
	
/*********************************************************************/	
	getData();

}
	
