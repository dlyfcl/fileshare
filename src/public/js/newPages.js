$(function () {
    // 统一操作
    $.ajax({
        url: '/api/admins/users?page=0',
        data: {

        },
        type: 'get',
        success: function (data) {
            // 获取数据
            newTr(data.Res, '#lists table tbody');
            // 创建页码
            newPagination(data.pages, '#lists');
            return;
        },
        error: function (err) {
            return;
        }
    });
});