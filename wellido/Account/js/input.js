/**
 * Created by Thinkpad3 on 2016/3/24.
 */
//画inputs
    function inputDraw() {
        //当前账号div里lable和input
		 userListInput[0] = [];
        for (var i = 0; i < 5; i++) {
            var singleInput = mainDiv.append('input').style({
                'position': 'absolute',
                'width': inputSize[0] + 'px',
                'height': inputSize[1] + 'px',
                'background-color': 'black',
                'border': '1px solid gray',
                'font-size': '16px',
                'padding-left': '20px',
                'color': 'white',
                'left': calculate + 'px',
                'top': inputSize[2] + 'px',
                'border-radius': '5px'
            });
            calculate += plusNum;
            userListInput[0].push(singleInput);
        }
        calculate = 0;
        for (var i = 0; i < 3; i++) {
            var singleInput = mainDiv.append('input').style({
                'position': 'absolute',
                'width': input2Size[0] + 'px',
                'height': input2Size[1] + 'px',
                'background-color': 'black',
                'border': '1px solid gray',
                'font-size': '16px',
                'padding-left': '20px',
                'color': 'white',
                'left': calculate + 'px',
                'top': input2Size[2] + 'px',
                'border-radius': '5px',
                'border-left': 'transparent',
                'border-right': 'transparent',
                'border-top': 'transparent'
            });
            calculate += plusMun2;
            accountInputs2.push(singleInput);
        }
        calculate = 0;
        for (var i = 1 ; i <= userNum ; i ++) {
            userListInput[i] = [];
            for (var j = 0 ; j < 5 ; j ++) {
                var singleInput = mainDiv.append('input').style({
                    'position': 'absolute',
                    'width': inputSize[0] + 'px',
                    'height': inputSize[1] + 'px',
                    'background-color': 'black',
                    'border': '1px solid gray',
                    'font-size': '16px',
                    'padding-left': '20px',
                    'color': 'white',
                    'left': calculate + 'px',
                    'top': paddingInput + 'px',
                    'border-radius': '5px'
                });

                 if(j == 0){singleInput.attr('value',datas.users[i-1].username);}
                else if(j == 1){singleInput.attr('value',datas.users[i-1].role_name);}
                else if(j == 2){singleInput.attr('value',datas.users[i-1].last_name + datas.users[i-1].first_name);}
                else if(j == 3){singleInput.attr('value',datas.users[i-1].dept);}
                else if(j == 4){singleInput.attr('value',datas.users[i-1].email);}
                calculate += plusNum;
                userListInput[i].push(singleInput);
            }
            paddingInput += plusMun3;
            calculate = 0;
        }
        paddingInput = 315;
    }
 
