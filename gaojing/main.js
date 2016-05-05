/**
 * Created by Thinkpad3 on 2016/5/3.
 */
window.onload = function () {
    d3.select('body').style('background-color', 'black');
    var warpDiv = d3.select('body').append('div')
        .attr('id', 'warpDiv')
        .style({
            'width': '1440px',
            'height': '960px'
        });
    var tableInfo = [['2016-05-03 10:55:19', '组件', '联机交易 手机银行 ', '阈值告警：成功率低于阈值', '99', '95.16', '2016-05-03 10:49:00', '6', '持续中'],
        ['2016-05-03 10:55:19', 'haha', '联机交易 手机银行 ', '阈值告警：成功率低于阈值', '99', '95.16', '2016-05-03 10:49:00', '6', '持续中'],
        ['2016-05-03 10:55:19', 'wawa', '联机交易 手机银行 ', '阈值告警：成功率低于阈值', '99', '95.16', '2016-05-03 10:49:00', '6', '持续中'],
        ['2016-05-03 10:55:19', 'gaga', '联机交易 手机银行 ', '阈值告警：成功率低于阈值', '99', '95.16', '2016-05-03 10:49:00', '6', '持续中']];

    var InfoNum = 300;
    table();
    var num = parseInt(InfoNum / 13);
    for (var j = 0; j < 13; j++) {
        addInfoToTable(tableInfo[0]);
    }
    mulu();
    xialakuang();
    zhuti();
    fenye(num,tableInfo);
}