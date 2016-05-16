/**
 * Created by Thinkpad3 on 2016/5/9.
 */
function timeSelect(container, left, top) {
    container.append('input').attr('id', 'xiala1')
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
    });
    var shijian = d3.select('#warpDiv').append('div').attr('id', 'shijian').style({
        'height': '295px',
        'width': '300px',
        'position': 'absolute',
        'top': parseInt(top.replace('px', '')) + 40 + 'px',
        'background-color': 'white',
        'left': left,
        "opacity": 0.0,
        'z-index': '0'
    });
    var myDate = new Date();
    var nowYear = myDate.getFullYear();
    var nowMonth = myDate.getMonth() + 1;
    var nowDay = myDate.getDate();
    var clickFlag = 0;
    d3.select('#xiala1').attr('value', (nowYear + '/' + nowMonth + '/' + nowDay))
        .style({
            'line-height': '40px',
            'vertical-align': 'middle'
        });
    d3.select('#xiala1').on('click', function () {
        if (!clickFlag) {
            d3.select('#shijian').style({
                "opacity": 1.0,
                'z-index': '3'
            });
            d3.select('#daystable').style({
                "opacity": 1.0,
                'z-index': '3'
            });
            clickFlag = 1;
        } else {
            d3.select('#shijian').style({
                "opacity": 0.0,
                'z-index': '0'
            });
            d3.select('#daystable').style({
                "opacity": 0.0,
                'z-index': '0'
            });
            clickFlag = 0;
        }
    });
    var yearSelect = shijian.append('select').attr('id', 'yearSelect')
        .style({
            'position': 'absolute',
            'width': '50%',
            'height': '45px',
            'top': '0px',
            'appearance': 'none',
            'background-color': '#00bfff',
            'background-repeat': 'no-repeat',
            'border': '1px solid white',
            'font-size': '16px',
            'color': 'white',
            'font-Weight': 'bold',
            'padding-left': '26px',
            "opacity": 1.0,
            'z-index': '0.0'
        }).on('change', function () {
            d3.select('#daystable').remove();
            var value = d3.select(this).property("value");
            nowYear = parseInt(value.replace('year', ''));
            daysAdd(nowYear, nowMonth);
            d3.select('#daystable').style({
                "opacity": 1.0,
                'z-index': '3'
            });

        });
    var monthSelect = shijian.append('select').attr('id', 'monthSelect')
        .style({
            'position': 'absolute',
            'width': '50%',
            'height': '45px',
            'left': '50%',
            'top': '0px',
            'appearance': 'none',
            'background-color': '#00bfff',
            'background-repeat': 'no-repeat',
            'border': '1px solid white',
            'font-size': '16px',
            'color': 'white',
            'font-Weight': 'bold',
            'padding-left': '26px',
            "opacity": 1.0,
            'z-index': '0.0'
        }).on('change', function () {
            d3.select('#daystable').remove();
            var value = d3.select(this).property("value");
            nowMonth = parseInt(value.replace('month', ''));
            daysAdd(nowYear, nowMonth);
            d3.select('#daystable').style({
                "opacity": 1.0,
                'z-index': '3'
            });
        });
    for (var i = (nowYear - 30); i < (nowYear + 30); i++) {
        yearSelect.append('option')
            .attr('value', 'year' + i)
            .attr('id', 'year' + i)
            .text(i + '年').style({
            'font-Weight': 'bold',
            'font-size': '16px',
            'color': 'white'
        });
    }
    d3.select('#year' + nowYear).attr('selected', 'true');
    for (var i = 1; i < 13; i++) {
        monthSelect.append('option')
            .attr('value', 'month' + i)
            .attr('id', 'month' + i)
            .text(i + '月').style({
            'font-Weight': 'bold',
            'font-size': '16px',
            'color': 'white'
        });
    }
    d3.select('#month' + nowMonth).attr('selected', 'true');
    var weeks = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    var table = shijian.append('table').attr({
        'id': 'shijiantable',
        'class': 'table',
        'width': '100%'
    }).style({
        'border': 'none',
        'position': 'absolute',
        'top': '45px'
    });
    table.append('tr');
    for (var i = 1; i <= 7; i++) {
        table.append('td')
            .attr('class', 'tableFont')
            .style({
                'height': '35px',
                'vertical-align': 'middle',
                'text-align': 'center',
                'width': '30px',
                'background-color': '#00bfff'
            }).html(weeks[i - 1]);
    }
    daysAdd(nowYear, nowMonth);
    d3.selectAll('.normal').on('click',function() {
        d3.select('#shijian').style({
            "opacity": 0.0,
            'z-index': '0'
        });
        d3.select('#daystable').style({
            "opacity": 0.0,
            'z-index': '0'
        });
        d3.select('#hourMin').style({
            "opacity": 0.0,
            'z-index': '0'
        });
        clickFlag = 0;
    });
    d3.selectAll('.table').on('click',function() {
        d3.select('#shijian').style({
            "opacity": 0.0,
            'z-index': '0'
        });
        d3.select('#daystable').style({
            "opacity": 0.0,
            'z-index': '0'
        });
        d3.select('#hourMin').style({
            "opacity": 0.0,
            'z-index': '0'
        });
        clickFlag = 0;
    });
}

function daysAdd(nowYear, nowMonth) {
    var daystable = d3.select('#shijian').append('table').attr({
        'id': 'daystable',
        'class': 'table',
        'width': '100%'
    }).style({
        'border': 'none',
        'position': 'absolute',
        'top': '80px',
        'cursor': 'pointer',
        'background-color': 'white',
        "opacity": 0.0,
        'z-index': '0'
    });
    var rightDay = nowYear + '-' + nowMonth + '-' + 1;
    var nowWeek = new Date(rightDay).getDay();
    var daysArror = [[], [], [], [], [], []];
    dayArrorInf(nowYear, daysArror, nowWeek, nowMonth);
}

function isLeapYear(year) {
    var isLeapYear;
    if (((year % 4) == 0) && ((year % 100) != 0) || ((year % 400) == 0)) {
        isLeapYear = 1;
    } else {
        isLeapYear = 0;
    }
    return isLeapYear;
}

function dayArrorInf(nowYear, daysArror, nowWeek, nowMonth) {
    if (isLeapYear(nowYear)) {
        if (nowMonth == 2) {
            //闰年2月
            dayArrorAdd(daysArror, nowWeek, 31, 29);
            daysDraw(d3.select('#daystable'), daysArror, nowYear, nowMonth);
        } else if (nowMonth == 1 || nowMonth == 3 || nowMonth == 5 || nowMonth == 7 || nowMonth == 8 || nowMonth == 10 || nowMonth == 12) {
            if (nowMonth == 1 || nowMonth == 8) {
                //闰年1,8月
                dayArrorAdd(daysArror, nowWeek, 31, 31);
                daysDraw(d3.select('#daystable'), daysArror, nowYear, nowMonth);
            } else if (nowMonth == 3) {
                dayArrorAdd(daysArror, nowWeek, 29, 31);
                daysDraw(d3.select('#daystable'), daysArror, nowYear, nowMonth);
            } else {
                //闰年剩下大月
                dayArrorAdd(daysArror, nowWeek, 30, 31);
                daysDraw(d3.select('#daystable'), daysArror, nowYear, nowMonth);
            }
        } else {
            //闰年小月
            dayArrorAdd(daysArror, nowWeek, 31, 30);
            daysDraw(d3.select('#daystable'), daysArror, nowYear, nowMonth);
        }
        return nowWeek;
    } else {
        if (nowMonth == 2) {
            //平年2月
            dayArrorAdd(daysArror, nowWeek, 31, 28);
            daysDraw(d3.select('#daystable'), daysArror, nowYear, nowMonth);
        } else if (nowMonth == 1 || nowMonth == 3 || nowMonth == 5 || nowMonth == 7 || nowMonth == 8 || nowMonth == 10 || nowMonth == 12) {
            if (nowMonth == 1 || nowMonth == 8) {
                //平年1,8月
                dayArrorAdd(daysArror, nowWeek, 31, 31);
                daysDraw(d3.select('#daystable'), daysArror, nowYear, nowMonth);
            } else if (nowMonth == 3) {
                dayArrorAdd(daysArror, nowWeek, 28, 31);
                daysDraw(d3.select('#daystable'), daysArror, nowYear, nowMonth);
            } else {
                //平年剩下大月
                dayArrorAdd(daysArror, nowWeek, 30, 31);
                daysDraw(d3.select('#daystable'), daysArror, nowYear, nowMonth);
            }
        } else {
            //平年小月
            dayArrorAdd(daysArror, nowWeek, 31, 30);
            daysDraw(d3.select('#daystable'), daysArror, nowYear, nowMonth);
        }
    }
}

function dayArrorAdd(daysArror, nowWeek, lastMonthNum, thisMonthNum) {
    var days = 1;
    var temNowWeek = (lastMonthNum + 1) - nowWeek;
    for (var i = 0; i < nowWeek; i++) {
        daysArror[0].push(temNowWeek++);
    }
    for (var i = nowWeek; i < 7; i++) {
        daysArror[0].push(days++);
    }
    var flag1, flag2;
    for (var i = 1; i < 6; i++) {
        for (var j = 0; j < 7; j++) {
            if (days <= thisMonthNum) {
                daysArror[i].push(days++);
                flag1 = i;
                flag2 = j;
            }
        }
    }
    days = 1;
    if (flag1 == 4) {
        for (var i = (flag2 + 1); i < 7; i++) {
            daysArror[4].push(days++);
        }
        for (var i = 0; i < 7; i++) {
            daysArror[5].push(days++);
        }
    } else if (flag1 == 5) {
        for (var j = flag2; j < 7; j++) {
            daysArror[5].push(days++);
        }
    } else {
        for (var i = 4; i <= 5; i++) {
            for (var j = 0; j < 7; j++) {
                daysArror[i].push(days++);
            }
        }
    }
}

function daysDraw(container, daysArror, nowYear, nowMonth) {
    for (var i = 1; i <= 6; i++) {
        container.append('tr');
        for (var j = 1; j <= 7; j++) {
            var temTd = container.append('td')
                .attr({
                    'font-size': '17px'
                })
                .style({
                    'height': '35px',
                    'vertical-align': 'middle',
                    'text-align': 'center',
                    'width': '30px',
                    'background-color': 'white'
                }).html(daysArror[i - 1][j - 1]);
            if (((i <= 1) && (daysArror[i - 1][j - 1] > 20)) || ((i > 4) && (daysArror[i - 1][j - 1] < 15))) {
                temTd.style('color', 'grey');
            } else {
                temTd.style('color', 'black');
                temTd.attr('id', 'td' + daysArror[i - 1][j - 1]);
                temTd.on('click', function () {
                    d3.select('#xiala1').attr('value', (nowYear + '/' + nowMonth + '/' + d3.select(this).attr('id').replace('td', '')));
                })
            }
            if (i % 2 == 0) {
                temTd.style('background-color', 'aqua')
                    .on('mouseover', function () {
                        d3.select(this).style({
                            'background-color': '#3469a4'
                        })
                    }).on('mouseout', function () {
                    d3.select(this).style({
                        'background-color': 'aqua'
                    })
                });
            } else {
                temTd.on('mouseover', function () {
                    d3.select(this).style({
                        'background-color': '#3469a4'
                    })
                }).on('mouseout', function () {
                    d3.select(this).style({
                        'background-color': 'white'
                    })
                });
            }
        }
    }
}