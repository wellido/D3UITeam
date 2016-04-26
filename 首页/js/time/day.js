function day (container){
  
  var form = container.append("form")//年月日时间框
   .attr("name","reg_testdate")
   .attr("class","index-form");

  form.append("select")
                 .attr("id","year")
                 .attr("name","YYYY")
                 .attr("onChange","YYYYDD(this.value)")
                 .append("option")
                 .attr("value","")
                 .html("请选 年");

  form.append("select")
                 .attr("id","month")
                 .attr("name","MM")
                 .attr("onChange","MMDD(this.value)")
                 .append("option")
                 .attr("value","")
                 .html("请选 月");
                 
  form.append("select")
                 .attr("id","day")
                 .attr("name","DD")
                 .append("option")
                 .attr("value","")
                 .html("请选 日");
				 
				 
  function YYYYMMDDstart(){   
                
  MonHead = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];   
                
                
  //先给年下拉框赋内容   
                
  var y  = new Date().getFullYear();  
                
  for (var i = (y-30); i < (y+30); i++){
	  
	//以今年为准，前30年，后30年   
    document.reg_testdate.YYYY.options.add(new Option(" "+ i +" 年", i));   
  }   
                
                
//赋月份的下拉框   
                
  for (var i = 1; i < 13; i++){
	
	document.reg_testdate.MM.options.add(new Option(" " + i + " 月", i)); 
	
  }   
      

  document.reg_testdate.YYYY.value = y;   
  document.reg_testdate.MM.value = new Date().getMonth() + 1;               

  var n = MonHead[new Date().getMonth()];   
                
  if (new Date().getMonth() ==1 && IsPinYear(YYYYvalue)){
	  
	n++;  
  } 
       
  writeDay(n); //赋日期下拉框Author:meizz   
    
  document.reg_testdate.DD.value = new Date().getDate();   
  };   

  YYYYMMDDstart();            

  function YYYYDD(str){ //年发生变化时日期发生变化(主要是判断闰平年)   
    var MMvalue = document.reg_testdate.MM.options[document.reg_testdate.MM.selectedIndex].value;   
      if (MMvalue == ""){ var e = document.reg_testdate.DD; optionsClear(e); return;}   
                
      var n = MonHead[MMvalue - 1];   
                
      if (MMvalue ==2 && IsPinYear(str)) n++;   
                
      writeDay(n)   
            
  }   
            
  function MMDD(str)   //月发生变化时日期联动   
            
  {   
                
    var YYYYvalue = document.reg_testdate.YYYY.options[document.reg_testdate.YYYY.selectedIndex].value;   
                
    if (YYYYvalue == ""){ var e = document.reg_testdate.DD; optionsClear(e); return;}   
                
    var n = MonHead[str - 1];   
                
    if (str ==2 && IsPinYear(YYYYvalue)) n++;   
                
    writeDay(n)   
            
  }   
            
  function writeDay(n){    //据条件写日期的下拉框  
    var e = document.reg_testdate.DD; optionsClear(e);   
    for (var i=1; i<(n+1); i++) {
		
	  e.options.add(new Option(" "+ i + " 日", i)); 
	  
	}  
                    
  }   
            
  function IsPinYear(year){        //判断是否闰平年    
    return(0 == year%4 && (year%100 !=0 || year%400 == 0));            
  }   
            
  function optionsClear(e){               
    e.options.length = 1;               
  }
  
  var select_year = document.getElementById('year');  //获取年月日
        select_year.onchange = function(){
            Year= select_year.value;
            alert( Year );
			Time = ( new Date(Year,Month,Day,Hour,Min)).getTime();
            Time= Time/1000;
            GetData(Time);
        };
  var select_month = document.getElementById('month');
        select_month.onchange = function(){
            Month= select_month.value;
            alert( Month );
			Time = ( new Date(Year,Month,Day,Hour,Min)).getTime();
            Time= Time/1000;
            GetData(Time);
        };
  var select_day = document.getElementById('day');
        select_day.onchange = function(){
            Day= select_day.value;
            alert( Day );
			Time = ( new Date(Year,Month,Day,Hour,Min)).getTime();
            Time= Time/1000;
            GetData(Time);
        };
  
}




