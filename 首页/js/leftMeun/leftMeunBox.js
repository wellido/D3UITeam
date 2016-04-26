function leftMuens(){
	loadContent();
	getApps();
}

function loadContent(){
	navigation = d3.select('#leftMeun');
	var navUl = navigation.append('ul')
		.attr('class','navOneLi');
	
	/*告警*/
	var alert1 = navUl.append('li')
		.attr('id','alert1');
	var alert = alert1.append('a')
		.attr('class','alertA meun');
	alertSVG();
	alert.append('lable')
		.style('color','white')
		.style('display','block')
		.style('text-align','center')
		.style('overflow','hidden')
		.style('margin-top','7px')
		.style('padding-right','50px')
		.html('告警');
	
	/*服务路径图*/
	var servicePath2 = navUl.append('li')
		.attr('id','servicePath2');
	var servicePath = servicePath2.append('a')
		.attr('class','servicePathA meun');
	servicePathSVG();
	servicePath.append('lable')
		.style('color','white')
		.style('display','block')
		.style('text-align','center')
		.style('overflow','hidden')
		.style('margin-top','7px')
		.style('padding-right','39px')
		.html('服务路径图');
	
	 
	 
	/*业务分布*/
	var businessDistribution3 = navUl.append('li')
		.attr('id','businessDistribution3');
	var businessDistribution = businessDistribution3.append('a')
		.attr('class','active businessDistribution3A meun');
	businessDistributionSVG();
	businessDistribution.append('lable')
		.style('color','white')
		.style('display','block')
		.style('text-align','center')
		.style('overflow','hidden')
		.style('margin-top','7px')
		.style('padding-right','40px')
		.html('业务分布');
		
	/*地域分布*/
	var region4 = navUl.append('li')
		.attr('id','region4');
	var region = region4.append('a')
		.attr('class','regionA meun');
	regionSVG();
	region.append('lable')
		.style('color','white')
		.style('display','block')
		.style('text-align','center')
		.style('overflow','hidden')
		.style('margin-top','7px')
		.style('padding-right','40px')
		.html('地域分布');	
}

function getApps(){	
	var bdMeunTitle = [];//第一级获取数据拼接的数组
	var newMeunTitle = [];//第二级获取数据拼接的数组
	var newtitle3 = [];//第三级获取数据拼接的数字
		
	/*载入业务与交易信息*/
	d3.json('/zh-cn/appsinfo/')
		.header("Content-Type", "application/x-www-form-urlencoded")
		.post("", function(e,data){
			if(data != null){
				for(var i = 0; i < data.apps.length; i++){
					var app = data.apps[i];
					var bdMeun = d3.select("#businessDistribution3").append('ul')
						.style('display','block')
						.attr('class','testul');
					for(var j= 0; j< app.disp_name.length; j++){
						//业务分布二级菜单
							var bdmeuntwo1 = bdMeun.append('li');
							var bdmeuntowA = bdmeuntwo1.append('a')
								.html(app.disp_name);	
							//var hr = bdmeuntwo1.append('hr');
							
							var bdnewMeun = bdmeuntwo1.append('ul')
									.attr('class','twoMeun2 twoMeuns2');
								for(var j = 0; j < app.intfs.length; j++){
									var intf = app.intfs[j];
									var bdnewMeunthree = bdnewMeun.append('li');
									var bdnewMeunthreeA = bdnewMeunthree.append('a')
										.html(intf.disp_name);
										
									//三级菜单栏
									var bdnewMeun2 = bdnewMeunthree.append('ul')
										.style('display','none')
										.attr('class','four_ul twoMeun2 ');
									if (intf.dimensions != null) {
										for(var k = 0; k < intf.dimensions.length; k++){
											var intfs_name = intf.dimensions[k];
											var bdnewMeunthree = bdnewMeun2.append('li');
											var bdnewMeunthreeA2 = bdnewMeunthree.append('a')
												.html(intfs_name.disp_name);
										}
									}
									
								}
							
					}
				}
				
				$(".navigationBox ul li").menu();
			}
		});	
		
}

//function changeMenu(){
//	
//}
