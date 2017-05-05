/*
[
{ 'goodsId':'01001','goodsName':'李宁牌运动鞋' ,'goodsType':'运动鞋','goodsPrice':'350' ,'goodsCount':'0','goodsDesc':'' ,'goodsImg':'','beiyong1':'' ,'beiyong2':'','beiyong3':'' ,'beiyong4':'','beiyong5':'' ,'beiyong6':'','beiyong7':'' ,'beiyong8':'','beiyong9':'' ,'beiyong10':'','beiyong11':'' ,'beiyong12':'','beiyong13':'' }
,
{ 'goodsId':'01002','goodsName':'耐克' ,'goodsType':'运动','goodsPrice':'400' ,'goodsCount':'0','goodsDesc':'' ,'goodsImg':'','beiyong1':'' ,'beiyong2':'','beiyong3':'' ,'beiyong4':'','beiyong5':'' ,'beiyong6':'','beiyong7':'' ,'beiyong8':'','beiyong9':'' ,'beiyong10':'','beiyong11':'' ,'beiyong12':'','beiyong13':'' }
]
*/
/*
<li>
	<a href="">
		<div class="shadow"></div>
		<img src="listImg/1.jpg"/>
		<p>BOY LONDON 纯色修身牛仔裤</p>
		<p>￥299.00</p>
	</a>
</li>
*/
$(function(){
	$.get(
		"getGoodsList.php",
	
	function(data){
		var josnArr = eval("("+data+")");
		var str = "<ul class='list clear'>";
		for(var i=0;i<josnArr.length;i++){
			str += "<li><a href=''><div class='shadow'></div><img src='"+josnArr[i].goodsImg+"'/><p>"+josnArr[i].goodsDesc+"</p><p>"+josnArr[i].goodsPrice+"</p></a></li>";
		}
		str += "</ul>";
		$("#main .main-bot .middle").append(str);
	})
});
