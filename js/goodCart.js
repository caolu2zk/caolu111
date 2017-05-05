$(function(){
//	$.get(
//		"getShoppingCart.php",
//		function(data){
//			
//			
//		}
//	)
		 var oUl=$('.cart-list');
	  var aLi=$('.cart-list li');
	  for(var i=0;i<aLi.length;i++){
	   		fn1(aLi[i]);
	  }
	  function fn1(aLi){
		   //var aBtn=$('.plusAndSub input');
		   var count=parseInt($('.plusAndSub strong').text());//数量
		   var price=parseFloat($('.s1 em').text());
		   var total=parseFloat($('.s2 span').text());
		   $('.plusAndSub .input1').click(function(){
		   		if(count>0)
			   {
				   count--;
				   //aStrong.innerHTML=count;
				   total = (count*price).toFixed(1)+'元';//保留一位小数
				   $(".plusAndSub strong").text(count);
				   $('.s2 span').text(total);
				 }
		   });
		   
		   $('.plusAndSub .input2').click(function(){
		   		count++;
			   //aStrong.innerHTML=count;
			   $(".plusAndSub strong").text(count);
			   total = (count*price).toFixed(1)+'元';
			   $('.s2 span').text(total);
		   });
	  }
	  
//	  $(".colorAndSize p").mouseover(function(){
//	  	$(".colorAndSize p").css({"border":"1px dashed red"});
//	  });
			
			$("#allCheck").click(function(){
				$(this).checkedAll(".cart-list >li .info");
			});
});
