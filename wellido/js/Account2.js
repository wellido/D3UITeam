/**
 * Created by Thinkpad3 on 2016/3/24.
 */
var datas = {};
var test1;
function reciveData() {
    d3.json("/zh-cn/accounts/manage/")
        .header("Content-Type", "application/x-www-form-urlencoded")
        .post(datas,function(e,data){
            datas = data;
			Account();
        });	
	//alert(datas.users);		
}
reciveData();
function Account() {
    var bodyX = document.documentElement.clientWidth;//读总宽度
    //var bodyY = document.documentElement.clientHeight;//读总高度
    //var totalSize = [1440 , 900];//总体大小
    var mainDivSize = [0.766*bodyX , 700 , 0.118*bodyX , 30];//mainDiv大小
    var calculate = 0;
    var plusNum = 0.132*bodyX;
    var plusMun2 = 0.198*bodyX;
    var paddingInput = 315;
    var plusMun3 = 45;
    var accountID = ['ID' , '角色' , '姓名' , '部门' , '邮箱' , '操作'];
    var buttonId = ['提交' , '重置'];
    var mainDiv;
    var operateImg = [];//2*9二重数组
    var accountInputs = [];
    var accountInputs2 = [];
    var userListInput = [];//userNum*5二重数组
    var accounttButton = [];
    var imgButton = [];
    var imgButtonPos = [[160,'img/02---01_03.png'] ,
                        [254,'img/02---02_03.png'] ,
                        [348,'img/02---01_01.png'] ,
                        [550,'img/02---00_03.png'] ,
                        [635,'img/02---00_05.png'] ];
    var imgButtonSize = [137 , 94];
    var inputSize = [0.121*bodyX , 38 , 85];
    var input2Size = [0.17*bodyX , 40 , 145];
    var buttonSize = [0.059*bodyX , 38 , 145];
    var userNum = datas.users.length;
	
    d3.select('body').style('background-color' , 'black');
    //定义warpDiv
    var warpDiv = d3.select('body').append('div').style({
        'width' : bodyX + 'px',
        'height' : '900px'
    });
	
    //mainDiv作图
    function mainDivDraw() {
        mainDiv = warpDiv.append('div').style({
            'position': 'absolute',
            'width': mainDivSize[0] + 'px',
            'height': mainDivSize[1] + 'px',
            'left': mainDivSize[2] + 'px',
            'top': mainDivSize[3] + 'px'
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
            mainDiv.append('div').html(accountID[i])
                .style({
                    'position': 'absolute',
                    'left': calculate + 'px',
                    'top': '50px',
                    'font-size': '18px',
                    'color': 'white'
                });
            calculate += plusNum;
        }
        calculate = plusNum*5 + 10;
        operateImg[0] = [];
        operateImg[0].push(mainDiv.append('img').attr({
            src: 'img/02---01_07.png'
        }).style({
            'position': 'absolute',
            'left': calculate + 'px',
            'top': inputSize[2] + 3 + 'px',
            'z-index' : '1',
            'cursor' : 'pointer'
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
            mainDiv.append('div').html(accountID[i])
                .style({
                    'position': 'absolute',
                    'left': calculate + 'px',
                    'top': '260px',
                    'font-size': '18px',
                    'color': 'white'
                });
            calculate += plusNum;
        }
        calculate = 0;
        operateImg[1] = [];
        for (var i = 0 ; i < userNum ; i ++) {
            calculate = 5*plusNum;
            operateImg[0].push(mainDiv.append('img').attr({
                src: 'img/02---01_07.png'
            }).style({
                'position': 'absolute',
                'left': calculate + 10 + 'px',
                'top': paddingInput + 3 + 'px',
                'z-index' : '1',
                'cursor' : 'pointer'
            }));
            operateImg[1].push(mainDiv.append('img').attr({
                src: 'img/02---01_09.png'
            }).style({
                'position': 'absolute',
                'left': calculate + 70 + 'px',
                'top': paddingInput + 3 + 'px',
                'z-index' : '1',
                'cursor' : 'pointer'
            }));
            paddingInput += plusMun3;
        }
        calculate = 0;
        paddingInput = 315;
    }
    //画inputs
    function inputDraw() {
        //当前账号div里lable和input
        for (var i = 0; i < 6; i++) {
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
            accountInputs.push(singleInput);
        }
        calculate = 0;
        accountInputs[5].remove();
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
        for (var i = 0 ; i < userNum ; i ++) {
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
					if(j == 0){singleInput.attr('value',datas.users[i].username);}
					else if(j == 1){singleInput.attr('value',datas.users[i].role_name);}
					else if(j == 2){singleInput.attr('value',datas.users[i].last_name + datas.users[i].first_name);}
					else if(j == 3){singleInput.attr('value',datas.users[i].dept);}
					else if(j == 4){singleInput.attr('value',datas.users[i].email);}
					
                calculate += plusNum;
                userListInput[i].push(singleInput);
            }
            paddingInput += plusMun3;
            calculate = 0;
        }
        paddingInput = 315;
    }
	
    //改变inputs
    function  inputChange() {
        for(var i = 0 ; i < 6 ; i++) {
            alert(accountInputs[i].style('left'));
            accountInputs[i].style({
                'width': inputSize[0] + 'px',
                'left': calculate + 'px'
            });
            alert(accountInputs[i].style('left') + '###');
            calculate += plusNum;
        }
        calculate = 0;
        for(var i = 0 ; i < 3 ; i++) {
            accountInputs2[i].style({
                'width': input2Size[0] + 'px',
                'left': calculate + 'px'
            });
            calculate += plusMun2;
        }
        calculate = 0;
        for(var i = 0 ; i < userNum ; i++) {
            for(var j = 0 ; j < 5 ; j++) {
                userListInput[i][j].style({
                    'width': inputSize[0] + 'px',
                    'left': calculate + 'px'

                });
                calculate += plusNum;
            }
            calculate = 0;
        }
    }
    //左边图片按钮
    function leftImgButton() {
        for (var i = 0 ; i < 3 ; i++) {
            var temporaryDiv = warpDiv.append('div').style({
                'position': 'absolute',
                'width': imgButtonSize[0] + 'px',
                'height': imgButtonSize[1] + 'px',
                'top': imgButtonPos[i][0] + 'px',
                'border': '1px solid gray',
                'z-index' : '0'
            });
            imgButton.push(temporaryDiv.append('img').attr({
                src: imgButtonPos[i][1]
            }).style({
                'width' : '136px',
                'height' : '93px',
                'cursor' : 'pointer',
                'z-index' : '0'
            }));
            if(i == 1) {
                temporaryDiv.style('background-color' , '#3469a4')
            }
        }
    }
    //右边图片按钮
    function rightImgButton() {
        for (var i = 3 ; i < 5 ; i++) {
            var temporaryDiv = warpDiv.append('div').style({
                'position': 'absolute',
                'width': '80px',
                'height': '80px',
                'top': imgButtonPos[i][0] + 'px',
                'right': '1px',
                'border': '1px solid gray'
            });
            imgButton.push(temporaryDiv.append('img').attr({
                src: imgButtonPos[i][1]
            }).style({
                'cursor' : 'pointer',
                'z-index' : '1'
            }));
            if(i == 1) {
                temporaryDiv.style('background-color' , '#3469a4')
            }
        }
    }
    mainDivDraw();
    inputDraw();
    leftImgButton();
    rightImgButton();
    window.onresize = function() {
        mainDiv.remove();
        accounttButton[0].remove();
        accounttButton[1].remove();
        operateImg = [];
        accountInputs = [];
        accountInputs2 = [];
        userListInput = [];
        accounttButton = [];
        bodyX = document.documentElement.clientWidth;//读总宽度
        mainDivSize = [0.766*bodyX , 700 , 0.118*bodyX , 30];//mainDiv大小
        plusNum = 0.132*bodyX;
        plusMun2 = 0.198*bodyX;
        inputSize[0] = 0.121*bodyX;
        input2Size[0] = 0.17*bodyX;
        mainDivDraw();
        inputDraw();
        //mainDiv.append(accountInputs);
    }
}
