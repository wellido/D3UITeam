/**
 * Created by Thinkpad3 on 2016/5/10.
 */
function hourSelect(container, left, top) {
    container.append('input').attr('id', 'xiala2').attr('readonly', 'readonly').style({
        'position': 'absolute',
        'width': '9.7%',
        'height': '40px',
        'left': left,
        'top': top,
        'background-color': 'black',
        'border': '1px solid grey',
        'font-size': '16px',
        'color': 'white',
        'font-Weight': 'bold',
        'padding-left': '26px',
        'border-radius': '3px',
        'cursor': 'pointer',
        "opacity": 1.0,
        'z-index': '3'
    });
    var myDate = new Date();
    var nowHour = myDate.getHours();
    var nowMinute = myDate.getMinutes();
    d3.select('#xiala2').attr('value', (nowHour + ' : ' + nowMinute))
        .style({
            'line-height': '40px',
            'vertical-align': 'middle'
        });
    d3.select('#xiala2').on('click', function () {
        if (d3.select('#hourMin').style('opacity') == 0.0) {
            d3.select('#hourMin').style({
                "opacity": 1.0,
                'z-index': '3'
            });
            d3.select('#shijian').style({
                "opacity": 0.0,
                'z-index': '0'
            });
            d3.select('#daystable').style({
                "opacity": 0.0,
                'z-index': '0'
            });
        } else {
            d3.select('#hourMin').style({
                "opacity": 0.0,
                'z-index': '0'
            });
        }
    });
    var hourMin = d3.select('#warpDiv').append('div').attr('id', 'hourMin').style({
        'height': '30px',
        'width': '9.7%',
        'position': 'absolute',
        'top': parseInt(top.replace('px', '')) + 40 + 'px',
        'background-color': 'white',
        'left': left,
        "opacity": 0.0,
        'z-index': '0'
    });

    var hourSelect = hourMin.append('select').attr('id', 'hourSelect')
        .style({
            'position': 'absolute',
            'width': '50%',
            'height': '30px',
            'top': '0px',
            'appearance': 'none',
            'background-color': 'black',
            'background-repeat': 'no-repeat',
            'border': '1px solid grey',
            'font-size': '16px',
            'color': 'white',
            'font-Weight': 'bold',
            'padding-left': '10px'
        }).on('change', function () {
            var value = d3.select(this).property("value");
            nowHour = parseInt(value.replace('hour', ''));
            d3.select('#xiala2').attr('value', (nowHour + ' : ' + nowMinute));
        });
    var minuteSelect = hourMin.append('select').attr('id', 'minuteSelect')
        .style({
            'position': 'absolute',
            'width': '50%',
            'height': '30px',
            'top': '0px',
            'left': '50%',
            'appearance': 'none',
            'background-color': 'black',
            'background-repeat': 'no-repeat',
            'border': '1px solid grey',
            'font-size': '16px',
            'color': 'white',
            'font-Weight': 'bold',
            'padding-left': '10px'
        }).on('change', function () {
            var value = d3.select(this).property("value");
            nowMinute = parseInt(value.replace('minute', ''));
            d3.select('#xiala2').attr('value', (nowHour + ' : ' + nowMinute));
        });

    for (var i = 1; i <= 24; i++) {
        hourSelect.append('option')
            .attr('value', 'hour' + i)
            .attr('id', 'hour' + i)
            .text(i).style({
            'font-Weight': 'bold',
            'font-size': '16px',
            'color': 'white'
        });
    }
    d3.select('#hour' + nowHour).attr('selected', 'true');

    for (var i = 1; i <= 60; i++) {
        minuteSelect.append('option')
            .attr('value', 'minute' + i)
            .attr('id', 'minute' + i)
            .text(i).style({
            'font-Weight': 'bold',
            'font-size': '16px',
            'color': 'white'
        });
    }
    d3.select('#minute' + nowMinute).attr('selected', 'true');
}
