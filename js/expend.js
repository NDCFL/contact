$(function(){
	$("footer li").hover(function(){
		var index = $(this).index()
	    if($(this).eq(index).hasClass("blue")){
	        $(this).eq(index).removeClass("blue");
	    }else{
	        $(this).eq(index).addClass("blue");
	    }    
	})

// 返回
	$(".header-left").click(function(){
		history.go(-1)
	})
//换箭头
 var toggle = true;
    $(".pta").click(function(){
        if(toggle){
            $(this).css("background-image", "url(./images/arrow-down.png)");
            toggle = false;
        }else{
            $(this).css("background-image", "url(./images/arrow-top.png)");
            toggle = true;
        }

})

})