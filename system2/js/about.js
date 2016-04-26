function about() {
    var about = warpDiv.append("div")
        .attr("class", "div_box")
        .attr('id', 'about');
    var content = about.append("div")
        .attr("class", "contens");
    var cont_about = content.append("div")
        .attr("class", "explain_about")
    cont_about.append("img")
        /*.attr("alt","中旅银行")*/
        .attr("class", "img_logo");
    var cont_table = cont_about.append("table")
        .style({
            'position': 'absolute',
            'left': '370px',
            'top': '75px',
            'float': 'left',
            'letter-spacing': '8px',
            'font-size': '20px'
        })
    var table_tr1 = cont_table.append("tr");
    table_tr1.append("td").html("系统版本");
    table_tr1.append("td").html("V4.01");
    var table_tr2 = cont_table.append("tr");
    table_tr2.append("td").html("可用天数");
    table_tr2.append("td").html("15天");
    var table_tr3 = cont_table.append("tr");
    table_tr3.append("td").html("license");
    table_tr3.append("td").html("试用");

    content.append("div")
        .attr("class", "foot")
        .html("版权&copy;2016Uxsino&nbsp;北京优炫软件股份有限公司&nbsp;保留所有权");

    about.style({
        "opacity": 0.0,
        'z-index': '0'
    });
}
