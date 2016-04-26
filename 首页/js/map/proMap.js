  function proMap(container,id,coordinates){

  
  var rect1 = container.node().getBoundingClientRect();
  var w= 300;
  var h = 600;
	coordinates=centerbox(coordinates,id);
	var scale = scalebox(id);
	//console.log(scale);
    var svg = container.append('svg')
	.attr('id','prosvg')
    .attr('width', w)
	.attr('height', h)
	//.style('display','none')
	.attr('preserveAspectRatio', 'xMidYMid')
	.attr('viewBox', '0 0 ' + w + ' ' + h);
    var projection = d3.geo.mercator()  
      .center(coordinates)  
      .scale(scale) 
      //.translate([width/2, height/2]);  
	var path = d3.geo.path()  
      .projection(projection);  
    
	function zoom_out() {
      d3.select('#province').style('display','none');
      d3.select('#prosvg').remove();
      //d3.select('#g1').transition().duration(1000).attr('transform', 'scale(740)');
      //d3.select('#g2').duration(1000).attr('transform', 'scale(740)');
    }
    
	d3.json('mapjson/'+id+'.json', function (e, d) {
      if(!e) {
		
		var rect = svg.append('rect')
		.attr('width', w)
	    .attr('height', h)
		.attr('fill','black')
		 .on('click', function(d) { zoom_out(); });     

         console.log(d.features);  
        //var svg  = d3.select('body').append('div').append('svg')
        //.attr('width', '1000')
	    //.attr('height', '1000')	
        svg.selectAll("path")  
            .data( d.features )  
            .enter()  
            .append("path")  
            .attr("stroke",'rgb(65, 100, 158)')  
            .attr("stroke-width",2)  
            .attr("fill", 'rgb(50, 85, 142)')  
            .attr("d", path )  
            .on("mouseover",function(d,i){  
                d3.select(this)  
                    .attr("fill",'rgb(50, 85, 142)');  
            })  
            .on("mouseout",function(d,i){  
                d3.select(this)  
                    .attr("fill",'rgb(50, 85, 142)');  
            });  
          

        
		} 	   
	   
      });
	  
    }
	
	