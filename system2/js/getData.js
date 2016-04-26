//获取用户列表
function reciveData() {

    d3.json("/zh-cn/accounts/manage/")
        .header("Content-Type", "application/json")
        .get(datas, function (e, data) {
            var cpuDivSize = [0.763 * bodyX, 380, 200, 290];
            var smallCpuSize = [140, 120, 1, 1];
            datas = data;
            userNum = datas.users.length;
            mainDivDraw();
            inputDraw();
			restart();
            leftImgButton();
            rightImgButton();
            changeDivDraw();
            deleteDivDraw();
            about();
            cpuSelect();
            cpu(warpDiv, cpuDivSize, cpuDivSize[0] - 10, cpuDivSize[1] - 10, svgNum);
            svgNum++;
            cpu(d3.select('#piceDiv'), smallCpuSize, smallCpuSize[0] - 10, smallCpuSize[1] - 10, svgNum);
            svgNum++;
            cpuData();
            cpuDiscribe();

            window.onresize = function () {
                bodyX = document.documentElement.clientWidth;//读总宽度
                plusNum = 0.132 * bodyX;
                plusMun2 = 0.198 * bodyX;
                autoDraw();
            }

        });
}