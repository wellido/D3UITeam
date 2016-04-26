var bodyX = document.documentElement.clientWidth;//读总宽度
//间距计算
var calculate = 0;
var plusNum = 0.132 * bodyX;
var plusMun2 = 0.198 * bodyX;
var paddingInput = 315;
var plusMun3 = 45;
var divs = [, d3.select('#cpuSelectDiv')];
var operateImg = [];//2*userNum二重数组
var accountInputs2 = [];
var userListInput = [];//userNum*5二重数组
var accounttButton = [];
var imgButton = [];
var idDiv1 = [];
var idDiv2 = [];
var changeInput = [];
var datas = {};
var userNum;//用户总数
var deleteNum;//当前删除用户index
var svgNum = 0;

d3.select('body').style('background-color', 'black');
//定义warpDiv
var warpDiv = d3.select('body').append('div').style({
    'width': bodyX + 'px',
    'height': '900px'
});
reciveData();

