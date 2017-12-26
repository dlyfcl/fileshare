function newList(data,parent){
    $(parent).find('tbody').html('');
    for(let i=0;i<data.length;i++){
        var newTr = $('<tr class="row mx-0"></tr>');
        var newbtn=$('<th class="col-1 col-xl-1 col-sm-1 text-center border-bottom-0"><input type="checkbox" class="checkbox"></th>');
        var newId = $('<th class="col-1 col-xl-1 col-sm-1 border-bottom-0">'+data[i].id+'</th>');
        var newFilename = $('<th class="col-4 col-xl-4 col-sm-4 border-bottom-0"><a href="/user/'+data[i].user+'/file/'+data[i].id+'">'+data[i].filename+'</a></th>');
        var newFilesize = $('<th class="col-2 col-xl-3 col-sm-3 border-bottom-0">'+ data[i].size+'</th>');
        var newFileUpload = $('<th class="col-4 col-xl-3 col-sm-3 border-bottom-0">'+data[i].uploaded_at+'</th>');
        
        newTr.append(newbtn);
        newTr.append(newId);
        newTr.append(newFilename);
        newTr.append(newFilesize);
        newTr.append(newFileUpload);
        $(parent).find('tbody').append(newTr);
    }
}
