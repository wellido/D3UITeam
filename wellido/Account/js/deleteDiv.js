//画删除Div
    var confirmButton;
    var cancelButton2;
    function deleteDivDraw(){
        deleteDiv = warpDiv.append('div').style({
            'background-color': '#1a1a1a',
            'position': 'absolute',
            'width':  deleteDivPos[0] + 'px',
            'height': deleteDivPos[1] + 'px',
            'left': deleteDivPos[2] + 'px',
            'top': deleteDivPos[3] + 'px',
            'border': '0.5px solid gray',
            "opacity": 0.0,
            'z-index' : '0'
        });
        confirmButton = deleteDiv.append('div').style({
            'width': '95px',
            'height': '40px',
            'text-align': 'center',
            'font-weight': 'bold',
            'border-bottom': '4px solid #2b94b2'
        }).html('确定')
            .style({
                'position': 'absolute',
                'left': '160px',
                'top': '137px',
                'font-size': '23px',
                'color': 'white',
                'cursor' : 'pointer'
            }).on('mouseover', function(){
                d3.select(this).style('background-color' , '#2b94b2');
            }).on('mouseout',function(){
                d3.select(this).style({
                    'background-color' : '#1a1a1a',
                    'border-bottom': '4px solid #2b94b2'
                });
            }).on('click' , function() {
                d3.json("/zh-cn/accounts/delete/" + userListInput[parseInt(deleteNum) + 1][0].attr('value') + '/')
                    .header("Content-Type", "application/x-www-form-urlencoded")
                    .post();
				deleteDiv.style({
                    "opacity": 0.0,
                    'z-index' : '0'
                });
				sureDiv.html('');
                for(var i = 0 ; i < 5 ; i ++) {
                    userListInput[parseInt(deleteNum) + 1][i].remove();
                }
                operateImg[1][parseInt(deleteNum)].remove();
                operateImg[0][parseInt(deleteNum) + 1].remove();
                paddingInput = paddingInput + deleteNum*plusMun3;
                for(var i = (parseInt(deleteNum) + 1) ; i < userNum ; i++) {
                    userListInput[i] = userListInput[i + 1];
                    for(var j = 0 ; j < 5 ; j ++) {
                        userListInput[i][j].style('top' , paddingInput + 'px' );
                    }
					operateImg[0][i] = operateImg[0][i + 1];
					operateImg[0][i].style('top' , paddingInput + 'px' );
					operateImg[0][i].attr('id' , i);
					operateImg[1][i - 1] = operateImg[1][i];
					operateImg[1][i - 1].style('top' , paddingInput + 'px');
					operateImg[1][i - 1].attr('id' , i-1);
                    paddingInput += plusMun3;
                }
                paddingInput = 315;
				userNum -= 1;
            });
        cancelButton2 = deleteDiv.append('div').style({
            'width': '95px',
            'height': '40px',
            'text-align': 'center',
            'font-weight': 'bold',
            'border-bottom': '4px solid #2b94b2'
        }).html('取消')
            .style({
                'position': 'absolute',
                'left': '315px',
                'top': '137px',
                'font-size': '23px',
                'color': 'white',
                'cursor' : 'pointer'
            }).on('mouseover', function(){
                d3.select(this).style('background-color' , '#2b94b2');
            }).on('mouseout',function(){
                d3.select(this).style({
                    'background-color' : '#1a1a1a',
                    'border-bottom': '4px solid #2b94b2'
                });
            }).on('click',function(){
                deleteDiv.style({
                    "opacity": 0.0,
                    'z-index' : '0'
                });
				 sureDiv.html('');
            });
    }
