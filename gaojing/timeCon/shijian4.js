/**
 * Created by Thinkpad3 on 2016/6/1.
 */
function shijian4(container, left, top) {
    var myDate = new Date();
    var nowHour = myDate.getHours();
    var nowMinute = myDate.getMinutes();
    //两个拖拽事件
    var drag1 = d3.behavior.drag()
        .on("drag", function () {
            if ((d3.event.y - 17) > 0 && (d3.event.y - 17) < 225) {
                d3.select(this).style({
                    'top': d3.event.y - 17 + 'px'
                });
                var beginNum = parseInt(parseInt(d3.select(this).style('top').replace('px', '')) / 14.625);
                for (var i = 0; i < 9; i++) {
                    if ((i + beginNum) <= 9) {
                        d3.select('#hour' + i).html(0 + '' + (i + beginNum));
                    } else {
                        d3.select('#hour' + i).html(i + beginNum);
                    }
                }
            }
        });
    var drag2 = d3.behavior.drag()
        .on("drag", function () {
            if ((d3.event.y - 17) > 0 && (d3.event.y - 17) < 225) {
                d3.select(this).style({
                    'top': d3.event.y - 17 + 'px'
                });
                var beginNum = parseInt(parseInt(d3.select(this).style('top').replace('px', '')) / 4.319);
                for (var i = 0; i < 9; i++) {
                    if ((i + beginNum) <= 9) {
                        d3.select('#minute' + i).html(0 + '' + (i + beginNum));
                    } else {
                        d3.select('#minute' + i).html(i + beginNum);
                    }
                }
            }
        });
    container.append('input').attr('id', 'xiala2')
        .attr('readonly', 'readonly').style({
        'position': 'absolute',
        'width': '9.7%',
        'height': '40px',
        'left': left,
        'top': top,
        'background-color': 'black',
        'border': '1px solid grey',
        'font-size': '16px',
        'color': 'white',
        'font-Weight': 'bold',
        'padding-left': '26px',
        'border-radius': '3px',
        'cursor': 'pointer',
        "opacity": 1.0,
        'z-index': '3'
    }).on('click', function () {
        if (hourMin.style('opacity') == 0.0) {
            hourMin.style({
                "opacity": 1.0,
                'z-index': '3'
            });
        } else {
            hourMin.style({
                "opacity": 0.0,
                'z-index': '0'
            });
        }
    });
    d3.select('#xiala2').attr('value', (nowHour + '   :   ' + nowMinute))
        .style({
            'line-height': '40px',
            'vertical-align': 'middle'
        });
    var hourMin = container.append('div').attr('id', 'hourMin')
        .attr('class', 'shifen')
        .style({
            'height': '260px',
            'width': '9.7%',
            'position': 'absolute',
            'top': parseInt(top.replace('px', '')) + 40 + 'px',
            'background-color': 'white',
            'left': left,
            "opacity": 0.0,
            'z-index': '0'
        });
    var shijian4 = hourMin.append('div').attr('id', 'shijian4').style({
        'position': 'absolute',
        'width': '50%',
        'height': '100%',
        'background-color': 'white',
        'border-top-left-radius': '3px',
        'border-bottom-left-radius': '3px',
        'cursor': 'pointer',
        "opacity": 1.0,
        'z-index': '3'
    }).on('mouseover', function () {
        d3.select(this).style({
            'border': '1px solid green'
        })
    }).on('mouseout', function () {
        d3.select(this).style({
            'border': ''
        })
    });
    var shijian5 = hourMin.append('div').attr('id', 'shijian5').style({
        'position': 'absolute',
        'width': '50%',
        'height': '100%',
        'left': '50%',
        'background-color': 'white',
        'border-top-right-radius': '3px',
        'border-bottom-right-radius': '3px',
        'cursor': 'pointer',
        "opacity": 1.0,
        'z-index': '3'
    }).on('mouseover', function () {
        d3.select(this).style({
            'border': '1px solid green'
        })
    }).on('mouseout', function () {
        d3.select(this).style({
            'border': ''
        })
    });
    var scroller1 = shijian4.append('div').attr('id', 'scroller1').style({
        'position': 'absolute',
        'width': '5px',
        'height': '35px',
        'right': '1px',
        'top': '1px',
        'background-color': 'green',
        'cursor': 'pointer',
        "opacity": 1.0,
        'z-index': '4'
    }).call(drag1);
    var scroller2 = shijian5.append('div').attr('id', 'scroller2').style({
        'position': 'absolute',
        'width': '5px',
        'height': '35px',
        'right': '1px',
        'top': '1px',
        'background-color': 'green',
        'cursor': 'pointer',
        "opacity": 1.0,
        'z-index': '4'
    }).call(drag2);

    for (var i = 0; i < 9; i++) {
        shijian4.append('div').attr('id', 'hour' + i).style({
            'position': 'absolute',
            'width': '95%',
            'height': '28.8px',
            'top': 28.8 * i + 'px',
            'background-color': 'white'
        }).on('mouseover', function () {
            d3.select(this).style({
                'border': '2px solid blue'
            })
        }).on('mouseout', function () {
            d3.select(this).style({
                'border': ''
            })
        }).on('click', function () {
            nowHour = d3.select(this).html();
            d3.select('#xiala2').attr('value', (nowHour + '   :   ' + nowMinute));
            console.log(d3.select(this).html());
        }).html(0 + '' + i).style({
            'color': 'black',
            'line-height': '28.8px',
            'vertical-align': 'middle',
            'text-align': 'center',
            'font-size': '18px'
        });
    }

    for (var i = 0; i < 9; i++) {
        shijian5.append('div').attr('id', 'minute' + i).style({
            'position': 'absolute',
            'width': '95%',
            'height': '28.8px',
            'top': 28.8 * i + 'px',
            'background-color': 'white'
        }).on('mouseover', function () {
            d3.select(this).style({
                'border': '2px solid blue'
            })
        }).on('mouseout', function () {
            d3.select(this).style({
                'border': ''
            })
        }).on('click', function () {
            nowMinute = d3.select(this).html();
            d3.select('#xiala2').attr('value', (nowHour + '   :   ' + nowMinute));
        }).html(0 + '' + i).style({
            'color': 'black',
            'line-height': '28.8px',
            'vertical-align': 'middle',
            'text-align': 'center',
            'font-size': '18px'
        });
    }
}