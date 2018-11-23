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
})