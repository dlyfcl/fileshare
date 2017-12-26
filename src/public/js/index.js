$(window).scroll(function () {
    var docScrollTop = $(document).scrollTop();
    if (docScrollTop > 0) {
        $(".til").css({
            "background": "#fdfdfd"
        });
        $(".til img").attr("src", "img/cloud_.png");
        $(".til span").css({
            "color": "#8a8a8a"
        });
        $(".til a").css({
            "color": "#8a8a8a"
        });
        $(".nav li a").on("mouseleave", function () {
            $(this).css({
                "color": "#8a8a8a"
            });
        });
    } else {
        $(".til").css({
            "background": "transparent"
        });
        $(".til img").attr("src", "img/cloud.png");
        $(".til span").css({
            "color": "#fff"
        });
        $(".til a").css({
            "color": "#fff"
        });
        $(".nav li a").on("mouseenter", function () {
            $(this).css({
                "color": " #8a8a8a"
            });
        });
        $(".nav li a").on("mouseleave", function () {
            $(this).css({
                "color": " #fff"
            });
        });

    }
});

$(".more").on("click", function () {
    var Type = $(this).attr("name");
    var obj = {
        "type": Type
    };
    window.localStorage.setItem('Type', JSON.stringify(obj));
    $(location).attr("href", "show.html");
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
