
"use strict";

function Accordion(obj){
	this.accordionId = obj.accordionId;
	this.width = obj.width;
	this.height = obj.height;
	
	this.times = obj.times;//一个琴键移动过程所需要的时长。
	this.imgArr = obj.imgArr;
	//每个琴键的宽度；
	this.keyWidth = obj.keyWidth;
	//计算每张图片的宽度；
	this.imgWidth = this.width-(this.imgArr.length-1)*this.keyWidth;
	this.initUI();
	this.addEvent();

}

Accordion.prototype.initUI = function(){
	let str = "";
	str += "<ul style='position:absolute;left:0px;top:0px'>";
	for(let i=0;i<this.imgArr.length;i++){	
		
		str += "<li style='border-left:3px solid white;position:absolute;left:"+(i*this.keyWidth)+"px;top:0px;width:"+this.imgWidth+"px;height:"+this.height+"px;'>";
		str += "<img src='"+this.imgArr[i]+"' style='width:"+this.imgWidth+";height:"+this.height+"' /></li>";
		//console.log(str);
	}
	str+="</ul>";
	$(this.accordionId).append(str);
}

Accordion.prototype.addEvent = function(){
	let that = this;
	$(this.accordionId+" li").mouseover(function(){
		let index = $(that.accordionId+" li").index(this); //index = 2;此处是下标	
		
		//计算左边的坐标，和右边的坐标。
		let leftX = index*that.keyWidth;
		let rightX = (index-1)*that.keyWidth+that.imgWidth;
		let currentLeft = parseInt($(this).css("left"));
		
		if(currentLeft<rightX){
			//右移：
			$(that.accordionId+" li:gt("+index+")").each(function(i){//循环两次 i=0,1；
				//console.log(i);
				let leftTemp = ((index+i)*that.keyWidth+that.imgWidth);
				$(this).animate({
					left:leftTemp+"px"
				},that.times);
			});
			
		}else if(currentLeft>leftX){
			//左移：
			$(that.accordionId+" li:lt("+(index+1)+")").each(function(i){
				console.log(i);
				let leftTemp = (i*that.keyWidth);
				$(this).animate({
					left:leftTemp+"px"
				},that.times);
			});	
		}
		
	});
}

$(function(){
	new Accordion({
		accordionId:"#accordion",      
		width:1150,      
		height:400,    
		times:500,      
		   
		imgArr:["img/accordion1.jpg","img/accordion2.jpg","img/accordion3.jpg","img/accordion4.jpg","img/accordion5.jpg"],
		keyWidth:125, 
	});
	
})

