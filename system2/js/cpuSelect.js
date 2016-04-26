function cpuSelect() {
    var cpuSelectDiv = warpDiv.append('div').style({
        'position': 'absolute',
        'width': '100%',
        'height': '185px',
        'top': '1px',
        'left': 0.156 * bodyX + 'px',
        'border-bottom': '1px solid grey'
    }).attr('id', 'cpuSelectDiv');

    var piceDiv = cpuSelectDiv.append('div').style({
        'position': 'absolute',
        'width': '140px',
        'height': '170px',
        'top': '1px',
        'left': '1px'
    }).attr('id', 'piceDiv');

    piceDiv.on('mouseover', function () {
        d3.select('#piceDiv').style({
            'background-color': '#1a1a1a',
            'border-bottom': '1px solid #a5754e'
        });
    });
    piceDiv.on('mouseout', function () {
        d3.select('#piceDiv').style({
            'background-color': 'black',
            'border-bottom': '1px solid black'
        });
    })

    piceDiv.append('text').style({
        'position': 'absolute',
        'left': '48px',
        'top': '120px',
        'color': 'white',
        'font-size': '20px'
    }).html('CPU');

    var cpuDataDis = piceDiv.append('text').style({
        'position': 'absolute',
        'left': '48px',
        'top': '145px',
        'color': 'white',
        'font-size': '20px'
    }).attr('id', 'cpuDataDis').html('CPU');


    cpuSelectDiv.style({
        "opacity": 0.0,
        'z-index': '0'
    });
}