window.onload = function(){
	var contentFoot = d3.select('body')
		.append('div')
		.style('min-width','515px');
	
	var contenTable = contentFoot.append('table')
		.attr('cellpadding', 0)
		.attr('cellspacing', 0);
	
	var number = [2,10,2,1];
	/*基线告警*/
	var baselineAlarm1 = contenTable.append('tr');
	var baLink = baselineAlarm1.append('a')
		.attr('href','#')
		.style('display','block');
	baLink.append('td').html('基线告警');
	baLink.append('td').html('2');
	
	/*预警*/
	var alert2 = contenTable.append('tr');
	var alertLink = alert2.append('a')
		.attr('href','#')
		.style('display','block');
	alertLink.append('td').html('预警');
	alertLink.append('td').html('0');
	
	/*定位告警*/
	var locationAlarm3 = contenTable.append('tr');
	var laLink = locationAlarm3.append('a')
		.attr('href','#')
		.style('display','block');
	laLink.append('td').html('定位告警');
	laLink.append('td').html('0');
	
	/*系统告警*/
	var lsystemAlarm4 = contenTable.append('tr');
	var lsaLink = lsystemAlarm4.append('a')
		.attr('href','#')
		.style('display','block');
	lsaLink.append('td').html('系统告警');
	lsaLink.append('td').html('0');
}
