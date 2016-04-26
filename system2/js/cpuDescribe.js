function cpuDiscribe() {
    var discribeDiv = warpDiv.append('div').style({
        'position': 'absolute',
        'width': '100%',
        'height': '70px',
        'top': '200px',
        'left': 0.156 * bodyX + 'px'
    }).attr('id', 'discribeDiv');

    discribeDiv.append('text').style({
        'position': 'absolute',
        'left': '1px',
        'top': '1px',
        'color': 'white',
        'font-size': '30px'
    }).html('CPU');

    discribeDiv.append('text').style({
        'position': 'absolute',
        'left': '1px',
        'top': '50px',
        'color': 'white',
        'font-size': '15px'
    }).html('% 利用率');

    discribeDiv.append('text').style({
        'position': 'absolute',
        'left': 0.763 * bodyX + 'px',
        'top': '50px',
        'color': 'white',
        'font-size': '15px'
    }).attr('id', 'text1').html('%100');

    var timeDiv = warpDiv.append('div').style({
        'position': 'absolute',
        'width': '100%',
        'height': '50px',
        'top': '670px',
        'left': 0.156 * bodyX + 'px'
    }).attr('id', 'timeDiv');
    timeDiv.append('text').style({
        'position': 'absolute',
        'left': '1px',
        'top': '1px',
        'color': 'white',
        'font-size': '15px'
    }).html('60秒');
    timeDiv.append('text').style({
        'position': 'absolute',
        'left': 0.763 * bodyX + 'px',
        'top': '1px',
        'color': 'white',
        'font-size': '15px'
    }).attr('id', 'text2').html('0');


    discribeDiv.style({
        "opacity": 0.0,
        'z-index': '0'
    });

    timeDiv.style({
        "opacity": 0.0,
        'z-index': '0'
    });
}