function autoDraw() {
        calculate = 0;
        mainDiv.style({
            'left' : 0.118*bodyX + 'px',
            'width' : 0.766*bodyX + 'px'
        });
        for(var i = 0 ; i < 6 ; i ++) {
            idDiv1[i].style('left',calculate + 'px');
            idDiv2[i].style('left',calculate + 'px');
            calculate += plusNum;
        }
        calculate = plusNum*5 + 10;
        for(var i = 0 ; i < operateImg[0].length ; i++ ) {
            operateImg[0][i].style('left',calculate + 'px');
        }
        for(var i = 0 ; i < operateImg[1].length ; i++) {
            operateImg[1][i].style('left',calculate+ 70 + 'px');
        }
        calculate = 0;
        for (var i = 0; i < 3; i++) {
            accountInputs2[i].style({
                'left': calculate + 'px',
                'width' : 0.17*bodyX + 'px'
            });
            calculate += plusMun2;
        }
        calculate = plusMun2*3;
        accounttButton[0].style('left' , calculate + 'px');
        accounttButton[1].style('left' , calculate + 100 + 'px');
        calculate = 0 ;
        for(var i = 0 ; i < (userNum + 1)  ; i ++) {
            for (var j = 0 ; j < 5 ; j ++) {
                userListInput[i][j].style({
                    'left': calculate + 'px',
                    'width' : 0.121*bodyX + 'px'
                });
                calculate += plusNum;
            }
            calculate = 0;
        }
        if(bodyX > 980){changeDivPos[2] = bodyX - 880;}
        else {changeDivPos[2] = 100;}
        changeDiv.style({
            'left' : changeDivPos[2] + 'px'
        })
        if(bodyX > 1020){deleteDivPos[2] = bodyX - 920;}
        else {deleteDivPos[2] = 100;}
        deleteDiv.style({
            'left' : deleteDivPos[2] + 'px'
        })
    }