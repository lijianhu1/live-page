window.onload=function(){
    var ajax = new XMLHttpRequest();
    ajax.open("GET", "/font/icons/svg-symbols.svg", true);
    ajax.onload = function(e) {
        document.body.insertAdjacentHTML("afterBegin", '<div style="display:none;">' + ajax.responseText + '</div>');
    }
    ajax.send();
}

function headItem(self){
    $(self).addClass('active').siblings().removeClass('active');
}

function iconBtn(self,name){
    var $item = $(self).parent().parent().find('.item-list');
    var left = parseInt($item.css('left').split('p')[0]);
    var num = parseInt($item.children().length/4);
    var width = 1200*num;
    if(name=='right'){
        if(left<=-width){
            left=1200
        }
        left=left-1200;
        $item.css({'left':left+'px','transition':'0.5s'});
    }else if(name=='left'){
        if(left>=0){
            left = -1200
        }
        left=left+1200;
        $item.css({'left':left+'px','transition':'0.5s'});

    }


}

function focusBtn(self){
    var $item = $(self).parent().parent().find('.item-list');
    $(self).addClass('active').siblings().removeClass('active');
    var index = $(self).index();
    var left = -1200*index;
    $item.css({'left':left+'px','transition':'0.5s'});
}