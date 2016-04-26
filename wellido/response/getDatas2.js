
var svg;
var bodyX;
//模拟数据
var simulateData = {
    'csrfmiddlewaretoken': 'RAFAfBHNzbmebeDooNMSs2jrgVcNaAeU',
    'search':'rr_rate',
    'endpoint': "/zh-cn/stat/task/app1/cap/intf3/",
    'app_name':'app1',
    'metric': "1",
    'search_mode': 'normal',
    'scope':'capture',
    'cap_name':'intf6',
    'earliest': '1459364640.0',
    'latest': '1459365540.0',
    'dim_trans_type': '*',
    'dim_sub_trans_type': '*'
}

//查询参数接收
var responseData = {};
function reciveData(sendData) {
    responseData.csrfmiddlewaretoken = sendData.csrfmiddlewaretoken;
    responseData.search = sendData.search;
    responseData.endpoint = sendData.endpoint;
    responseData.app_name = sendData.app_name;
    responseData.metric = sendData.metric;
    responseData.app_name = sendData.app_name;
    responseData.search_mode = sendData.search_mode;
    responseData.scope = sendData.scope;
    responseData.cap_name = sendData.cap_name;
    responseData.earliest = sendData.earliest;
    responseData.latest = sendData.latest;
    responseData.dim_trans_type = sendData.dim_trans_type;
    responseData.dim_sub_trans_type = sendData.dim_sub_trans_type;
}
reciveData(simulateData);

//时间格式化
function timeFormat(time){
    var xTime1 = new Date(time*1000).toLocaleString();
    return(xTime1);
}

//画图数据接收
var timeData = [];
responseSrc = "search=" + responseData.search
    + "&endpoint=" + responseData.endpoint
    + "&app_name=" + responseData.app_name
    + "&search_mode=" + responseData.search_mode
    + "&scope=" + responseData.scope
    + "&cap_name=" + responseData.cap_name
    + "&earliest=" + responseData.earliest
    + "&latest=" + responseData.latest
    + "&dim_trans_type=" + responseData.dim_trans_type
    + "&dim_sub_trans_type=" + responseData.dim_sub_trans_type
    + "&metric=" + responseData.metric;
var temporaryData;
d3.json(responseData.endpoint)
    .header("Content-Type", "application/x-www-form-urlencoded")
    .post(responseSrc, function (e, datas) {
        if(datas['ok']) {
            d3.json(responseData.endpoint +  datas.job_id + "/")
                .header("Content-Type", "application/x-www-form-urlencoded")
                .post("csrfmiddlewaretoken=" + responseData.csrfmiddlewaretoken,
                    function(e,result) {
                        if(result.status.isDone) {
                            temporaryData = result.results;
                            for (var i = 0;i < temporaryData.length;i++) {
                                var temporaryTime = timeFormat(temporaryData[i].time);
                                if(temporaryTime.indexOf(" ") >= 0 ){
                                    timeData.push({
                                    'x' : temporaryTime.split(" ")[0],
                                    'y' : temporaryData[i].duration,
                                    'z' : temporaryTime.split(" ")[1],  
                                    });
                                }
                            }
                            paintResponse(timeData);
							//自适应	
							
							window.onresize = function(d){
								svg.remove();
								paintResponse(timeData);
						 }
							
                        }
                    })
        }
    });
    

function paintResponse(timeData) {  
bodyX = document.body.clientWidth;  
var axisNum = timeData.length;
var padding =  150;  //边界值
var axisW =  bodyX - padding - 100;     //坐标轴宽度
var width =  1200;      //SVG宽度
var height =  500;    //SVG高度
var circleR = 3;                              //圆点半径

//存放画图数据
var dataset = [];
var dataset2 = [];
for (var i = 1 ; i <= axisNum ; i++)
{
    dataset.push([i,timeData[i-1].y]);
    dataset2.push({"x" : i, "y" : timeData[i-1].y});
}
var yMax = d3.max(dataset,function(d){return d[1];}); //y轴最大值
var yaxisData = [yMax*(1/3) , yMax*(2/3) , yMax]; //横线y轴坐标

//尺度缩放
var xScale = d3.scale.linear()
    .domain([1,axisNum])
    .range([0,axisW]);
var yScale = d3.scale.linear()
    .domain([0, yMax])
    .range([height - padding, padding]);
var yPoint = d3.scale.linear()
    .domain([0, d3.max(timeData, function(d) { return d.y; })])
    .range([height - padding, padding]);
    
//加入SVG
	svg = d3.select('body')
            .append('svg')
            .attr({
                width : width,
                height : height
            });
    
//加入标轴
var axis = d3.svg.axis()
             .scale(xScale)
             .orient('bottom')
             .ticks(axisNum);
             
function printAxis(d) {
  var g = d3.select(this.parentNode);
  var dateInfo = d3.select(this).html(d.x);
  var hourInfo = g.append('text').html(d.z);
  dateInfo.attr({ dy : 15 });
  hourInfo.attr({dx : -45 ,dy : 40 });
}

var timeDataText = [];
if(axisNum > 10){
    textFlag = parseInt(axisNum/5);
    for(var i = 0 ; i < axisNum ; i++){
        if(i != 0 && i%textFlag == 0)
        {timeDataText.push({"x" : timeData[i].x , "z" : timeData[i].z});}
        else
        {timeDataText.push({"x" : " " , "z" : " "});}
    }
}
else {timeDataText = timeData;}

svg.append('g')
    .attr("class", "axis")
    .attr('transform', 'translate(' + padding + ',' + (height - padding) + ')')
    .call(axis);

d3.selectAll('svg text').data(timeDataText).each(printAxis);

svg.append('line').attr({
    x1: xScale(1) + padding,
    y1: yScale(0),
    x2: xScale(axisNum) + padding,
    y2: yScale(0)
}).style({
    'stroke' : 'darkgray',
    'stroke-width' : 2  
});

//加入路径
var line = d3.svg.line()
    .x(function (d) {
        return xScale(d.x)+ padding;
    })
    .y(function (d) {
        return yPoint(d.y);
    })
    .interpolate('monotone');

var path = svg.append('path')
    .attr('d', line(dataset2))
    .attr({
         'stroke' : 'red',
         'stroke-width' : 1,
         'fill' : 'none'
    });
 
//加入竖线
var vertical = [];
for (var pointNum = 0; pointNum < axisNum; pointNum++) {
    singleVertical = svg.append('line').attr({
                        x1 : xScale(dataset[pointNum][0]) + padding,
                        y1 : yScale(dataset[pointNum][1]),
                        x2 : xScale(dataset[pointNum][0]) + padding,
                        y2 : yScale(0)
                    }).style({
                        'stroke' : 'darkgray',
                        'stroke-width' : 1
                    });
    vertical.push(singleVertical);
} 
if(axisNum > 10){
    textFlag = parseInt(axisNum/5);
    for(var i = 0 ; i < axisNum ; i++){
        if(i == 0 || i%textFlag != 0)
        {vertical[i].style("opacity",0.0);}
    }
}
    
//加入横线
for (var lineNum = 0; lineNum < yaxisData.length; lineNum++) {
    svg.append('line').attr({
        x1: xScale(1) + padding,
        y1: yScale(yaxisData[lineNum]),
        x2: xScale(axisNum) + padding,
        y2: yScale(yaxisData[lineNum])
    }).style({
        'stroke' : 'darkgray',
        'stroke-width' : 1
    });
}

//加入圆点
var circles = [];
for (var pointNum = 0; pointNum < axisNum; pointNum++) {
    singleCircle = svg.append('circle')
                     .attr({
                            cx : xScale(dataset[pointNum][0]) + padding,
                            cy : yScale(dataset[pointNum][1]),
                            r  : circleR 
                        }).style({
                                 "fill" : "white",
                                 "stroke" : "red",
                                 "stroke-width" : 1
                        });
    circles.push(singleCircle);
}
if(axisNum > 10){
    textFlag = parseInt(axisNum/5);
    for(var i = 0 ; i < axisNum ; i++){
        if(i == 0 || i%textFlag != 0)
        {circles[i].style("opacity",0.0);}
    }
}

//加入信息提示框
var orCricleStyle;//临时保存圆圈的style
var orVerticalStroke;//临时保存竖线的颜色
var orVerticalOpacity;//临时保存竖线透明度
var originalNum;//上一次改变的图形号码
var tooltip = d3.select("body")
                     .append("div")
                     .attr("class","tooltip")
                     .style("opacity",0.0);
var intervalX = axisW/(axisNum-1); //每一个刻度值的长度
var intervalX2 = intervalX/2;   //1/2刻度值长度  

svg.on("mousemove",function(d){
    if(d3.event.pageX >= padding&&d3.event.pageX <= padding + axisW&&d3.event.pageY >=padding&&d3.event.pageY <= (height - padding)){
        var mouseX = d3.event.pageX - padding;
        var intervalAxis = mouseX/intervalX;
        var changeNum = parseInt(intervalAxis);
        //存储前一次更改，进行下一次更改
        if(mouseX%intervalX > intervalX2){
            if(orVerticalStroke){
                vertical[originalNum].style('stroke' , orVerticalStroke);
                vertical[originalNum].style('opacity' , orVerticalOpacity);
                circles[originalNum].style('opacity' , orCircleStyle)
                orCircleStyle = circles[changeNum + 1].style('opacity');
                orVerticalStroke = vertical[changeNum + 1].style('stroke');
                orVerticalOpacity = vertical[changeNum + 1].style('opacity');
                originalNum = changeNum + 1;
                vertical[changeNum + 1].style("opacity",1.0);
                vertical[changeNum + 1].style("stroke","red");
                circles[changeNum + 1].style("opacity",1.0);
            }
            else{
                orCircleStyle = circles[changeNum + 1].style('opacity');
                orVerticalStroke = vertical[changeNum + 1].style('stroke');
                orVerticalOpacity = vertical[changeNum + 1].style('opacity');
                originalNum = changeNum + 1;
                vertical[changeNum + 1].style("opacity",1.0);
                vertical[changeNum + 1].style("stroke","red");
                circles[changeNum + 1].style("opacity",1.0);
            }
        }    
        else{
            if(orVerticalStroke){
                vertical[originalNum].style('stroke' , orVerticalStroke);
                vertical[originalNum].style('opacity' , orVerticalOpacity);
                circles[originalNum].style('opacity' , orCircleStyle)
                orCircleStyle = circles[changeNum].style('opacity');
                orVerticalStroke = vertical[changeNum].style('stroke');
                orVerticalOpacity = vertical[changeNum].style('opacity');
                originalNum = changeNum;
                vertical[changeNum].style("opacity",1.0);
                vertical[changeNum].style("stroke","red");
                circles[changeNum].style("opacity",1.0);
            }
            else{
                orCircleStyle = circles[changeNum].style('opacity');
                orVerticalStroke = vertical[changeNum].style('stroke');
                orVerticalOpacity = vertical[changeNum].style('opacity');
                originalNum = changeNum;
                vertical[changeNum].style("opacity",1.0);
                vertical[changeNum].style("stroke","red");
                circles[changeNum ].style("opacity",1.0);
            }
        }
        if(mouseX%intervalX > intervalX2){
            tooltip.html(timeData[parseInt(intervalAxis) + 1].x
                    + " "
                    + timeData[parseInt(intervalAxis) + 1].z
                    + "<br />"
                    + "响应时间："
                    + timeData[parseInt(intervalAxis) + 1].y )
                .style("left", (padding + (parseInt(intervalAxis))*intervalX) + "px")
                .style("top", (d3.event.pageY + 20) + "px")
                .style("opacity",0.8);
        }
        else{
            tooltip.html(timeData[parseInt(intervalAxis)].x
                    + " "
                    + timeData[parseInt(intervalAxis)].z
                    + "<br />"
                    + "响应时间："
                    + timeData[parseInt(intervalAxis)].y )
                .style("left", (padding + (parseInt(intervalAxis))*intervalX) + "px")
                .style("top", (d3.event.pageY + 20) + "px")
                .style("opacity",0.8);
        }
    }
    })
    .on("mouseout",function(d){
        tooltip.style("opacity",0.0);
    });


}
