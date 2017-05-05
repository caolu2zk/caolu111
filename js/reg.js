$(function(){
	//手机号 11位 以13或18或17或14或15开头  其余为数字
	//合法性验证
	$("#phoneNum").blur(function(){
		var reg = /^(13|18|17|14|15)\d{9}$/;
		var str=$("#phoneNum").val();
		if(!reg.test(str) && str!=''){
			$("#showPhoneNum").html("手机号不合法");
			$("#phoneNum").css("border","1px solid red");
		}else if(str==''){
			$("#showPhoneNum").html("手机号不能为空");
			$("#phoneNum").css("border","1px solid red");
		}else{
			$("#showPhoneNum").html("合法");
		}
	});
	//手机号存在性验证
	$("#phoneNum").blur(function(){
		$.get(
			"checkUser.php",
			{
				"phoneNum":$("#phoneNum").val()
			},
			function(data){
				if(data == "1"){
					$("#showPhoneNum1").html("√");
				}else{
					$("#showPhoneNum1").html("×");
				}
			}
		)
	});
	
	//点击注册按钮时添加手机号
	$("#btn02").click(function(){
		//1、
		$.post(
			"addUser1.php",
			{
				"phoneNum":$("#phoneNum").val(),
				"userPass":$("#userPass").val()
			},
			function(data){					
				location.href="successReg.html";
//				if(data=="1"){//注册成功！
//					location.href="login.html";
//				}else{
//					alert("注册失败");
//				}
			}
		);
	});
	
	//图片验证码	
	var numStr = "";
	function changeCode(){
		var arr=[];
		var numArr=[];
		numStr = "";
		for(var i=49;i<=57;i++){
			arr.push(i);
			numArr.push(String.fromCharCode(i));
		}
		for(var i=65;i<=90;i++){
			arr.push(i);
			numArr.push(String.fromCharCode(i));
		}
		for(var i=97;i<=122;i++){
			arr.push(i);
			numArr.push(String.fromCharCode(i));
		}

		var str="";
		for(var i=0;i<4;i++){
			var index=parseInt(Math.random()*arr.length);
			str=str+"<img src='images/"+arr[index]+".jpg' />";
			numStr+=numArr[index];
		}

		$("#showCode").html(str);
	}
	changeCode();
	$("#changeId").click(function(){//点击"换一组"时
		changeCode();//执行重新换验证码
	});
		
		
	$("#userMaId").blur(function(){
		var str = $("#userMaId").val();
		var reg=/^[a-zA-Z0-9]{4}$/ig;
		if(reg.test(str)==false){
			$("#cheackId").text("您输入的验证码格式有误");
			//$("#cheackId").css({"color","red"});
		}else{
			if(str.toLowerCase()==numStr.toLowerCase()){
				$("#cheackId").text("验证码正确");
				//$("#cheackId").css({"color","green"});
			}else{
				$("#cheackId").text("验证码错误");
				//$("#cheackId").css({"color","red"});
			}
		}
		//$('.box2').css({"borderColor","#CF0048"});
	});
		


	$("#userMaId").focus(function(){
		$("#cheackId").html("");
		//$('.box2').css({"borderColor","#c5c8c6"});
	});
});


		
	