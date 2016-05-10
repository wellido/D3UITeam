/**
 * Created by Thinkpad3 on 2016/5/6.
 */
function shijian() {
    var shijian1 = d3.select('#warpDiv').append('div').attr('id', 'shijian1').style({
        'height': '260px',
        'width': '300px',
        'position': 'absolute',
        'top': '128px',
        'background-color': 'grey'
    });
    var table = shijian1.append('table').attr({
        'id': 'shijiantable1',
        'class': 'table',
        'width': '100%'
    }).style({
        'border': 'none',
        'position': 'absolute',
        'top': '0px',
        'cursor': 'pointer'
    });
    var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var monthWidth = ['15%', '70%', '15%'];
    var monthNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var weeks = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    table.append('thead');
    table.append('tr');
    for (var i = 1; i <= 3; i++) {
        table.append('td').attr('id', 'firTr' + i)
            .attr('class', 'tableFont')
            .style({
                'height': '30px',
                'vertical-align': 'middle',
                'text-align': 'center',
                'width': monthWidth[i - 1]
            });
    }
    var myDate = new Date();
    var nowMonth = myDate.getMonth() + 1;
    var nowYear = myDate.getFullYear();
    var nowWeek = myDate.getDay();
    var nextWeek;
    d3.select('#firTr1')
        .on('mouseover', function () {
            d3.select(this).style({
                'background-color': 'black'
            })
        }).on('mouseout', function () {
        d3.select(this).style({
            'background-color': 'grey'
        })
    }).on('click', function () {
        nowMonth--;
        if (nowMonth > 0) {
            d3.select('#firTr2').html(month[monthNum[nowMonth - 1] - 1] + ' ' + nowYear);
        } else {
            nowMonth = 12;
            nowYear--;
            d3.select('#firTr2').html(month[monthNum[nowMonth - 1] - 1] + ' ' + nowYear);
        }
    }).html('《');
    d3.select('#firTr3')
        .on('mouseover', function () {
            d3.select(this).style({
                'background-color': 'black'
            })
        }).on('mouseout', function () {
        d3.select(this).style({
            'background-color': 'grey'
        })
    }).on('click', function () {
        nowMonth++;
        if (nowMonth <= 12) {
            d3.select('#firTr2').html(month[monthNum[nowMonth - 1] - 1] + ' ' + nowYear);
        } else {
            nowMonth = 1;
            nowYear++;
            d3.select('#firTr2').html(month[monthNum[nowMonth - 1] - 1] + ' ' + nowYear);
        }
    }).html('》');
    d3.select('#firTr2').html(month[monthNum[nowMonth - 1] - 1] + ' ' + nowYear);

    var table2 = shijian1.append('table').attr({
        'id': 'shijiantable2',
        'class': 'table',
        'width': '100%'
    }).style({
        'border': 'none',
        'position': 'absolute',
        'top': '30px',
        'cursor': 'pointer'
    });
    table2.append('tr');
    for (var i = 1; i <= 7; i++) {
        table2.append('td')
            .attr('class', 'tableFont')
            .style({
                'height': '30px',
                'vertical-align': 'middle',
                'text-align': 'center',
                'width': '30px'
            }).html(weeks[i - 1]);
    }
}


function dayWirte(container, nowYear, nowMonth, nowWeek) {
    var isLeapYear;
    //闰年判断
    if (((nowYear % 4) == 0) && ((nowYear % 100) != 0) || ((nowYear % 400) == 0)) {
        isLeapYear = 1;
    } else {
        isLeapYear = 0;
    }

    var dayArror = [[], [], [], [], []];
    dayArrorInf(isLeapYear, dayArror, nowWeek, nowMonth);

    for (var i = 1; i <= 5; i++) {
        container.append('tr');
        for (var j = 1; j <= 7; j++) {
            container.append('td')
                .attr('class', 'tableFont')
                .attr('id', 'time' + i + '-' + j)
                .style({
                    'height': '30px',
                    'vertical-align': 'middle',
                    'text-align': 'center',
                    'width': '30px'
                }).html(dayArror[i - 1][j - 1]);
        }
    }

}

function dayArrorInf(isLeapYear, dayArror, nowWeek, nowMonth) {
    if (isLeapYear) {
        if (nowMonth == 2) {
            //闰年2月
            dayArrorAdd(dayArror,nowWeek,31,29);
        } else if (nowMonth == 1 || nowMonth == 3 || nowMonth == 5 || nowMonth == 7 || nowMonth == 8 || nowMonth == 10 || nowMonth == 12) {
            if (nowMonth == 1 || nowMonth == 8) {
            //闰年1,8月
                dayArrorAdd(dayArror,nowWeek,31,31);
            } else if (nowMonth == 3) {
                dayArrorAdd(dayArror,nowWeek,31,31);
            } else {
                    //闰年剩下大月
                dayArrorAdd(dayArror,nowWeek,30,31);
            }
        } else {
            //闰年小月
            dayArrorAdd(dayArror,nowWeek,31,30);
        }

            return nowWeek;
    } else {
        if (nowMonth == 2) {
            //平年2月
            dayArrorAdd(dayArror,nowWeek,31,28);
        } else if (nowMonth == 1 || nowMonth == 3 || nowMonth == 5 || nowMonth == 7 || nowMonth == 8 || nowMonth == 10 || nowMonth == 12) {
            if (nowMonth == 1 || nowMonth == 8) {
                //平年1,8月
                dayArrorAdd(dayArror,nowWeek,31,31);
            } else {
                //平年剩下大月
                dayArrorAdd(dayArror,nowWeek,30,31);
            }
        } else {
            //平年小月
            dayArrorAdd(dayArror,nowWeek,31,30);
        }
        return nowWeek;
    }
}

function dayArrorAdd(dayArror,nowWeek,lastMonthNum,thisMonthNum) {
    var days = 1;
    var temNowWeek = (lastMonthNum + 1) - nowWeek;
    for (var i = 0; i < nowWeek; i++) {
        dayArror[0].push(temNowWeek++);
    }
    for (var i = nowWeek; i < 7; i++) {
        dayArror[0].push(days++);
    }
    for (var i = 1; i < 4; i++) {
        for (var j = 0; j < 7; j++) {
            dayArror[i].push(days++);
        }
    }
    var temNum = 0;
    for (days; days <= thisMonthNum; days++) {
        dayArror[4].push(days);
        temNum++;
    }
    days = 1;
    nowWeek = temNum;
    for (temNum; temNum < 7; temNum++) {
        dayArror[4].push(days++);
    }
    return nowWeek;
}