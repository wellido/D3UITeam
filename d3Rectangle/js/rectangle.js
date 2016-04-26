/*引入外部js*/
function load_js(src,cb){
  var script = document.createElement('script');
  script.setAttribute('src', src);
  script.onload = cb;
  document.head.appendChild(script);
}

/*content*/
function main(){
 /*load_js('//uxsino.github.io/bmsui/chenxiaorong/2016/02/29/rectangle/rectangle_box.js', 
  function () { rectangle_box(); })*/
  /*load_js('//uxsino.github.io/bmsui/chenxiaorong/2016/02/29/rectangle/reticularRectangle.js', 
  function () { rectangle_box(); })*/
  load_js('js/d3Select.js',
  function () { d3select(); })
  load_js('js/dataRectangle.js', 
  function () { 
		trans_count_chart();
//		getNewResults();
  })
}

window.onload = function () {
  load_js('http://d3js.org/d3.v3.min.js', main);
};