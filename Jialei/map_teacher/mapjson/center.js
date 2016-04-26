function centerbox(coordinates,id){
    if(id=='he_bei'){
		console.log(coordinates);
		coordinates[0]=116.23;
		coordinates[1]=39.74;
	}
	if(id=='shan_dong'){
		console.log(coordinates);
		coordinates[0]=119.00;
		coordinates[1]=36.40;
	}
	if(id=='hei_long_jiang'){
		console.log(coordinates);
		coordinates[0]=127.92;
		coordinates[1]=49.50;
	}
	if(id=='yun_nai'){
		console.log(coordinates);
		coordinates[0]=127.92;
		coordinates[1]=49.50;
	}
	return coordinates;
}