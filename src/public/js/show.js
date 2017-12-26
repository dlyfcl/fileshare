if(window.localStorage.getItem("register")){
    var Register =  window.localStorage.getItem("register");
    var SE = JSON.parse(Register).username;
    $("#dLabel").text(SE);
}

if (window.localStorage.getItem('Type')) {
    var Stype = window.localStorage.getItem('Type');
    var SType = JSON.parse(Stype).type;
    if (SType === "video") {
        $(".nav-tabs li:nth-child(1)").addClass("active");
        $("div#sp").addClass("active in");
        $("div#sp").siblings().removeClass("active in");
        $(".nav-tabs li:nth-child(1)").siblings().removeClass("active");
        $(".page-header").html("视频");
        window.localStorage.removeItem('Type');
    } else if (SType === "audio") {
        $(".nav-tabs li:nth-child(2)").addClass("active");
        $("div#yp").addClass("active in");
        $("div#yp").siblings().removeClass("active in");
        $(".nav-tabs li:nth-child(2)").siblings().removeClass("active");
        $(".page-header").html("音频");
        window.localStorage.removeItem('Type');
    } else if (SType === "image") {
        $(".nav-tabs li:nth-child(3)").addClass("active");
        $("div#tp").addClass("active in");
        $("div#tp").siblings().removeClass("active in");
        $(".nav-tabs li:nth-child(3)").siblings().removeClass("active");
        $(".page-header").html("图片");
        window.localStorage.removeItem('Type');
    } else if (SType === "document") {
        $(".nav-tabs li:nth-child(4)").addClass("active");
        $("div#wj").addClass("active in");
        $("div#wj").siblings().removeClass("active in");
        $(".nav-tabs li:nth-child(4)").siblings().removeClass("active");
        $(".page-header").html("文章");
        window.localStorage.removeItem('Type');
    }

}


$(".nav-tabs").children("li:eq(0)").click(function () {
    $(".page-header").html("视频");
});
$(".nav-tabs").children("li:eq(1)").click(function () {
    $(".page-header").html("音频");
});
$(".nav-tabs").children("li:eq(2)").click(function () {
    $(".page-header").html("图片");
});
$(".nav-tabs").children("li:eq(3)").click(function () {
    $(".page-header").html("文件");
});
$(".nav-tabs").children("li:eq(4)").click(function () {
    $(".page-header").html("压缩包");
});
$(".nav-tabs").children("li:eq(5)").click(function () {
    $(".page-header").html("其他");
});
$(".tab-pane tbody tr").mouseenter(function () {
    $(this).css({
        boxShadow: "0px 2px 2px grey",
        background: "#e2e2e2"
    })
});
$(".tab-pane tbody tr").mouseleave(function () {
    $(this).css({
        boxShadow: "none",
        background: "white",
        color: "black"
    })
});

$(".tab-pane tbody tr").hover(function () {
    $(this).children("td").children("img").toggleClass("max");
});


$("tbody tr").on("click", function () {
    var fileName = $(this).children("td:eq(0)").children("a").html();
    // console.log(fileName);
    $.getJSON("data/json/file.json", function (data) {
        for (var i = 0; i < data.length; i++) {
            if (data[i].name == fileName) {
                window.localStorage.setItem('file', JSON.stringify(data[i]));
                $(location).attr("href", "details.html");
            }
        }
    });
});

$.getJSON("data/json/file.json", function (data) {
    var Varr = [];
    var Iarr = [];
    var Darr = [];
    var Zarr = [];
    var Aarr = [];
    var Oarr = [];
    for (var i = 0; i < data.length; i++) {
        if (data[i].type == "video") {
            Varr.push(data[i]);
        }
        else if (data[i].type == "image") {
            Iarr.push(data[i]);
        } else if (data[i].type == "document") {
            Darr.push(data[i]);
        } else if (data[i].type == "zip") {
            Zarr.push(data[i]);
        } else if (data[i].type == "audio") {
            Aarr.push(data[i]);
        } else if (data[i].type == "other") {
            Oarr.push(data[i]);
        }
    }
    Sort(Varr);
    Sort(Iarr);
    Sort(Darr);
    Sort(Aarr);
    Sort(Oarr);
    Sort(Zarr);
    for(var j=0;j<10;j++){
        $("div#sp table tbody tr:eq("+j+") td:eq(0) a").html(Varr[j]["name"]);
        $("div#sp table tbody tr:eq("+j+") td:eq(1)").html(Varr[j]["upuser"]);
        $("div#sp table tbody tr:eq("+j+") td:eq(2)").html(Varr[j]["uptime"]);
        $("div#sp table tbody tr:eq("+j+") td:eq(3)").html(Varr[j]["Dnum"]);
        $("div#yp table tbody tr:eq("+j+") td:eq(0) a").html(Aarr[j]["name"]);
        $("div#yp table tbody tr:eq("+j+") td:eq(1)").html(Aarr[j]["upuser"]);
        $("div#yp table tbody tr:eq("+j+") td:eq(2)").html(Aarr[j]["uptime"]);
        $("div#yp table tbody tr:eq("+j+") td:eq(3)").html(Aarr[j]["Dnum"]);
        $("div#tp table tbody tr:eq("+j+") td:eq(0) a").html(Iarr[j]["name"]);
        $("div#tp table tbody tr:eq("+j+") td:eq(1)").html(Iarr[j]["upuser"]);
        $("div#tp table tbody tr:eq("+j+") td:eq(2)").html(Iarr[j]["uptime"]);
        $("div#tp table tbody tr:eq("+j+") td:eq(3)").html(Iarr[j]["Dnum"]);
        $("div#wj table tbody tr:eq("+j+") td:eq(0) a").html(Darr[j]["name"]);
        $("div#wj table tbody tr:eq("+j+") td:eq(1)").html(Darr[j]["upuser"]);
        $("div#wj table tbody tr:eq("+j+") td:eq(2)").html(Darr[j]["uptime"]);
        $("div#wj table tbody tr:eq("+j+") td:eq(3)").html(Darr[j]["Dnum"]);
        $("div#ysb table tbody tr:eq("+j+") td:eq(0) a").html(Zarr[j]["name"]);
        $("div#ysb table tbody tr:eq("+j+") td:eq(1)").html(Zarr[j]["upuser"]);
        $("div#ysb table tbody tr:eq("+j+") td:eq(2)").html(Zarr[j]["uptime"]);
        $("div#ysb table tbody tr:eq("+j+") td:eq(3)").html(Zarr[j]["Dnum"]);
        $("div#qt table tbody tr:eq("+j+") td:eq(0) a").html(Oarr[j]["name"]);
        $("div#qt table tbody tr:eq("+j+") td:eq(1)").html(Oarr[j]["upuser"]);
        $("div#qt table tbody tr:eq("+j+") td:eq(2)").html(Oarr[j]["uptime"]);
        $("div#qt table tbody tr:eq("+j+") td:eq(3)").html(Oarr[j]["Dnum"]);
    }
});
function Sort(Arr) {
    for (var i = 0; i < Arr.length; i++) {
        for (var j = 0; j < Arr.length - 1; j++) {
            if (parseInt(Arr[j]["Dnum"]) < parseInt(Arr[j + 1]["Dnum"])) {
                var temp = Arr[j];
                Arr[j] = Arr[j+1];
                Arr[j+1] = temp;
            }
        }
    }
    return Arr;
}
