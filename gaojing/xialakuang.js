/**
 * Created by Thinkpad3 on 2016/5/4.
 */
function xialakuang() {
    var xialaDiv = d3.select('#warpDiv').append('div').attr('id', 'xialaiDiv').style({
        'width': '100%',
        'height': '80px',
        'position': 'absolute',
        'top': '67px'
    });
    var xialaInfo = [['系统预警'], ['所有分类'], ['所有层级'], ['所有指标'], ['所有状态']];
    var xialaPos = ['26%', '38%', '48.4%', '58.8%', '69.2%'];
    for (var i = 1; i <= 5; i++) {
        xialaDiv.append('select').attr('id', 'xiala' + i)
            .style({
                'position': 'absolute',
                'width': '9.7%',
                'height': '40px',
                'left': xialaPos[i - 1],
                'top': '20px',
                'appearance': 'none',
                'background-color': 'black',
                'background-repeat': 'no-repeat',
                'border': '1px solid grey',
                'border-bottom': '1px solid gray',
                'font-size': '16px',
                'color': 'white',
                'font-Weight': 'bold',
                'padding-left': '26px',
                'border-radius': '5px'
            });
    }
    for (var i = 1; i <= 5; i++) {
        for (var j = 1; j <= (xialaInfo[i - 1].length); j++) {
            d3.select('#xiala' + i).append('option')
                .attr('value', 'option' + i + '' + j)
                .text(xialaInfo[i - 1][j - 1]).style({
                'font-Weight': 'bold',
                'font-size': '16px',
                'color': 'white'
            });
        }
    }

    xialaDiv.append('input').attr('id', 'search').style({
        'position': 'absolute',
        'width': '16%',
        'height': '40px',
        'color': 'white',
        'left': '82.5%',
        'top': '20px',
        'border-radius': '5px',
        'background-color': 'black',
        'font-size': '16px',
        'maxLength': "10",
        'padding-right': '50px',
        'border': 'solid 1px grey'
    });

    xialaDiv.append('div').attr('id', 'searchDiv').style({
        'position': 'absolute',
        'left': '95.6%',
        'top': '20px',
        'height': '40px',
        'width': '38px',
        'background-color': '#3469a4',
        'border-radius': '5px'
    });

    xialaDiv.append('img').attr({
        src: 'img/搜索.svg'
    }).style({
        'position': 'absolute',
        'left': '95.2%',
        'top': '16px'
    });
}
