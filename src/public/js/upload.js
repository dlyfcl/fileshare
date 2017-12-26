$(function () {
    console.log('上传文件');
    $('#files').change(function () {
        var data = new FormData();
        data.append('_upload',$('#files')[0].files[0]);
        data.append('action','upload');
        console.log($('#files')[0].files[0].name);
        $.ajax({
            data: data,
            url: '/api/files',
            type:"post",
            dataType: 'JSON',
            contentType: false,    //不可缺
            processData: false,    //不可缺
            success: function(data){
                console.log(data);
                alert("上传成功！");
            },
            error: function(err){
                console.log('error: ' + err);
            }
        });
    });
});
