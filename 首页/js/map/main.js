function Maps(){
  var full_screen = d3.select('#full_screen_map');

  var container = full_screen.append('div');
  //container.style('background', 'black');
  container.style('width', '800px');
  container.style('height', window.innerHeight-227+ 'px');
  container.style('z-index','0')

  d3.json('js/map/map.json', function (e,d) {
    if(!e) {
      map(container,d);
    }
  });

  function resize() {
    full_screen.style('width', window.innerWidth-18 + 'px');
    full_screen.style('height', window.innerHeight-227+ 'px');
	full_screen.attr('z-index','-2')
	//.style("position" , "absolute")
	.style("left" ,"0px")
	.style("top" , "0px")
	//.style('background', 'black');
  }
  
  resize();
  window.addEventListener('resize', resize);
};