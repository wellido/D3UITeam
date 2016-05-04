/**
 * Created by Thinkpad3 on 2016/5/4.
 */
function mulu() {
    var muluDiv = d3.select('#warpDiv').append('div').attr('id', 'muluDiv').style({
        'width': '100%',
        'height': '48px',
        'position': 'absolute',
        'top': '145px'
    });
    var htmls = ['告警时间','层级','来源','事件','设定阈值','最新告警内容','触发事件','持续时间','状态'];
    var widths = ['10%', '4%', '17%', '17%', '7%', '14%', '10%', '8%', '5%'];
    var widths2 = ['0%', '11%', '16%', '34%', '52%', '60%', '75%', '86%', '95%'];
    var widths3 = ['10%', '15%', '33%', '51%', '59%', '74%', '85%', '94%'];
    for (var i = 0; i < 9; i++) {
        muluDiv.append('div').style({
            'position': 'absolute',
            'width': widths[i],
            'height': '48px',
            'left': widths2[i],
            'background-color': '#3469a4',
            'border': 'solid 1px black'
        }).html(htmls[i]).style({
            'color': 'white',
            'line-height': '48px',
            'vertical-align': 'middle',
            'text-align': 'center',
            'font-size': '20px'
        });
    }
    for (var i = 0; i < 8; i++) {
        muluDiv.append('div').style({
            'position': 'absolute',
            'left': widths3[i],
            'top': '17%',
            'width': '1%',
            'height': '30px',
            'background-color': '#3469a4'
        });
    }

}