$.ajax({
    url: "/api/admins/sites",
    type: "get",
    data: {

    },
    async: false,
    error: function () {
        alert('网页访问错误！')
    },
    success: function (data) {
        if (data) {
            console.log(data);
            console.log(data[0].registers);
            $.each(data, function (index) {
                var tr1=$('<tr></tr>'), tr2=$('<tr></tr>'), tr3=$('<tr></tr>'), tr4=$('<tr></tr>');
                var tr1td = data[index].registers;
                tr1.append('<td>' + tr1td  + '</td><td>' + tr1td + '</td><td>' + tr1td + '</td>');
                tr2.append('<td>' + data[index].visits + '</td>');
                var tr3td = data[index].downloads;
                var tr4td = data[index].uploads;
                tr3.append('<td>' + tr3td + '</td><td>' + tr3td + '</td><td>' + tr3td + '</td><td>' + tr3td + '</td><td>' + tr3td + '</td><td>' + tr3td + '</td>');
                tr4.append('<td>' + tr4td + '</td><td>' + tr4td + '</td><td>' + tr4td + '</td><td>' + tr4td + '</td><td>' + tr4td + '</td><td>' + tr4td + '</td>');
                tr1.appendTo($('#newUsers'));
                tr2.appendTo($('#visits'));
                tr3.appendTo($('#downloads'));
                tr4.appendTo($('#uploads'));
            });
        } else {
            alert(data);
        }
    }
})

//跳转效果
$('#userTab').click(function () {
    $('#userAside').addClass('active');
    $('#visitAside').removeClass('active');
    $('#fileAside').removeClass('active');
    $('#updownloadAside').removeClass('active');
});
$('#visitTab').click(function () {
    $('#userAside').removeClass('active');
    $('#visitAside').addClass('active');
    $('#fileAside').removeClass('active');
    $('#updownloadAside').removeClass('active');
});
$('#fileTab').click(function () {
    $('#userAside').removeClass('active');
    $('#visitAside').removeClass('active');
    $('#fileAside').addClass('active');
    $('#updownloadAside').removeClass('active');
});
$('#updownloadTab').click(function () {
    $('#userAside').removeClass('active');
    $('#visitAside').removeClass('active');
    $('#fileAside').removeClass('active');
    $('#updownloadAside').addClass('active');
});
//另一组
$('#userAside').click(function () {
    //左边导航栏变化
    $('#userAside').addClass("active");
    $('#visitAside').removeClass("active");
    $('#fileAside').removeClass("active");
    $('#updownloadAside').removeClass("active");

    //导航头部变化
    $('#userTab').addClass("active");
    $('#visitTab').removeClass("active");
    $('#fileTab').removeClass("active");
    $('#updownloadTab').removeClass("active");

    //内容变化
    $('#userShow').addClass("active");
    $('#visitShow').removeClass("active");
    $('#fileShow').removeClass("active");
    $('#updownloadShow').removeClass("active");

    //进度条刷新
})

$('#visitAside').click(function () {
    //左边导航栏变化
    $('#userAside').removeClass("active");
    $('#visitAside').addClass("active");
    $('#fileAside').removeClass("active");
    $('#updownloadAside').removeClass("active");

    //导航头部变化
    $('#userTab').removeClass("active");
    $('#visitTab').addClass("active");
    $('#fileTab').removeClass("active");
    $('#updownloadTab').removeClass("active");

    //内容变化
    $('#userShow').removeClass("active");
    $('#visitShow').addClass("active");
    $('#fileShow').removeClass("active");
    $('#updownloadShow').removeClass("active");

})

$('#fileAside').click(function () {
    //左边导航栏变化
    $('#userAside').removeClass("active");
    $('#visitAside').removeClass("active");
    $('#fileAside').addClass("active");
    $('#updownloadAside').removeClass("active");

    //导航头部变化
    $('#userTab').removeClass("active");
    $('#visitTab').removeClass("active");
    $('#fileTab').addClass("active");
    $('#updownloadTab').removeClass("active");

    //内容变化
    $('#userShow').removeClass("active");
    $('#visitShow').removeClass("active");
    $('#fileShow').addClass("active");
    $('#updownloadShow').removeClass("active");

})

$('#updownloadAside').click(function () {
    //左边导航栏变化
    $('#userAside').removeClass("active");
    $('#visitAside').removeClass("active");
    $('#fileAside').removeClass("active");
    $('#updownloadAside').addClass("active");

    //导航头部变化
    $('#userTab').removeClass("active");
    $('#visitTab').removeClass("active");
    $('#fileTab').removeClass("active");
    $('#updownloadTab').addClass("active");

    //内容变化
    $('#userShow').removeClass("active");
    $('#visitShow').removeClass("active");
    $('#fileShow').removeClass("active");
    $('#updownloadShow').addClass("active");

})