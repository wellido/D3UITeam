function manageApps(){
	manageApp = d3.select('.manageA');
	var svg = manageApp.append('svg')
		.attr('viewBox', '0 1 50 50');
	
	var pathManage = svg.append('path');
	pathManage.attr('fill', '#ffffff');
	pathManage.attr('d', 'M25,12.514c-7.181,0-13.003,5.822-13.003,13.003c0,7.181,5.822,13.003,13.003,13.003s13.003-5.822,13.003-13.003C38.003,18.336,32.181,12.514,25,12.514z M25,36.889c-5.962,0-11.372-5.409-11.372-11.372c0-5.962,5.409-11.372,11.372-11.372s11.372,5.409,11.372,11.372C36.372,31.479,30.962,36.889,25,36.889z');
	
	var gManage = svg.append('g')
	gManage.attr('fill', '#ffffff');
	
	gManage.append('path')
		.attr('fill', '#ffffff')
		.attr('d','M24.805,31.243v-3.826c-0.222,0.058-0.455,0.088-0.696,0.088c-1.525,0-2.762-1.236-2.762-2.762c0-1.525,1.237-2.762,2.762-2.762c1.526,0,2.762,1.237,2.762,2.762c0,0.332-0.059,0.65-0.166,0.945h3.886V23.41h-1.612c-0.111-0.398-0.269-0.789-0.469-1.142l1.152-1.157l-1.915-1.917l-1.146,1.151c-0.358-0.203-0.745-0.364-1.143-0.475v-1.637h-2.699v1.646c-0.398,0.111-0.777,0.267-1.125,0.464l-1.157-1.152l-1.917,1.915l1.151,1.162c-0.2,0.353-0.36,0.744-0.471,1.142h-1.659v2.699h1.659c0.111,0.398,0.269,0.773,0.469,1.126l-1.152,1.149l1.915,1.913l1.162-1.153c0.348,0.197,0.727,0.353,1.125,0.464v1.634L24.805,31.243L24.805,31.243z M24.805,31.243');
	gManage.append('path')
		.attr('fill', '#ffffff')
		.attr('d','M25.35,26.288v6.513h8.002v-6.513H25.35L25.35,26.288z M27.259,31.546h-0.706v-0.625h0.706V31.546L27.259,31.546z M27.259,29.857h-0.706v-0.624h0.706V29.857L27.259,29.857z M27.259,28.169h-0.706v-0.624h0.706V28.169L27.259,28.169z M32.148,31.546h-4.344v-0.625h4.344V31.546L32.148,31.546z M32.148,29.857h-4.344v-0.624h4.344V29.857L32.148,29.857z M32.148,28.169h-4.344v-0.624h4.344V28.169L32.148,28.169z M32.148,28.169');


}
