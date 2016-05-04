/**
 * Created by Thinkpad3 on 2016/5/3.
 */
function fanye(begin, num) {
    if (begin < (num - 10)) {
        for (var i = 1; i <= 10; i++) {
            d3.select('#fanye' + i).html(begin + '');
            begin++;
        }
    }
}

function backBlack(num) {
    for (var i = 1; i <= num; i++) {
        d3.select('#fanye' + i).style('background-color', 'black');
    }
}
function fenye(num) {
    var num = num;
    var nowPage = 1;
    var flagPage = 1;
    var lastPage;
    var fenyeDiv = d3.select('#warpDiv').append('div').attr('id', 'fenyeDiv').style({
        'position': 'absolute',
        'left': '24%',
        'top': '880px',
        'width': '700px',
        'height': '50px'
    });
    //首页
    fenyeDiv.append('div').attr('id', 'shouyeDiv').style({
        'position': 'absolute',
        'width': '48px',
        'height': '33px',
        'border': 'solid 1px grey',
        'border-radius': '5px',
        'cursor': 'pointer'
    }).on('mousedown', function () {
        d3.select(this).style({
            'background-color': '#3469a4'
        })
    }).on('mouseup', function () {
        d3.select(this).style({
            'background-color': 'black'
        })
    }).on('click', function () {
        if (num > 12) {
            fanye(1, num);
            backBlack(12);
            d3.select('#fanye1').style({
                'background-color': '#3469a4'
            });
            d3.select('#fanye11').style({
                'border': 'none'
            }).html('...');
            flagPage = 1;
            nowPage = 1;
        } else {
            backBlack(num);
            d3.select('#fanye1').style({
                'background-color': '#3469a4'
            });
        }
    }).html('首页').style({
        'color': 'white',
        'line-height': '33px',
        'vertical-align': 'middle',
        'text-align': 'center'
    });
    var leftPlu = 58;

    if (num <= 12) {
        lastPage = num;
        //数字页
        for (var i = 1; i <= num; i++) {
            fenyeDiv.append('div').attr('id', 'fanye' + i).style({
                'position': 'absolute',
                'width': '33px',
                'height': '33px',
                'border': 'solid 1px blue',
                'border-radius': '5px',
                'left': leftPlu + 'px',
                'cursor': 'pointer'
            }).on('click', function () {
                backBlack(num);
                d3.select(this).style({
                    'background-color': '#3469a4'
                });
                flagPage = parseInt(d3.select(this).html());
                nowPage = flagPage;
            }).html(i).style({
                'color': 'white',
                'line-height': '33px',
                'vertical-align': 'middle',
                'text-align': 'center'
            });
            leftPlu += 43;
        }
        fenyeDiv.append('div').attr('id', 'nextpageDiv').style({
            'position': 'absolute',
            'width': '65px',
            'height': '33px',
            'border': 'solid 1px grey',
            'border-radius': '5px',
            'left': leftPlu + 'px',
            'cursor': 'pointer'
        }).on('mousedown', function () {
            d3.select(this).style({
                'background-color': '#3469a4'
            })
        }).on('mouseup', function () {
            d3.select(this).style({
                'background-color': 'black'
            })
        }).on('click', function () {
            if (nowPage < num) {
                backBlack(num);
                nowPage += 1;
                flagPage += 1;
                d3.select('#fanye' + nowPage).style({
                    'background-color': '#3469a4'
                });
            }
        }).html('下一页').style({
            'color': 'white',
            'line-height': '33px',
            'vertical-align': 'middle',
            'text-align': 'center'
        });
        leftPlu += 75;
        fenyeDiv.append('div').attr('id', 'lastpageDiv').style({
            'position': 'absolute',
            'width': '48px',
            'height': '33px',
            'border': 'solid 1px grey',
            'border-radius': '5px',
            'left': leftPlu + 'px',
            'cursor': 'pointer'
        }).on('mousedown', function () {
            d3.select(this).style({
                'background-color': '#3469a4'
            })
        }).on('mouseup', function () {
            d3.select(this).style({
                'background-color': 'black'
            })
        }).on('click', function () {
            backBlack(num);
            d3.select('#fanye' + num).style({
                'background-color': '#3469a4'
            });
            flagPage = num;
            nowPage = num;
        }).html('末页').style({
            'color': 'white',
            'line-height': '33px',
            'vertical-align': 'middle',
            'text-align': 'center'
        });
    } else {
        lastPage = 10;
        for (var i = 1; i <= 10; i++) {
            fenyeDiv.append('div').attr('id', 'fanye' + i).style({
                'position': 'absolute',
                'width': '33px',
                'height': '33px',
                'border': 'solid 1px blue',
                'border-radius': '5px',
                'left': leftPlu + 'px',
                'cursor': 'pointer'
            }).on('click', function () {
                backBlack(12);
                d3.select(this).style({
                    'background-color': '#3469a4'
                });
                nowPage = parseInt(d3.select(this).attr('id').replace('fanye', ''));
                flagPage = parseInt(d3.select(this).html());
                console.log(flagPage);
            }).html(i).style({
                'color': 'white',
                'line-height': '33px',
                'vertical-align': 'middle',
                'text-align': 'center'
            });
            leftPlu += 43;
        }

        fenyeDiv.append('div').attr('id', 'fanye' + i).style({
            'position': 'absolute',
            'width': '33px',
            'height': '33px',
            'left': leftPlu + 'px',
            'cursor': 'pointer'
        }).html('...').style({
            'color': 'white',
            'line-height': '33px',
            'vertical-align': 'middle',
            'text-align': 'center'
        });
        leftPlu += 43;
        fenyeDiv.append('div').attr('id', 'fanye12').style({
            'position': 'absolute',
            'width': '33px',
            'height': '33px',
            'border': 'solid 1px blue',
            'border-radius': '5px',
            'left': leftPlu + 'px',
            'cursor': 'pointer'
        }).html(num).style({
            'color': 'white',
            'line-height': '33px',
            'vertical-align': 'middle',
            'text-align': 'center'
        });
        leftPlu += 43;
        //下一页
        fenyeDiv.append('div').attr('id', 'nextpageDiv').style({
            'position': 'absolute',
            'width': '65px',
            'height': '33px',
            'border': 'solid 1px grey',
            'border-radius': '5px',
            'left': leftPlu + 'px',
            'cursor': 'pointer'
        }).on('mousedown', function () {
            d3.select(this).style({
                'background-color': '#3469a4'
            })
        }).on('mouseup', function () {
            d3.select(this).style({
                'background-color': 'black'
            })
        }).on('click', function () {
            if (flagPage < num) {
                if (flagPage < (lastPage - 1)) {
                    backBlack(12);
                    flagPage += 1;
                    nowPage += 1;
                    d3.select('#fanye' + nowPage).style({
                        'background-color': '#3469a4'
                    });
                    console.log('yes1');
                } else {
                    if (flagPage < (num - 3) && (nowPage == 9)) {
                        fanye((flagPage - 7), num);
                        flagPage += 1;
                        console.log('yes2');
                    } else {
                        flagPage += 1;
                        d3.select('#fanye11').style({
                            'border': 'solid 1px blue',
                            'border-radius': '5px'
                        }).html(num - 1);
                        backBlack(12);
                        d3.select('#fanye' + (12 - (num - flagPage))).style({
                            'background-color': '#3469a4'
                        });
                        console.log('yes3');
                    }
                }
                console.log('flagPage: ' + flagPage);
                console.log('nowPage: ' + nowPage);
            }
        }).html('下一页').style({
            'color': 'white',
            'line-height': '33px',
            'vertical-align': 'middle',
            'text-align': 'center'
        });
        leftPlu += 75;
        //末页
        fenyeDiv.append('div').attr('id', 'lastpageDiv').style({
            'position': 'absolute',
            'width': '48px',
            'height': '33px',
            'border': 'solid 1px grey',
            'border-radius': '5px',
            'left': leftPlu + 'px',
            'cursor': 'pointer'
        }).on('mousedown', function () {
            d3.select(this).style({
                'background-color': '#3469a4'
            })
        }).on('mouseup', function () {
            d3.select(this).style({
                'background-color': 'black'
            })
        }).on('click', function () {
            fanye((num - 11), num);
            d3.select('#fanye11').style({
                'border': 'solid 1px blue',
                'border-radius': '5px'
            }).html(num - 1);
            backBlack(12);
            d3.select('#fanye12').style({
                'background-color': '#3469a4'
            });
            flagPage = num;
            nowPage = 12;
        }).html('末页').style({
            'color': 'white',
            'line-height': '33px',
            'vertical-align': 'middle',
            'text-align': 'center'
        });
    }

    d3.select('#fanye1').style({
        'background-color': '#3469a4'
    });
}