$(function () {
    $('#submit').click(function () {
        if (!$('#username').val()) {
            alert('请填写完整');
            return;
        }
        // 清空
        $('#search .table tbody').html('');
        let username = $('#username').val();
        $.ajax({
            url:'/api/admins/users/'+username,
            type:'get',
            data:{

            },
            success:function(data) {
                // 存在
                if(data!=='none') {
                    newTr(data, '#search .table');
                } else if(data === 'none') {
                    alert('查无此人');
                }

                
            },
            error:function(err) {
                return;
            }
        })
    })
});