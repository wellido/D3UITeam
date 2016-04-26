  var HourArr=[];  //时间轴API返回值的存储位置       
  var MinArr=[];
  
  var myDate = new Date();
  var Year ;
  var Month ;
  var Day;
  var Hour;
  var Min ;
  var circles;
  var Time ;                       
  var timeTest;
  var tds = []
  var tdc = [];
  var timenow;
  var tempminutes;
  gettimenow();//获得初始时间
 
  GetData (Time);
  
 function aaa(){
  /*d3.select('head').append('style').html('body { background: #000 }')*/
  var container1 = d3.select('#selectTime');

  day(container1);
  hour_min(container1);
  
  }
  
  //min(container2);
  setInterval(" GetData(Time) ",60000);
