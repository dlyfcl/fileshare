//管理员信息显示
var Mpwd = '';
//('#admName').val(getCookie('username'));
$.ajax({
	url: 'data/Mpassword.json',
	type: 'get',
	dataType: 'json',
	success: function (data) {
		for (var i = 0; i < data.length; i++) {
			if (data[i].Musername == getCookie('username')) {
				Mpwd = data[i].Mpassword;
				var str = '';
				for (var i = 0; i < Mpwd.length; i++) {
					str += '●';
				}
				$("#admPwd").val(str);
			}
		}
	}
})
//显示隐藏密码
var flag = 1;
$("#show-pwd").on("click", function () {
	if (flag == 1) {
		$("#admPwd").val(Mpwd);
		flag = 0;
	} else {
		var str = '';
		for (var i = 0; i < Mpwd.length; i++) {
			str += '●';
		}
		$("#admPwd").val(str);
		flag = 1;
	}
});

//修改密码
//$('#admName_Cha').val(getCookie('username'));
$('#sub').on('click', function () {
	var oldpwd = $('#admPwd_Cha').val();
	var pwd = $('#admPwd_New').val();
	var repwd = $('#admPwd_reNew').val();
	console.log(oldpwd);
	$.ajax({
		url: 'data/Mpassword.json',
		type: 'get',
		dataType: 'json',
		success: function (data) {
			console.log(data);
			for (var i = 0; i < data.length; i++) {
				if (data[i].Musername == getCookie('username')) {
					console.log(oldpwd);
					console.log(data[i].Mpassword);
					if (oldpwd == data[i].Mpassword) {
						$('.msg').css({
							display: 'none'
						})
						if (pwd == '') {
							$('.msg').eq(2).css({
								display: 'inline-block'
							})
						} else if (oldpwd != pwd) {
							if (pwd == repwd) {
								$('#adminShow').addClass('active');
								$('#adminTab').addClass('active');
								$('#adminAside').addClass('active');
								$('#changeShow').removeClass('active');
								$('#changeTab').removeClass('active');
								$('#changeAside').removeClass('active');
							} else {
								$('.msg').eq(3).css({
									display: 'inline-block'
								})
							}
						} else {
							$('.msg').eq(1).css({
								display: 'inline-block'
							})
						}
					} else {
						$('.msg').eq(0).css({
							display: 'inline-block'
						})
					}
				}
			}
		}
	})
});



//跳转效果
$('#adminTab').click(function () {
	$('#adminAside').addClass('active');
	$('#changeAside').removeClass('active');
});
$('#changeTab').click(function () {
	$('#adminAside').removeClass('active');
	$('#changeAside').addClass('active');
});
//另一组
$('#adminAside').click(function () {
	//左边导航栏变化
	$('#adminAside').addClass("active");
	$('#changeAside').removeClass("active");

	//导航头部变化
	$('#adminTab').addClass("active");
	$('#changeTab').removeClass("active");

	//内容变化
	$('#adminShow').addClass("active");
	$('#changeShow').removeClass("active");

})

$('#changeAside').click(function () {
	//左边导航栏变化
	$('#adminAside').removeClass("active");
	$('#changeAside').addClass("active");

	//导航头部变化
	$('#adminTab').removeClass("active");
	$('#changeTab').addClass("active");

	//内容变化
	$('#adminShow').removeClass("active");
	$('#changeShow').addClass("active");

})