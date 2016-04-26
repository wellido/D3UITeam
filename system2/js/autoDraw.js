//自适应模块
function autoDraw() {

    calculate = 0;
    d3.select('#maindiv').style({
        'width': 0.766 * bodyX + 'px'
    });
    for (var i = 0; i < 6; i++) {
        idDiv1[i].style('left', calculate + 'px');
        idDiv2[i].style('left', calculate + 'px');
        calculate += plusNum;
    }
    calculate = plusNum * 5 + 10;
    for (var i = 0; i < operateImg[0].length; i++) {
        operateImg[0][i].style('left', calculate + 'px');
    }
    for (var i = 0; i < operateImg[1].length; i++) {
        operateImg[1][i].style('left', calculate + 70 + 'px');
    }
    calculate = 0;
    for (var i = 0; i < 3; i++) {
        accountInputs2[i].style({
            'left': calculate + 'px',
            'width': 0.17 * bodyX + 'px'
        });
        calculate += plusMun2;
    }
    calculate = plusMun2 * 3;
    accounttButton[0].style('left', calculate + 'px');
    accounttButton[1].style('left', calculate + 100 + 'px');
    calculate = 0;
    for (var i = 0; i < (userNum + 1); i++) {
        for (var j = 0; j < 5; j++) {
            userListInput[i][j].style({
                'left': calculate + 'px',
                'width': 0.121 * bodyX + 'px'
            });
            calculate += plusNum;
        }
        calculate = 0;
    }

    if (bodyX > 600) {
        divs[0].remove();

        if (timeID[0]) {
            stopDraw(0);
        }
        var cpuDivSize = [0.763 * bodyX, 380, 200, 290];
        cpu(warpDiv, cpuDivSize, cpuDivSize[0] - 10, cpuDivSize[1] - 10, 0);


        d3.select("#text1").style('left', 0.763 * bodyX + 'px');
        d3.select("#text2").style('left', 0.763 * bodyX + 'px');

        if (divs[1].style('opacity') == 1.0) {
            beginDraw("svg[0]", 0, 0);
            divs[0].style({
                "opacity": 1.0,
                'z-index': '0.8'
            });

        }
    }

    var changeTem;
    if (bodyX > 980) {
        changeTem = bodyX - 880;
    }
    else {
        changeTem = 100;
    }
    d3.select('#changeDiv').style({
        'left': changeTem + 'px'
    })
    var deleteTem;
    if (bodyX > 1020) {
        deleteTem = bodyX - 920;
    }
    else {
        deleteTem = 100;
    }
    d3.select('#deleteDiv').style({
        'left': deleteTem + 'px'
    })
}