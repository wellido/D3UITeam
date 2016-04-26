window.onload = function(){
	var contentBox = d3.select('body')
		.append('div')
		.attr('class','color-white text-center');
	/* start logo */
	var contHader = contentBox.append('div');
	var hLogo = contHader.append('span')
		.attr('class','col-md-4 headerTitle');
	var logoTitle = hLogo.append('h2')
		.attr('class','lh-55')
		.html('宇宙银行健康态势图');
	/* end logo */
	
	/* start 时间和菜单栏 */
	var temp_time = '';
	var common_sys_time = '';
	d3.json('/zh-cn/basisinfo/')
		.header("Content-Type", "application/x-www-form-urlencoded")
		.post("", function(e, data) {
			common_sys_time = data.time;
			var date = new Date();
            var sys_time = data.time;
            var now_time = date.getTime()/1000;
            temp_time = now_time - sys_time;
		});
	setInterval(function(){
        var date = new Date();
        var html_time = ts2str(date.getTime()/1000 - temp_time);
        $('#sys-time').html(html_time);
    },1000);
	var hMeun = contHader.append('span')
		.attr('class','col-md-8 text-right headrMeun');
	var hmTime = hMeun.append('span')
		.attr('id','sys-time')
		.attr('class','titleTime')
		/*.html('2016-04-15&nbsp;13:45:20');*/
	
	/*var hmMeun = hMeun.append('div')*/
		/*.attr('class','col-lg-4')*/;
	var ulBox = hMeun.append('ul')
		.attr('class','pull-right');
	var li1 = ulBox.append('li')
		.attr('class','meunLi');
	var system = li1.append('a')
		.attr('class','systemA')
		.attr('title','系统 操作')
		.attr('href','javascript:void(0);')
		.style('display','block')
		.style('text-decoration',' none');
	systems();
	var li2 = ulBox.append('li')
		.attr('class','meunLi');
	var manageApp = li2.append('a')
		.attr('class','manageA')
		.attr('title','用户管理')
		.attr('href','../system2/Account2.html')
		.style('display','block')
		.style('text-decoration',' none');
	manageApps();
	
	var li3 = ulBox.append('li')
		.attr('class','meunLi');
	var restart = li3.append('a')
		.attr('class','restartA')
		.attr('title','重新启动 ')
		.attr('href','javascript:void(0);')
		.style('display','block')
		.style('text-decoration',' none');
	restarts();
	/* end 时间和菜单栏 */
	
	contentBox.append('div').attr('class','clear');/*清除浮动*/
	
	/*start 左边菜单栏*/
	var navigation = contentBox.append('div')
		.attr('id','leftMeun')
		.attr('class','navigationBox');
	leftMuens();
	/*end 左边菜单栏*/
	
	contentBox.append('div').attr('class','clear');/*清除浮动*/
	
	/* start 地图*/
	var full_screen = contentBox.append('div')
		.attr('id','full_screen_map')
		.attr('class','indexMap');
	Maps();
	/* end 地图*/
	
	/* start 右边 健康度和交易量 */
	var contRightMeun = contentBox.append('div')
		.attr('id','rightMeun')
		.attr('class','home_dashboard');
	contenRightMeun();
	/* end 右边 健康度和交易量 */
	
	/*基线告警、预警、定位告警、系统告警*/
	var contentFoot = contentBox.append('div')
		.attr('id','contentFootAlert')
		.attr('class','contfootAlert mt-42');
	contentFoots();
	
	/*时间轴*/
	var homeTime = contentBox.append('div')
		.attr('class','text-left foot-time mt-14');
	var container1 = homeTime.append('div')
		.attr('id','selectTime');
	aaa();
	var svg = homeTime.append('div')
		.attr('id','homeTime');
	hour_min();
}
