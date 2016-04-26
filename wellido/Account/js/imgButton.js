/**
 * Created by Thinkpad3 on 2016/3/24.
 */
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
   