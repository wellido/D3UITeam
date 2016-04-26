function reciveData() {
    d3.json("/zh-cn/accounts/manage/")
        .header("Content-Type", "application/x-www-form-urlencoded")
        .post(datas,function(e,data){
            datas = data;
            userNum = datas.users.length;
            mainDivDraw();
		    inputDraw();
		    leftImgButton();
		    rightImgButton();
            changeDivDraw();
			deleteDivDraw();
    window.onresize = function() {
        bodyX = document.documentElement.clientWidth;//读总宽度
        plusNum = 0.132*bodyX;
        plusMun2 = 0.198*bodyX;
        autoDraw();
    }

        });
}