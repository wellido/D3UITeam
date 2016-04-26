//修改资料模块
var options = [];
function changeDivDraw() {
    var changeDivPos = [0.361 * bodyX, 610, 0.32 * bodyX, 145];
    var selectID = ['网络管理员', '运维管理员', '运维操作员'];
    paddingInput = 60;
    if (bodyX > 980) {
        changeDivPos[2] = bodyX - 880;
    }
    else {
        changeDivPos[2] = 100;
    }
    var changeDiv = warpDiv.append('div').style({
        'background-color': '#1a1a1a',
        'position': 'absolute',
        'width': '520px',
        'height': changeDivPos[1] + 'px',
        'left': changeDivPos[2] + 'px',
        'top': 0.118 * bodyX + 'px',
        'border': '0.5px solid gray',
        "opacity": 0.0,
        'z-index': '0'
    }).attr('id', 'changeDiv');
    var changeInputID = ['ID', '角色', '姓名', '部门', '邮箱', '密码', '确认密码'];
    for (var i = 0; i < 7; i++) {
        changeDiv.append('div').style({
            'width': '95px',
            'height': '35px',
            'text-align': 'right',
            'font-weight': 'bold'
        }).html(changeInputID[i])
            .style({
                'position': 'absolute',
                'left': '40px',
                'top': paddingInput + 'px',
                'font-size': '20px',
                'color': 'gray'
            });
        var singleInput = changeDiv.append('input').attr('id', 'cI' + i).style({
            'position': 'absolute',
            'width': '275px',
            'height': '35px',
            'border': '1px solid gray',
            'font-size': '16px',
            'padding-left': '20px',
            'background-color': '#1a1a1a',
            'color': 'white',
            'left': '155px',
            'top': paddingInput - 5 + 'px',
            'border-left': 'transparent',
            'border-right': 'transparent',
            'border-top': 'transparent'
        });
        changeInput.push(singleInput);
        paddingInput += 65;
    }
    changeInput[1].remove();
    paddingInput += 10;
    var changeSelect = changeDiv.append('select').attr('id', 'roleSelect')
        .style({
            'position': 'absolute',
            'width': '275px',
            'height': '35px',
            'left': '155px',
            'top': '130px',
            'appearance': 'none',
            '-webkit-appearance': 'none',
            'background-color': '#1a1a1a',
            'background-repeat': 'no-repeat',
            'border': '1px solid #1a1a1a',
            'border-bottom': '1px solid gray',
            'font-size': '16px',
            'color': 'white',
            'padding-left': '20px'

        });
    for (var i = 0; i < 3; i++) {
        var option = changeSelect.append('option').attr('value', i)
            .text(selectID[i]).style({
                'font-size': '16px',
                'color': 'white'
            });
        options.push(option);
    }
    var changeInfo1 = {};
    var saveButton = changeDiv.append('div').style({
        'width': '95px',
        'height': '40px',
        'text-align': 'center',
        'font-weight': 'bold',
        'border-bottom': '4px solid #2b94b2'
    }).html('保存')
        .style({
            'position': 'absolute',
            'left': '160px',
            'top': paddingInput + 'px',
            'font-size': '23px',
            'color': 'white',
            'cursor': 'pointer'
        }).on('mouseover', function () {
            d3.select(this).style('background-color', '#2b94b2');
        }).on('mouseout', function () {
            d3.select(this).style({
                'background-color': '#1a1a1a',
                'border-bottom': '4px solid #2b94b2'
            });
        }).on('click', function () {
            role = d3.select("#roleSelect").property("value");
            oldUser = d3.select("#cI0").attr('value');
            changeInfo1.username = oldUser;
            changeInfo1.last_name = d3.select("#cI2").property("value");
            changeInfo1.dept = d3.select("#cI3").property("value");
            changeInfo1.email = d3.select("#cI4").property("value");
            changeInfo1.role = parseInt(d3.select("#roleSelect").property("value")) + 1;
            changeInfo1.password1 = d3.select("#cI5").property("value");
            changeInfo1.password2 = d3.select("#cI6").property("value");
            var jsonInfo = JSON.stringify(changeInfo1);
            d3.json("/zh-cn/accounts/userinfo/change/" + oldUser)
                .header("Content-Type", "application/json")
                .post("csrfmiddlewaretoken=X5eWPeeGme3RjP0Zn6Jbv9t9yw2sNdgH"
                    + "&username=" + changeInfo1.username
                    + "&password1=" + changeInfo1.password1
                    + "&password2=" + changeInfo1.password2
                    + "&last_name=" + changeInfo1.last_name
                    + "&dept=" + changeInfo1.dept
                    + "&email=" + changeInfo1.email
                    + "&role=" + changeInfo1.role);
            if (changeInfo1.role == 1) {
                propertyRole = '网络管理员';
            }
            else if (changeInfo1.role == 2) {
                propertyRole = '运维管理员';
            }
            else {
                propertyRole = '运维操作员';
            }
            userListInput[num][0].attr('value', changeInfo1.username);
            userListInput[num][1].attr('value', propertyRole);
            userListInput[num][2].attr('value', changeInfo1.last_name);
            userListInput[num][3].attr('value', changeInfo1.dept);
            userListInput[num][4].attr('value', changeInfo1.email);

            changeDiv.style({
                "opacity": 0.0,
                'z-index': '0'
            });

        });
    var cancelButton = changeDiv.append('div').style({
        'width': '95px',
        'height': '40px',
        'text-align': 'center',
        'font-weight': 'bold',
        'border-bottom': '4px solid #2b94b2'
    }).html('取消')
        .style({
            'position': 'absolute',
            'left': '310px',
            'top': paddingInput + 'px',
            'font-size': '23px',
            'color': 'white',
            'cursor': 'pointer'
        }).on('mouseover', function () {
            d3.select(this).style('background-color', '#2b94b2');
        }).on('mouseout', function () {
            d3.select(this).style({
                'background-color': '#1a1a1a',
                'border-bottom': '4px solid #2b94b2'
            });
        }).on('click', function () {
            changeDiv.style({
                "opacity": 0.0,
                'z-index': '0'
            });
            for (var i = 0; i < 7; i++) {
                if (i != 1) {
                    changeInput[i].property('value', '');
                }
            }
        });
    paddingInput = 315;
}