function cpuData() {

    var rect = warpDiv.append("div").attr("id", "data");
    rect
        .style("position", "absolute")
        .style("left", "220px")
        .style("top", "760px")
        .style("background", "#000")
        .style("width", "1030px")
        .style("height", "200px")
        .style("text-align", "center")
        .style("color", "gray")
        .style("font-family", "微软雅黑");

    var useRatio = rect
        .append("div")
        .attr("id", "useRatio");

    useRatio.append("div").attr("id", "left").html("利用率").style("color", "gray")
        .style("position", "absolute")
        .style("left", "10px")
        .style("top", "10px")
        .style("font-size", "20px");
    var useRate = useRatio.append("div").attr("id", "right").html("useRatio").style("color", "white")
        .style("position", "absolute")
        .style("left", "70px")
        .style("font-size", "20px")
        .style("top", "10px");
    var speed = rect
        .append("div")
        .attr("id", "spped");

    speed.append("div").attr("id", "left").html("速度").style("color", "gray")
        .style("position", "absolute")
        .style("left", "180px")
        .style("font-size", "20px")
        .style("top", "10px");
    speed.append("div").attr("id", "right").html("speed").style("color", "white")
        .style("position", "absolute")
        .style("left", "230px")
        .style("font-size", "20px")
        .style("top", "10px");

    var mileage = rect
        .append("div")
        .attr("id", "mileage");

    mileage.append("div").attr("id", "left").html("里程").style("color", "gray")
        .style("position", "absolute")
        .style("left", "10px")
        .style("font-size", "20px")
        .style("top", "60px");
    mileage.append("div").attr("id", "right").html("mileage").style("color", "white")
        .style("position", "absolute")
        .style("left", "60px")
        .style("font-size", "20px")
        .style("top", "60px");

    var thread = rect
        .append("div")
        .attr("id", "thread");

    thread.append("div").attr("id", "left").html("线程").style("color", "gray")
        .style("position", "absolute")
        .style("left", "160px")
        .style("font-size", "20px")
        .style("top", "60px");
    thread.append("div").attr("id", "right").html("thread").style("color", "white")
        .style("position", "absolute")
        .style("left", "210px")
        .style("font-size", "20px")
        .style("top", "60px");

    var handle = rect
        .append("div")
        .attr("id", "handle");

    handle.append("div").attr("id", "left").html("句柄").style("color", "gray")
        .style("position", "absolute")
        .style("left", "290px")
        .style("font-size", "20px")
        .style("top", "60px");
    handle.append("div").attr("id", "right").html("handle").style("color", "white")
        .style("position", "absolute")
        .style("left", "340px")
        .style("font-size", "20px")
        .style("top", "60px");

    var time = rect
        .append("div")
        .attr("id", "time");

    time.append("div").attr("id", "left").html("正常运营时间").style("color", "gray")
        .style("position", "absolute")
        .style("left", "10px")
        .style("font-size", "20px")
        .style("top", "110px");

    time.append("div").attr("id", "right").html("time").style("color", "white")
        .style("position", "absolute")
        .style("left", "120px")
        .style("font-size", "20px")
        .style("top", "110px");

    var useRatio = rect
        .append("div")
        .attr("id", "useRatio");


    var maxspeed = rect
        .append("div")
        .attr("id", "maxspeed");

    maxspeed.append("div").attr("id", "left").html("最大速度").style("color", "gray").style("font-size", "20px")
        .style("position", "absolute")
        .style("left", "525px")
        .style("top", "20px");
    maxspeed.append("div").attr("id", "right").html("maxspeed").style("color", "white").style("font-size", "20px")
        .style("position", "absolute")
        .style("left", "625px")
        .style("top", "20px");

    var rabbet = rect
        .append("div")
        .attr("id", "rabbet");

    rabbet.append("div").attr("id", "left").html("插槽").style("color", "gray").style("font-size", "20px")
        .style("position", "absolute")
        .style("left", "525px")
        .style("top", "40px");
    rabbet.append("div").attr("id", "right").html("rabbet").style("color", "white").style("font-size", "20px")
        .style("position", "absolute")
        .style("left", "625px")
        .style("top", "40px");

    var core = rect
        .append("div")
        .attr("id", "core");

    core.append("div").attr("id", "left").html("内核").style("color", "gray").style("font-size", "20px")
        .style("position", "absolute")
        .style("left", "525px")
        .style("top", "60px");
    core.append("div").attr("id", "right").html("core").style("color", "white").style("font-size", "20px")
        .style("position", "absolute")
        .style("left", "625px")
        .style("top", "60px");

    var logicCPU = rect
        .append("div")
        .attr("id", "logicCPU");

    logicCPU.append("div").attr("id", "left").html("逻辑处理器").style("color", "gray").style("font-size", "20px")
        .style("position", "absolute")
        .style("left", "525px")
        .style("top", "80px");
    logicCPU.append("div").attr("id", "right").html("logicCPU").style("color", "white").style("font-size", "20px")
        .style("position", "absolute")
        .style("left", "625px")
        .style("top", "80px");

    rect.style({
        "opacity": 0.0,
        'z-index': '0'
    });

}