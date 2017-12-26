$(function () {
  $(".delete").on("click", function () {
    var fileid = [];
    var data = new FormData();
    data.append('action','delete');
    $(".checkbox").each(function (index, ele) {
      if ($(this).attr("checked") == "checked") {
        data.append('id',parseInt($(this).parent().next().text()));
      }
    })
    console.log(data);
    $.ajax({
      data: data,
      url: '/api/files',
      type: "post",
      contentType: false,    //不可缺
      processData: false,    //不可缺
      error: function (err) {
        console.log("this is error");
        console.log(err);
      },
      success: function (data) {
        if (data === 'delete suc') {
          $(this).parents('.all-container').remove();
          alert("delete successfully");
          $(".checkbox").each(function (index, ele) {
            if ($(this).attr("checked") == "checked") {
              $(this).parent().parent().remove();
            }
          })
        }
      }
    });
  });
})
