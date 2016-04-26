var x = [];
var y = [];
var svg = [];
function cpu(container1, size, width, height, svgNum) {
    x[svgNum] = [];
    y[svgNum] = [];
    var margin = {top: 5, right: 5, bottom: 5, left: 5};
    divs[svgNum] = container1.append('div').style({
        'position': 'absolute',
        'width': size[0] + 'px',
        'height': size[1] + 'px',
        'left': size[2] + 'px',
        'top': size[3] + 'px',
        'z-index': '1'

    });
    var formatAsPercentage = d3.format("f");
    width = width;
    height = height;

    x[svgNum][0] = d3.scale.linear()
        .domain([60, 0])
        .range([0, width]);

    y[svgNum][0] = d3.scale.linear()
        .domain([0, 100])
        .range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(x[svgNum][0])
        .orient("bottom")
        .ticks(10)
        .tickSize(-height);

    var yAxis = d3.svg.axis()
        .scale(y[svgNum][0])
        .orient("right")
        .ticks(5)
        .tickSize(-width)
        .tickFormat(formatAsPercentage);

    var tSvg = divs[svgNum].append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
        .style({
            'position': 'absolute',
            'left': size[2] + 'px',
            'top': size[3] + 'px'
        });


    tSvg.append("rect")
        .attr("width", width)
        .attr("height", height);

    tSvg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    tSvg.append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(" + width + ",0)")
        .call(yAxis);


    svg[svgNum] = tSvg;
    divs[svgNum].style({
        "opacity": 0.0,
        'z-index': '0'
    });


}

//画图
var timeIndex = [0, 0];
var cpuPercentage = [0, 0];
var cpuPercentage1 = [];
var nodes = [[], []];
var lines = [[], []];
var timeID = [];
function drawLine(svg2, xyNum, index) {
    if (timeIndex[index] < 60) {
        for (var i = 0; i < timeIndex[index]; i++) {
            lines[index][i].remove();
        }
        lines[index] = [];
        for (var i = 0; i < nodes[index].length; i++) {
            nodes[index][i][0] += 1;
            nodes[index][i][2] += 1;
        }
        cpuPercentage1[index] = cpuPercentage[index];
        cpuPercentage[index] = Math.random() * 100;
        nodes[index].push([1, cpuPercentage1[index], 0, cpuPercentage[index]]);
        timeIndex[index]++;
        for (var i = timeIndex[index]; i > 0; i--) {
            lines[index].push(svg2.append('line')
                .attr({
                    x1: x[xyNum][0](nodes[index][i - 1][0]),
                    y1: y[xyNum][0](nodes[index][i - 1][1]),
                    x2: x[xyNum][0](nodes[index][i - 1][2]),
                    y2: y[xyNum][0](nodes[index][i - 1][3])
                }).style({
                    'stroke': 'white',
                    'stroke-width': 1
                }));
        }
        d3.select("#right").html(parseInt(nodes[index][timeIndex[index] - 1][3]) + "%");
        d3.select("#cpuDataDis").html(parseInt(nodes[index][timeIndex[index] - 1][3]) + "%");
    }
    if (timeIndex[index] >= 60) {
        for (var i = 0; i < 60; i++) {
            lines[index][i].remove();
        }
        lines[index] = [];
        for (var i = 0; i < nodes[index].length; i++) {
            nodes[index][i][0] += 1;
            nodes[index][i][2] += 1;
        }
        cpuPercentage1[index] = cpuPercentage[index];
        cpuPercentage[index] = Math.random() * 100;
        nodes[index].push([1, cpuPercentage1[index], 0, cpuPercentage[index]]);
        timeIndex[index]++;
        for (var i = timeIndex[index]; i > (timeIndex[index] - 60); i--) {
            lines[index].push(svg2.append('line')
                .attr({
                    x1: x[xyNum][0](nodes[index][i - 1][0]),
                    y1: y[xyNum][0](nodes[index][i - 1][1]),
                    x2: x[xyNum][0](nodes[index][i - 1][2]),
                    y2: y[xyNum][0](nodes[index][i - 1][3])
                }).style({
                    'stroke': 'white',
                    'stroke-width': 1
                }));
        }
        d3.select("#right").html(parseInt(nodes[index][timeIndex[index] - 1][3]) + "%");
        d3.select("#cpuDataDis").html(parseInt(nodes[index][timeIndex[index] - 1][3]) + "%");
    }


}
//等待函数
function beginDraw(svg2, xyNum, index) {
    timeID[index] = setInterval("drawLine(" + svg2 + "," + xyNum + "," + index + ")", 1000);
}
function stopDraw(svgNum) {
    clearInterval(timeID[svgNum]);
}


