$('#Mclick').on('click', function () {
  var result = "";
  var arr = [];
  for (var i = 0; i < 26; i++) {
    arr.push(String.fromCharCode(65 + i));
  }
  for (var i = 0; i < 26; i++) {
    arr.push(String.fromCharCode(97 + i));
  }
  for (var i = 0; i < 10; i++) {
    arr.push(String.fromCharCode(48 + i));
  }
  for (var i = 0; i < 4; i++) {
    var ranNum = Math.floor(Math.random() * 62);
    result += arr[ranNum];
  }
  document.getElementById("Mconfirm").innerHTML = result;
});
$('#Mclick').trigger('click');
$("#Msub").on("click", function () {
  var ck = document.getElementById("ck");
  var Mconfirm = document.getElementById("Mconfirm");
  var content = Mconfirm.innerHTML;
  if (ck.value.toUpperCase() == content.toUpperCase() && ck.value.toUpperCase() != '') {
    alert("验证码输入正确！");
    $('.msg').css({
      display: 'none'
    })
    Musername = $("#username").val();
    Mpassword = $("#password").val();
    alert('------'+Musername+'------'+Mpassword);
    $.ajax({
      url: "/api/admins",
      type: "post",
      data: {
        'action': 'login',
        'username': Musername,
        'password': Mpassword
      },
      async: false,
      error: function () {
        alert('服务器访问错误！')
      },
      success: function (data) {
        if (data === 'ok') {
          location.href = ("/admin/update");
        } else {
          alert(data);
        }
      }
    })
  } else {
    //      alert("验证码为空或者输入不正确。。。");
    $('.msg').eq(2).css({
      display: 'inline-block'
    });
    ck.value = "";
  }
});
if ($(window).height() > 650) {
  $('.footer').css({
    position: 'fixed',
    left: 0,
    bottom: 0
  })
}