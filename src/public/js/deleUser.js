$(function () {
    $('.table tbody').on('click', '.dele', function (e) {
        // 获取该id

        let id = Number($(e.target).attr('data-id'));

        let state = confirm("你确定要删除这只id为" + id + "的用户猫吗?");
        if (!state) {
            return;
        } else if (state) {
            $.ajax({
                data: {
                    action: 'delete',
                    id: id
                },
                type: 'post',
                url: '/api/admins/users',
                success: function (data) {
                    if (data === 'ok') {
                        alert('删除成功');
                        window.location.reload();
                    }
                },
                error: function (err) {
                    return;
                }

            });
        }
    })

});