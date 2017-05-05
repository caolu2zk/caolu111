var count=5;
    var myTimer;
    function toWeb(){
        count--;
        document.getElementById("timer").innerHTML=count;
        if(count<=0){
			if(count == 0){
				clearInterval(myTimer);
			}
			
            location.href="index.html";
        }
    }
 window.onload=function(){
    myTimer=setInterval(toWeb,1000);
}