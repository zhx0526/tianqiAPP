//如何获取界面中的元素以及操作
var aa="123";
//输出
console.log(aa);
//当页面加载完成时
window.onload=function () {
	//当点击按钮消失
    var button=document.getElementsByClassName("button");
    console.log(button);
    //为这个botton设置事件
	button[0].onclick=function(){
	    //alert("这是一个按钮");
	    //得到city页面 让botton所在的页面消失
	    var city=document.getElementsByClassName("city");
	    console.log(city);
	    city[0].style.display="none";
	}
	var pos=document.getElementsByClassName("pos");
	console.log(pos);
	//为pos设置事件
	pos[0].onclick=function(){

		var city=document.getElementsByClassName("city");
	    console.log(city);
	    city[0].style.display="block";
	}
}

//关与城市的数据
$.ajax({
	url:"https://www.toutiao.com/stream/widget/local_weather/city/",
    dataType:"jsonp",
    method:"get",
    success:function(obj){
    	//输出obj
    	console.log(obj);
    	var city=obj.data;
    	console.log(city);
    }
})
//关于天气的数据
$.ajax({
	url:"https://www.toutiao.com/stream/widget/local_weather/data/?city=太原",
	dataType:"jsonp",
	method:"get",
	success:function(obj){
		var tianqi=obj.data;
		// console.log(tianqi);
		console.log(tianqi);

		//var tem=tianqi.weather
	}
})

