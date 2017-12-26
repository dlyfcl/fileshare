
function newPagination(num, parent) {
    
    var newUl = $('<ul class="pagination"></ul>');
    for (let i = 1; i <= num; i++) {
        var newA = $('<li><a href="###" data-page=' + (i - 1) + '>' + i + '</a></li>');
        newUl.append(newA);
    };
    
    $(parent).append(newUl);

    //  添加页码函数
    $('.pagination li').on('click', 'a', function (e) {
        // 清除原先的表格
        $('#lists table tbody').html('');
        let page = Number($(e.target).attr('data-page'));

        $.ajax({
            url: '/api/admins/users?page=' + page,
            data: {

            },
            type: 'get',
            success: function (data) {
                // 获取数据
                newTr(data.Res, '#lists table tbody');
                // 创建页码
                return;
            },
            error: function (err) {
                return;
            }
        });

    });


};
