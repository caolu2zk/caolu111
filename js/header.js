$(function(){
	
	var listArr_cn = ["集团官网","男生潮流","女生潮流","物趣分享","潮流嘉年华"];
	var listArr_en = ["YOHO!","YOHO!BOYS","YOHO!GIRLS","YOHO!SHOW","YO'HOOD"];
	$(".groupList>li").mouseover(function(){
		var index = $(".groupList>li").index(this);
		$(this).text(listArr_cn[index]);
	});
	
	$(".groupList>li").mouseout(function(){
		var index = $(".groupList>li").index(this);
		$(this).text(listArr_en[index]);
	});
});
	


