 //---设置对应的点击事件
 $(function () {
    var act;
    $('.all').css('display', 'block');
    $(".list-group li").click(function () {
        $(".list-group li").removeClass('active');
        $(this).addClass('active');
        act = $(this).index();
        $('.dl').css('display', 'none');
        switch (act) {
            case 0:
                $('.all').css('display', 'block');
                break;
            case 1:
                $('.photo').css('display', 'block');
                break;
            case 2:
                $('.doc').css('display', 'block');
                break;
            case 3:
                $('.video').css('display', 'block');
                break;
            case 4:
                $('.zip').css('display', 'block');
                break;
            case 5:
                $('.other').css('display', 'block');
                break;
            case 6:
                $('.unchecked').css('display', 'block');
                break;
        }
    })
});
//获取登录的用户名
$(function () {
    $.ajax({
        url:'/api/users/',
        type:'get',
        success:function(data){
            if(data.length!==0){
                $('#user').html("<i class=\"fa fa-user-o\" aria-hidden=\"true\"></i>\n" + data[0].username);
            }else{
                $('#user').html("<i class=\"fa fa-user-o\" aria-hidden=\"true\"></i>\n" + null);
            }
        },
        error:function(err){
            alert('数据库查询失败');
        }
    });
    
})
//---设置高度
$(function () {
    //---设置左边高度为可见窗口高度
    $('.left').css('height', window.innerHeight);

    //---设置右边内容高度=可见窗口高度-头部总高度
    $('.dl').css('height', window.innerHeight - $('.right-header').outerHeight(true));

});

//---监听页面改变时的高度
$(window).resize(function () {
    //---设置左边高度为可见窗口高度
    $('.left').css('height', window.innerHeight);

    //---设置右边内容高度=可见窗口高度-头部总高度
    $('.dl').css('height', window.innerHeight - $('.right-header').outerHeight(true));

});

