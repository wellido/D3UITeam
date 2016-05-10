/**
 * Created by Thinkpad3 on 2016/5/4.
 */
function zhuti() {
    var zhutiDiv = d3.select('#warpDiv').append('div').attr('id', 'zhutiDiv').style({
        'width': '100%',
        'height': '67px',
        'border-bottom': 'solid 1px grey'
    });

    zhutiDiv.append('img').attr({
        src: 'img/告警.svg'
    }).style({
        'position': 'absolute',
        'left': '20px',
        'top': '8px'
    });
    zhutiDiv.append('div').style({
        'width': '175px',
        'height': '67px',
        'background-color': '#3469a4'
    }).html('告警').style({
        'color': 'white',
        'line-height': '67px',
        'vertical-align': 'middle',
        'text-align': 'center',
        'font-Weight': 'bold',
        'font-size': '25px'
    });
    var myDate = new Date();
    zhutiDiv.append('div').style({
        'position': 'absolute',
        'width': '430px',
        'height': '67px',
        'top': '0px',
        'left': '210px',
    }).html(myDate.getFullYear() + '-'
        + (myDate.getMonth()+1) + '-'
        + myDate.getDate() + ' '
        + myDate.getHours() + ':'
        + myDate.getMinutes() + ' '
        + '正常'
    ).style({
        'color': 'white',
        'line-height': '67px',
        'font-Weight': 'bold',
        'vertical-align': 'middle',
        'font-size': '22px'
    })
}