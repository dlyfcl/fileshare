function newTr(data, parent) {
    for(let i = 0; i<data.length; i++) {
        //创建元素
        var newTr = $('<tr></tr>');
        var newID = $('<td class="id">' + data[i].id + '</td>');
        var newName = $('<td>' + data[i].username + '</td>');
        var newEmail = $('<td>' + data[i].email + '</td>');
        var newDate = $('<td>' + data[i].created_at + '</td>');
        //定义操作
        // 定义dropdown
        var newDropdown = $('<td class="dropdown"></td>');
        var newButton = $('<button class="btn btn-default dropdown-toggle" data-toggle="dropdown">操作</button>');
        var newSpan = $('<span class="caret"></span>'); 
        newButton.append(newSpan);
        var newMenu = $('<ul class="dropdown-menu" role="menu"></ul>');
        var newDel = $('<li class="dele"><a href="###" data-id=' + data[i].id + '>删除</a></li>');
        var newReset = $('<li class="edit"><a href="###" data-id=' + data[i].id +'>重置密码</a></li>');
        newMenu.append(newDel);
        newMenu.append(newReset);
        newDropdown.append(newButton);
        newDropdown.append(newMenu);
    
        newTr.append(newID);
        newTr.append(newName);
        newTr.append(newEmail);
        newTr.append(newDate);
        newTr.append(newDropdown);
        $(parent).append(newTr);
    }       
}