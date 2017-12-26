var back_content_demodata = [];

$(function(){

    var pageStart=1;
    var pageEnd=1;
    var data=null;

    $.ajax({
        "type":'get',
        "url":'/api/files?filter=pending',
        'success':function(result){
            data = result;
            var allPageNum=Math.floor(data.length/10);
            var pag = new Pagination(1,allPageNum,5);
            pag.render("#adds .pagination");
            addData(data,0,data.length);
        }
    })

    function permitFile(fileId){
        $.ajax({
            "type":'post',
            "url":"/api/files",
            "data":{
                "action":"permit",
                "id":fileId
            },
            "success":function(result){
                location.reload();
            },
            "error":function(){
                location.reload();
            }
        })
    }

    function rejectFile(fileId){
        $.ajax({
            "type":'post',
            "url":"/api/files",
            "data":{
                "action":"reject",
                "id":fileId
            },
            "success":function(result){
                location.reload();
            },
            "error":function(){
                location.reload();
            }
        })
    }


    //将后台数据添加到页面中
    //fromNum显示数据的起始数
    //toNum显示数据的结束数
    function addData(data,fromNum,toNum){
            var str="";
            if(fromNum<=0){
                fromNum=0;
            }
            if(toNum>=data.length){
                toNum=data.length;
            }
            
            for(var i=fromNum;i<toNum;i++){
                str=`
                    <td>${data[i].id}</td>
                    <td>${data[i].filename}</td>
                    <td>${data[i].size}</td>
                    <td>${data[i].type}</td>
                    <td><div class="dropdown">
                        <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown">
                            未审核<span class="caret"></span>
                            
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <li value="0" class="permitFile" data="${data[i].id}"><a href="#" )">审核通过</a></li>
                            <li value="1" class="rejectFile" data="${data[i].id}"><a href="#" )>审核不通过</a></li>
                        </ul>
                        </div>
                    </td>
                `;
                var newTr=document.createElement("tr");
                newTr.innerHTML=str;
                newTr.index=i;
                
                $("#adds .table tbody").append($(newTr));
            }
            $("#adds .table").addClass("text-center");
            // $("#adds .table tbody").html(str);
            $("#adds .table>tbody>tr>td").css("verticalAlign","middle");
            $("#adds .table>tbody>tr>td ul li").click(function(){
                $(this).parent().siblings().html($(this).text()+'<span class="caret"></span>');
                if($(this).hasClass("permitFile")){
                    permitFile($(this).attr("data"));
                }
                if($(this).hasClass("rejectFile")){
                    rejectFile($(this).attr("data"));
                }
                // var selectNum=$(this).parent().parent().parent().parent()[0].index;
                // data[selectNum].state=$(this).val();
            });
        }

    function Pagination(current,total,show){
        this.current=current;
        this.total=total;
        this.show=show;
        this.init();
    }
    Pagination.prototype.init=function(){
        //1.根据显示数量算出正常情况当前页的左右各有几个
        var region=Math.floor(this.show/2);
        //2.计算出当前页面上的起始值
        this.begin=this.current-region;
        this.begin=this.begin<1?1:this.begin;
        //3.计算出当前页面上的结束值
        this.end=this.begin+this.show-1;
        if(this.end>this.total){
            this.end=this.total;
            this.begin=this.end-this.show+1;
            this.begin=this.begin<1?1:this.begin;
        }
    }
    Pagination.prototype.render=function(pagination){
        var self=this;
        this.obj=pagination;
        var container=document.querySelector(pagination);
        container.innerHTML="";

        //插入向前的标签按钮
        var prevElement=document.createElement("li");
        prevElement.innerHTML='<a href="#">&laquo;</a>';
        $(prevElement).click(function(){
            self.prev();
        })
        container.appendChild(prevElement);
        if(this.current==1){
            $(prevElement).addClass("disabled");
        }

        //插入中间的数字
        for(let i=this.begin;i<=this.end;i++){
            var liElement=document.createElement("li");
            $(liElement).click(function(){
                self.current=i;
                self.init();
                self.render(self.obj);
            })
            liElement.innerHTML='<a href="#">'+i+'</a>';
            if(i==this.current){
                $(liElement).addClass("active");
            }
            container.appendChild(liElement);
        }


        //插入向后的按钮
        var nextElement=document.createElement("li");
        nextElement.innerHTML='<a href="#">&raquo;</a>';
        $(nextElement).click(function(){
            self.next();
        })
        container.appendChild(nextElement);
        if(this.current==this.end){
            $(nextElement).addClass("disabled");
        }
    }
    Pagination.prototype.getCurrentPage=function(){
        return this.current;
    }
    Pagination.prototype.next=function(){
        if(this.current+1>this.total){
            this.current=this.total;
        }else{
            this.current+=1;
            this.init();
            this.render(this.obj);
        };
    }

    Pagination.prototype.prev=function(){
        if(this.current-1<=0){
            this.current=0;
        }else{
            this.current-=1;
            this.init();
            this.render(this.obj);
        };
        
    }

})