/**
 * Created by Thinkpad3 on 2016/3/25.
 */
function reciveData() {
    var datas = {};
    d3.json("/zh-cn/accounts/manage/")
        .header("Content-Type", "application/x-www-form-urlencoded")
        .post(datas,function(e,data){
            datas = data;
        });
    return datas;
}
reciveData();