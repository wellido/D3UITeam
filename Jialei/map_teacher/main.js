window.onload = function () {
  var full_screen = d3.select('body').append('div')
    .style('display', 'flex')
    .style('background', 'black')
    .style('justify-content', 'center')
    .style('align-items', 'center');

  var container = full_screen.append('div');
  container.style('background', 'black');
  container.style('width', '800');
  container.style('height', '600');

  d3.json('map.json', function (e, d) {
    if(!e) {
      map(container,d);
	  
    }
  });

  function resize() {
    full_screen.style('width', window.innerWidth + 'px');
    full_screen.style('height', window.innerHeight + 'px');
  }
  resize();
  window.addEventListener('resize', resize);
};