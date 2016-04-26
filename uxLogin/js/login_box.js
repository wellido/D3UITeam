function login_box(container){
	var Logo_company =  container.append('div');
    Logo_company
    .attr('class','Logo_company');
	
  var login_box = container.append('form')
	.attr('id','loginform')
	.attr('method','post')
	.attr('action','accounts/login')
	.append('div');
  login_box
    .attr('class','login_box');
    
  var user_input = login_box.append('input');
  user_input
    .attr('type','text')
    .attr('placeholder','用户名')
    .attr('class','user_input')
    .attr('name','username')
    .attr('onkeyup','checkInput()')
    .attr('onkeydown','if(event.keyCode==13) password.focus()');
    
  var password_input = login_box.append('input');
  password_input
    .attr('type','password')
    .attr('placeholder','密码')
    .attr('class','password_input')
    .attr('name','password')
    .attr('onkeyup','checkInput()')
    .attr('onkeydown','if(event.keyCode==13) login()');
    
  var keep_login_div = login_box.append('div');
  keep_login_div
    .attr('class','keep_login_div');
    
  var keep_login_input = keep_login_div.append('input');
  keep_login_input
    .attr('type','checkbox')
    .attr('class','keep_login_input');
  
  var keep_login_message = keep_login_div.append('span');
  keep_login_message
    .attr('class','keep_login_message');
  keep_login_message.html('保持登录状态');
  
  var submit_button = login_box.append('button');
  submit_button
    .attr('class','submit_button')
    .attr('id','submitButton')
    .attr('type','submit')
    .attr('onClick','login()');
    submit_button.html('登录');
  
   var copyright =  container.append('div');
    copyright
      .attr('class','copyright')
    copyright.html('copyright&copy;2016北京优炫软件股份有限公司');
    
    return login_box;
}

function checkInput(){
  var userName = d3.select('#userName')[0][0].value;
  var password = d3.select('#password')[0][0].value;
  if(userName == '' || userName == null || password == '' || password == null){
    d3.select('#submitButton').style('background',' rgba(0, 0, 0, .5');
  }else{
    d3.select('#submitButton').style('background',' rgba(200, 0, 0, .5');
  }
}

