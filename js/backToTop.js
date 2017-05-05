$(function(){
	$(window).scroll(function(){ 
	   	var scrollY=$(window).scrollTop(); 
	   	var rwidth=$(window).width();
	   	if(scrollY>0){ 
	    	$("#corner").css("display","block"); 
	    	$("#corner").css("left",(rwidth-60)+"px");
	   	}else{ 
	   		$("#corner").css("display","none"); 
	   	} 
	});
	
	$(".backtop").click(function(){ 
	   	var scrollY=$(window).scrollTop(); 
	   	$("body,html").animate({
	   		scrollTop:0
	   	},500)
	});	
	//当鼠标滑过时，背景色变为黑色
//	$("#corner .code").mouseover(function(){
//	   	$("#corner .code").css("backgroundColor","black");
//	   	$("#corner .code img").css("display","block");
//	});
//	
//	$("#corner .code").mouseout(function(){
//	   	$("#corner .code").css("backgroundColor","lightgray");
//	   	$("#corner .code img").css("display","none");
//	});
	
	$("#corner .backtop").mouseover(function(){
	   	$("#corner .backtop").css("backgroundColor","black");
	});
	
	$("#corner .backtop").mouseout(function(){
	   	$("#corner .backtop").css("backgroundColor","lightgray");
	});
	
});
