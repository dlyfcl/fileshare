$(function () {
  //正则
  //注册正则判断
  var regPasswordSpecial = /[~!@#%&=;':",./<>_\}\]\-\$\(\)\*\+\.\[\?\\\^\{\|]/; //密码中的特殊字符的正则判断
  var regPasswordAlpha = /[a-zA-Z]/ //密码中的字符判断
  var regPasswordNum = /[0-9]/ //密码中的数字判断
  var regEmail = /^[a-zA-Z\d]+([-_.][A-Za-z\d]+)*@([a-zA-Z\d]+[-.])+[a-zA-Z\d]{2,5}$/
  var password;
  var check = [false, false, false];


  //校验成功函数 符合注册要求
  function success(Obj, counter) {
    Obj.parent().parent().removeClass('has-error').addClass('has-success');
    $('.tip').eq(counter).text("");
    check[counter] = true;

  }
  // 校验失败函数
  function fail(Obj, counter, msg) {
    Obj.parent().parent().removeClass('has-success').addClass('has-error');
    $('.tip').eq(counter).text(msg).show();
    check[counter] = false;
  }
  //邮箱地址匹配--

  $('.container').find('input').eq(0).change(function () {
    if (regEmail.test($(this).val())) {
      success($(this), 0);
    } else {
      fail($(this), 0, '邮箱格式不正确');
    }
  });

  //密码匹配---密码的判断规则
  // 匹配字母、数字、特殊字符至少两种的函数-
  function atLeastTwo(password) {
    var a = regPasswordSpecial.test(password) ? 1 : 0;
    var b = regPasswordAlpha.test(password) ? 1 : 0;
    var c = regPasswordNum.test(password) ? 1 : 0;
    return a + b + c;
  }

  $('.container').find('input').eq(1).change(function () {
    password = $(this).val();
    if ($(this).val().length < 8) {
      fail($(this), 1, '密码太短，不能少于8个字符');
    } else {
      if (atLeastTwo($(this).val()) < 2) {
        fail($(this), 1, '密码中至少包含字母、数字、特殊字符的两种')
      } else {
        success($(this), 1);
      }
    }
  });

  $('#sub').on('click', function () {
    var flag = 0;
    for (var i = 0; i < check.length; i++) {
      if (check[i] == true) {
        flag++;
      }
    }

    if (flag === 2) {
      $.ajax({
        type: 'post',
        url: "/api/users",
        data: {
          'email': $('#emal').val(),
          'password': $('#pwd').val(),
          'action': 'login'
        },
        async: false,
        error: function (error) {
          alert('服务器访问错误！');
          location.href = ("/user/login");
        },
        success: function (data) {
          console.log(data);
          if (data == "false") {
            alert('账号密码不匹配！');
            location.href = ("/user/login");
          } else {
            location.href = ("/user/" + data.id);
          }
        }
      })
    } else {
      return;
    }
  });
});
