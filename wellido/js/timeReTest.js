
/**
 * Created by Thinkpad3 on 2016/3/10.
 */
var simulateData = {
    'csrfmiddlewaretoken': 'RAFAfBHNzbmebeDooNMSs2jrgVcNaAeU',
    'endpoint': "/zh-cn/stat/task/app2/cap/intf6/",
    'app_name':'app2',
    'metric': "",
    'search_mode': 'normal',
    'scope':'capture',
    'cap_name':'intf6',
    'earliest': '1457312940.0',
    'latest': '1457313840.0',
    'dim_trans_type': '*',
    'dim_sub_trans_type': '*'
}

//查询参数接收

var responseData = {};
function reciveData(sendData) {
    responseData.csrfmiddlewaretoken = sendData.csrfmiddlewaretoken;
    responseData.endpoint = sendData.endpoint;
    responseData.app_name = sendData.app_name;
    responseData.metric = sendData.metric;
    responseData.app_name = sendData.app_name;
    responseData.search_mode = sendData.search_mode;
    responseData.scope = sendData.scope;
    responseData.cap_name = sendData.cap_name;
    responseData.earliest = sendData.earliest;
    responseData.latest = sendData.latest;
    responseData.dim_trans_type = sendData.dim_trans_type;
    responseData.dim_sub_trans_type = sendData.dim_sub_trans_type;
}
reciveData(simulateData);
responseData.search = 'duration';

//时间格式�?
function timeFormat(time){
    var xTime1 = new Date(time*1000).toLocaleString();
    return(xTime1);
}

//画图数据接收
var temporaryData;
var paintData = {};
d3.json(responseData.endpoint)
    .header("Content-Type", "application/x-www-form-urlencoded")
    .post("search=rr_rate&endpoint=/zh-cn/stat/task/app2/cap/intf6/&app_name=app2&search_mode=normal&scope=capturer&cap_name=intf6&earliest=1457407519.0&latest=1457407769.0&dim_trans_type=*&dim_sub_trans_type=*&metric=1", function (e, datas) {
        if(datas['ok']) {
            d3.json(responseData.endpoint +  datas.job_id + "/")
                .header("Content-Type", "application/x-www-form-urlencoded")
                .post("csrfmiddlewaretoken=" + responseData.csrfmiddlewaretoken,
                    function(e,result) {
                        if(result.status.isDone) {
                            temporaryData = result.results;
                            for (var i = 0;i < temporaryData.length;i++) {
                                paintData.push({'x' : timeFormat(temporaryData.time),
                                    'y' :  temporaryData.duration});

                            }
                        }
                    })
        }
    });

