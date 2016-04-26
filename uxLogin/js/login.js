/*引入外部js*/
function load_js(src,cb){
  var script = document.createElement('script');
  script.setAttribute('src', src);
  script.onload = cb;
  document.head.appendChild(script);
}

/*content*/
function main(){
  body = d3.select('body');
  /*body.style({{ page.body.style | jsonify }});*/
  /*load_js('js/login_box.js', 
  function () { login_box(body); });*/
  login_box(body);
}

window.onload = function () {
  load_js('http://d3js.org/d3.v3.min.js', main);
};