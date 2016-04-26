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
  
  
  d3.select('head').append('style').html('body { background: #000 }')
  var container1 = d3.select('body').append('div');
  var container2 = d3.select('body').append('div');
  var container3 = d3.select('body').append('div');
  //year(container1);
  //month(container1);
  day(container1);
  hour_min(container2);
  //min(container2);
  setInterval(" GetData(Time) ",60000);