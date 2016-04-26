/**
 * Created by Thinkpad3 on 2016/3/24.
 */
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
	var changeInputID = ['ID' , '角色' , '姓名' , '部门' , '邮箱' , '密码' , '确认密码'];
	var changeInputID = ['ID' , '角色' , '姓名' , '部门' , '邮箱' , '密码' , '确认密码'];
    var mainDiv;
    var operateImg = [];//2*9二重数组
    var accountInputs = [];
    var accountInputs2 = [];
    var userListInput = [];//8*5二重数组
    var accounttButton = [];
    var imgButton = [];
	var idDiv1 = [];
    var idDiv2 = [];
	var changeDiv;
    var deleteDiv;
    var changeDivPos = [0.361*bodyX , 610 , 0.32*bodyX , 145];
    var deleteDivPos = [600 , 250 , 0.284*bodyX , 275];
    var changeInput = [];
    var imgButtonPos = [[160,'img/02---01_03.png'] ,
                        [254,'img/02---02_03.png'] ,
                        [348,'img/02---01_01.png'] ,
                        [550,'img/02---00_03.png'] ,
                        [635,'img/02---00_05.png'] ];
    var imgButtonSize = [137 , 94];
    var inputSize = [0.121*bodyX , 38 , 85];
    var input2Size = [0.17*bodyX , 40 , 145];
    var buttonSize = [0.059*bodyX , 38 , 145];
    var datas = {};
    var userNum;
	var deleteNum;
    var sureDiv;
	var changeArrar = [];

    d3.select('body').style('background-color' , 'black');
    //定义warpDiv
    var warpDiv = d3.select('body').append('div').style({
        'width' : bodyX + 'px',
        'height' : '900px'
    });
  reciveData();

