<?php
	header("content-type","text/html;charset=utf-8");
	
	//一、接收前端传来的数据
	$phoneNum = $_POST["phoneNum"];
	$userPass = $_POST["userPass"];
//	$phoneNum ="13571979034";
//	$userPass ="123456";
	
	//二、保存数据
	//1、 建立连接并保存数据库
	$con = mysql_connect("localhost","root","qianfeng");
	if(!$con){
		//die("连接失败".mysql_error());
		echo "0";
	}
	mysql_select_db("web20170427",$con);
	//2 执行SQL语句
	$sqlStr = "insert into userreg(phoneNum,userPass)
               values('".$phoneNum."','".$userPass."')";
	mysql_query($sqlStr,$con);
	//3、关闭数据库
	mysql_close($con);
	//三、给前端响应
	echo "1";
?>