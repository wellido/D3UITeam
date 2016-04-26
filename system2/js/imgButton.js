//左边图片按钮
function leftImgButton() {
    var imgButtonPos = [[160, 'img/02---01_03.png'],
        [254, 'img/02---02_03.png'],
        [348, 'img/02---01_01.png']];
    var imgButtonSize = [137, 94];
    for (var i = 0; i < 3; i++) {
        var temporaryDiv = warpDiv.append('div').style({
            'position': 'absolute',
            'width': imgButtonSize[0] + 'px',
            'height': imgButtonSize[1] + 'px',
            'top': imgButtonPos[i][0] + 'px',
            'border': '1px solid gray',
            'z-index': '1'
        });

        var img = temporaryDiv.append('img').attr({
            src: imgButtonPos[i][1]
        }).style({
            'width': '136px',
            'height': '93px',
            'cursor': 'pointer',
            'z-index': '0'
        });
        if (i == 1) {
            img.style('background-color', '#3469a4');
        }
        else {
            img.style('background-color', 'black');
        }
        img.on('mouseover', function () {
            if (d3.select(this).style('background-color') != 'rgb(52, 105, 164)') {
                d3.select(this).style('background-color', 'red');
            }
        }).on('mouseout', function () {
            if (d3.select(this).style('background-color') == 'rgb(255, 0, 0)') {
                d3.select(this).style('background-color', 'black');
            }
        });

        imgButton.push(img);

    }
    imgButton[0].on('click', function () {
        d3.select("#maindiv").style({
            "opacity": 0.0,
            'z-index': '0'
        });
        d3.select("#about").style({
            "opacity": 0.0,
            'z-index': '0'
        });
        divs[0].style({
            "opacity": 1.0,
            'z-index': '0.8'
        });
        divs[1].style({
            "opacity": 1.0,
            'z-index': '0.8'
        });
        d3.select("#data").style({
            "opacity": 1.0,
            'z-index': '1'
        });
        d3.select("#cpuSelectDiv").style({
            "opacity": 1.0,
            'z-index': '0.5'
        });
        d3.select("#discribeDiv").style({
            "opacity": 1.0,
            'z-index': '1'
        });
        d3.select("#timeDiv").style({
            "opacity": 1.0,
            'z-index': '1'
        });
        d3.select('#restartDiv').style({
            "opacity": 1.0,
            'z-index': '1'
        });
        beginDraw("svg[0]", 0, 0);
        beginDraw("svg[1]", 1, 1);
        imgButton[0].style('background-color', '#3469a4');
        imgButton[1].style('background-color', 'black');
        imgButton[2].style('background-color', 'black');

    });
    imgButton[1].on('click', function () {
        d3.select("#maindiv").style({
            "opacity": 1.0,
            'z-index': '1'
        });
        d3.select("#about").style({
            "opacity": 0.0,
            'z-index': '0'
        });
        divs[0].style({
            "opacity": 0.0,
            'z-index': '0'
        });
        divs[1].style({
            "opacity": 0.0,
            'z-index': '0'
        });
        d3.select("#data").style({
            "opacity": 0.0,
            'z-index': '0'
        });
        d3.select("#cpuSelectDiv").style({
            "opacity": 0.0,
            'z-index': '0'
        });
        d3.select("#discribeDiv").style({
            "opacity": 0.0,
            'z-index': '0'
        });
        d3.select("#timeDiv").style({
            "opacity": 0.0,
            'z-index': '0'
        });
        d3.select('#restartDiv').style({
            "opacity": 0.0,
            'z-index': '0'
        });
        stopDraw(0);
        stopDraw(1);
        if (timeIndex[0] < 60) {
            for (var i = 0; i < nodes[0].length; i++) {
                lines[0][i].remove();
                lines[1][i].remove();
            }
        } else {
            for (var i = 0; i < 60; i++) {
                lines[0][i].remove();
                lines[1][i].remove();
            }
        }
        nodes = [[], []];
        lines = [[], []];
        timeIndex = [0, 0];
        cpuPercentage = [0, 0];
        cpuPercentage1 = [];

        imgButton[1].style('background-color', '#3469a4');
        imgButton[0].style('background-color', 'black');
        imgButton[2].style('background-color', 'black');

    });
    imgButton[2].on('click', function () {
        d3.select("#maindiv").style({
            "opacity": 0.0,
            'z-index': '0'
        });
        d3.select("#about").style({
            "opacity": 1.0,
            'z-index': '1'
        });
        d3.select("#cpuSelectDiv").style({
            "opacity": 0.0,
            'z-index': '0'
        });
        d3.select("#data").style({
            "opacity": 0.0,
            'z-index': '0'
        });
        divs[0].style({
            "opacity": 0.0,
            'z-index': '0'
        });
        divs[1].style({
            "opacity": 0.0,
            'z-index': '0'
        });
        d3.select("#discribeDiv").style({
            "opacity": 0.0,
            'z-index': '0'
        });
        d3.select("#timeDiv").style({
            "opacity": 0.0,
            'z-index': '0'
        });
        d3.select('#restartDiv').style({
            "opacity": 0.0,
            'z-index': '0'
        });
        stopDraw(0);
        stopDraw(1);
        if (timeIndex[0] < 60) {
            for (var i = 0; i < nodes[0].length; i++) {
                lines[0][i].remove();
                lines[1][i].remove();
            }
        } else {
            for (var i = 0; i < 60; i++) {
                lines[0][i].remove();
                lines[1][i].remove();
            }
        }
        nodes = [[], []];
        lines = [[], []];
        timeIndex = [0, 0];

        cpuPercentage = [0, 0];
        cpuPercentage1 = [];

        imgButton[2].style('background-color', '#3469a4');
        imgButton[1].style('background-color', 'black');
        imgButton[0].style('background-color', 'black');

    });
}
//右边图片按钮
function rightImgButton() {
    var imgButtonPos = [
        [550, 'img/02---00_03.png'],
        [635, 'img/02---00_05.png']];
    for (var i = 0; i < 2; i++) {
        var temporaryDiv = warpDiv.append('div').style({
            'position': 'absolute',
            'width': '80px',
            'height': '80px',
            'top': imgButtonPos[i][0] + 'px',
            'right': '1px',
            'border': '1px solid gray',
            'z-index': '1'
        });
        imgButton.push(temporaryDiv.append('img').attr({
            src: imgButtonPos[i][1]
        }).style({
            'cursor': 'pointer',
            'z-index': '1'
        }));

    }
}

//重启按钮

function restart() {
    var restarts = warpDiv.append('div')
        .style('background', '#000000')
        .style('width', '90px')
        .style('height', '100px')
        .style({
            'position': 'absolute',
            'right': '1px',
            'top': '1px',
            'opacity': 0.0,
            'z-index': '0'

        })
        .attr('id', 'restartDiv')
        .attr('onmouseover', 'overBackground()')
        .attr('onmouseout', 'outBackground()')
        .attr('onclick', 'clickRestart()')
        .append('a')
        .attr('class', 'restart1')
        .attr('href', 'javascript:void(0);')
        .style('display', 'block')
        .style('text-decoration', ' none');


    var svg = restarts.append('svg')
        .attr('viewBox', '-6 -3 65 47');

    var pathAbout1 = svg.append('path');
    pathAbout1.attr('fill', '#8a2828').attr('class', 'changebg');
    pathAbout1.attr('d', 'M21.4,16.963c-1.58,1.58-2.559,3.764-2.559,6.179c0,4.825,3.913,8.738,8.738,8.738c4.825,0,8.738-3.913,8.738-8.738c0-2.284-0.885-4.353-2.318-5.908l-1.779,1.78c0.981,1.101,1.598,2.538,1.598,4.128c0,3.44-2.799,6.24-6.24,6.24c-3.441,0-6.243-2.799-6.243-6.24c0-1.722,0.702-3.28,1.83-4.413l3.163,3.163v-4.865v-2.524v-0.099h-7.488L21.4,16.963L21.4,16.963L21.4,16.963z M21.4,16.963');

    var pathAbout2 = svg.append('g').attr('class', 'svgbg');
    pathAbout2.attr('fill', '#8a2828');

    pathAbout2.append('path')
        .attr('fill', '#8a2828')
        .attr('class', 'changebg')
        .attr('d', 'M27.58,40.644c-2.362,0-4.654-0.463-6.813-1.376c-2.084-0.882-3.956-2.143-5.563-3.75c-1.607-1.607-2.869-3.479-3.75-5.563c-0.913-2.159-1.376-4.451-1.376-6.813c0-2.362,0.463-4.654,1.376-6.813c0.882-2.084,2.143-3.956,3.75-5.563c1.607-1.607,3.478-2.869,5.563-3.75c2.159-0.913,4.451-1.376,6.813-1.376c2.362,0,4.654,0.463,6.813,1.376c2.084,0.882,3.956,2.143,5.563,3.75c1.607,1.607,2.869,3.479,3.75,5.563c0.913,2.159,1.376,4.451,1.376,6.813c0,2.362-0.463,4.654-1.376,6.813c-0.882,2.084-2.143,3.956-3.75,5.563c-1.607,1.607-3.478,2.869-5.563,3.75C32.234,40.181,29.942,40.644,27.58,40.644L27.58,40.644z M27.58,8.125c-4.011,0-7.782,1.562-10.618,4.398c-2.836,2.836-4.398,6.607-4.398,10.618c0,4.011,1.562,7.782,4.398,10.618c2.836,2.836,6.607,4.398,10.618,4.398s7.782-1.562,10.618-4.398s4.398-6.607,4.398-10.618c0-4.011-1.562-7.782-4.398-10.618S31.591,8.125,27.58,8.125L27.58,8.125z M27.58,8.125');

    restarts.append('span')
        .style('color', 'white')
        .style('font-size', '12px')
        .style('display', 'block')
        .style('text-align', 'center')
        .style('margin-top', '10px')
        .style('letter-spacing', '5px')
        .html('重启');

}
function overBackground() {
    d3.selectAll('.changebg').style('fill', 'white');
    d3.selectAll('.restart1').style('background', '#8a2828');
}

function outBackground() {
    d3.selectAll('.changebg').style('fill', '#8a2828');
    d3.selectAll('.restart1').style('background', '#000000');
}

function clickRestart() {
    d3.select('.restart1').style('background', '#641313');
}
   