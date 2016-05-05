/**
 * Created by Thinkpad3 on 2016/5/3.
 */
function table() {
    var tables = d3.select('#warpDiv').append('table')
        .attr({
            'id': 'tables',
            'class': 'table',
            'width': '100%'
        })
        .style({
            'border': 'none',
            'border-bottom': 'solid 4px grey',
            'position': 'absolute',
            'top': '200px'
        });
}

function addInfoToTable(tableInfo) {
    var widths = ['11%', '5%', '18%', '18%', '8%', '15%', '11%', '9%', '5%'];
    d3.select('#tables').append('tr');
    for (var i = 0; i < 9; i++) {
        d3.select('#tables').append('td')
            .attr('class', 'tableFont')
            .style({
                'BORDER-BOTTOM': '#404040 1px solid',
                'height': '46px',
                'vertical-align': 'middle',
                'text-align': 'center',
                'width': widths[i]
            }).on('mouseover', function () {
                d3.select(this).style({
                    'border-right': 'yellow 1px solid',
                    'border-left': 'yellow 1px solid'
                }).on('mouseout', function () {
                    d3.select(this).style({
                        'border': 'none',
                        'BORDER-BOTTOM': '#404040 1px solid'
                    })
                })
            })
            .html(tableInfo[i]);
    }

}