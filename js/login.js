$(function(){	
	
	
	$("#btn").click(function(){
		//1、
		$.post(
			"login.php",
			{
				"phoneNum":$("#phoneNum").val(),
				"userPass":$("#userPass").val()
			},
			function(data){					
				if(data=="1"){//登录成功！
					//记录cookie
					saveCookie("phoneNum",$("#phoneNum").val(),7);
					location.href="successLogin.html";
				}else{
					alert("登录失败，用户名或者密码不对！");
				}
			}
		);
	});
	
	
});