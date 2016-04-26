var num;
function mainDivDraw() {
        mainDiv = warpDiv.append('div').style({
            'position': 'absolute',
            'width': mainDivSize[0] + 'px',
            'height': mainDivSize[1] + 'px',
            'left': mainDivSize[2] + 'px',
            'top': mainDivSize[3] + 'px',
            'z-index' : '1'
        });
        //当前账号div
        mainDiv.append('h4').style({
            'color': '#6094ce',
            'border-left': '3px solid #6094ce',
            'padding-left': '11px',
            'font-weight': 'bold',
            'font-size': '21px'
        }).html('当前账号');

        for (var i = 0; i < 6; i++) {
            var singleDiv = mainDiv.append('div').html(accountID[i])
                .style({
                    'position': 'absolute',
                    'left': calculate + 'px',
                    'top': '50px',
                    'font-size': '18px',
                    'color': 'white'
                });
            idDiv1.push(singleDiv);
            calculate += plusNum;
        }
        calculate = plusNum*5 + 10;
        operateImg[0] = [];
        operateImg[0].push(mainDiv.append('img').attr({
            src: 'img/02---01_07.png'
        }).attr('id',0).style({
            'position': 'absolute',
            'left': calculate + 'px',
            'top': inputSize[2] + 3 + 'px',
            'z-index' : '1',
            'cursor' : 'pointer'
        }).on('click',function(){
            changeDiv.style({
                "opacity": 1.0,
                'z-index' : '1'
            })
        }));
        calculate = plusMun2*3;
        //两个button
        for (var i = 0; i < 2; i++) {
            var singleButton = mainDiv.append('button').style({
                'position': 'absolute',
                'width': buttonSize[0] + 'px',
                'height': buttonSize[1] + 'px',
                'left': calculate + 'px',
                'top': buttonSize[2] + 'px',
                'background-color': '#102032',
                'border': '0.5px solid black',
                'border-radius': '5px'
            }).html(buttonId[i]).style({
                'font-size': '15px',
                'color': 'white'
            });
            accounttButton.push(singleButton);
            calculate += 100;
        }
        calculate = 0;
        mainDiv.append('h4').style({
            'position': 'absolute',
            'color': '#6094ce',
            'border-left': '3px solid #6094ce',
            'padding-left': '11px',
            'top': '220px',
            'font-weight': 'bold',
            'font-size': '21px'
        }).html('用户列表');
        for (var i = 0 ; i < 6 ; i ++)　{
            var singleDiv = mainDiv.append('div').html(accountID[i])
                .style({
                    'position': 'absolute',
                    'left': calculate + 'px',
                    'top': '260px',
                    'font-size': '18px',
                    'color': 'white'
                });
            idDiv2.push(singleDiv);
            calculate += plusNum;
        }
        calculate = 0;
        operateImg[1] = [];
        for (var i = 0 ; i < userNum ; i ++) {
            calculate = 5*plusNum;
            operateImg[0].push(mainDiv.append('img').attr({
                src: 'img/02---01_07.png'
            }).attr('id',i+1).style({
                'position': 'absolute',
                'left': calculate + 10 + 'px',
                'top': paddingInput + 3 + 'px',
                'z-index' : '1',
                'cursor' : 'pointer'
            }).on('click',function(){
                changeDiv.style({
                    "opacity": 1.0,
                    'z-index' : '1'
                });
                    num = d3.select(this).attr('id');
                    for(var j = 0 ; j< 5 ; j++) {
						changeArrar.push(userListInput[num][j].property('value'));
                    if (j != 1) {
						changeInput[j].attr('value', userListInput[num][j].property('value'));
                        changeInput[j].property('value', userListInput[num][j].property('value'));
                    }
                    else {
                        if (userListInput[num][j].attr('value') == '网络管理员') {                      
							options[0].text('网络管理员').attr('value' , 0 ).style({
                            'font-size' : '16px',
                            'color': 'white'
							});
							options[1].text('运维管理员').attr('value' , 1).style({
                            'font-size' : '16px',
                            'color': 'white'
							});
							options[2].text('运维操作员').attr('value' , 2).style({
                            'font-size' : '16px',
                            'color': 'white'
							});
                        } else if (userListInput[num][j].attr('value') == '运维管理员') {
							options[0].text('运维管理员').attr('value' , 1 ).style({
                            'font-size' : '16px',
                            'color': 'white'
							});
							options[1].text('网络管理员').attr('value' , 0).style({
                            'font-size' : '16px',
                            'color': 'white'
							});
							options[2].text('运维操作员').attr('value' , 2).style({
                            'font-size' : '16px',
                            'color': 'white'
							});
                        } else {
							options[0].text('运维操作员').attr('value' , 2 ).style({
                            'font-size' : '16px',
                            'color': 'white'
							});
							options[1].text('网络管理员').attr('value' , 0).style({
                            'font-size' : '16px',
                            'color': 'white'
							});
							options[2].text('运维操管理').attr('value' , 1).style({
                            'font-size' : '16px',
                            'color': 'white'
							});
                        }

                    }
                }
            }));
           operateImg[1].push(mainDiv.append('img').attr({
                src: 'img/02---01_09.png'
            }).attr('id' , i).style({
                'position': 'absolute',
                'left': calculate + 70 + 'px',
                'top': paddingInput + 3 + 'px',
                'z-index' : '1',
                'cursor' : 'pointer'
            }).on('click',function(){
                deleteDiv.style({
                    "opacity": 1.0,
                    'z-index' : '1'
                });
                deleteNum = d3.select(this).attr('id');
                sureDiv = deleteDiv.append('div')
                    .html('确定删除用户' + userListInput[parseInt(deleteNum) + 1][0].attr('value') + '?')
                    .style({
                        'position' : 'absolute',
                        'left' : '160px',
                        'top' : '70px',
                        'font-size' : '20px',
                        'color': 'white'
                    });
            }));
            paddingInput += plusMun3;
        }
        calculate = 0;
        paddingInput = 315;
    }
