window.onload = function() {
//	init85();
	init87();
};
/***代码清单8-5 swapCache方法示例的JavaScript代码***/
function init85(){
	setInterval(function(){
		//手工检查是否有更新
		applicationCache.update();
	}, 5000);
	applicationCache.addEventListener("updateready", function(){
		if(confirm("本地缓存已被更新，需要刷新页面来获取应用程序最新版本，是否刷新？")){
			//(3)手工更新本地缓存
			applicationCache.swapCache();
			//重载画面
			location.reload();
		}
	}, true);
}
/***代码清单8-7 applicationCache事件流程示例***/
function init87(){
	var msg = document.getElementById("msg87");
	applicationCache.addEventListener("checking", function(){
		msg.innerHTML += "checking<br>";
	}, true);
	applicationCache.addEventListener("noupdate", function(){
		msg.innerHTML += "noupdate<br>";
	}, true);
	applicationCache.addEventListener("downloading", function(){
		msg.innerHTML += "downloading<br>";
	}, true);
	applicationCache.addEventListener("progress", function(){
		msg.innerHTML += "progress<br>";
	}, true);
	applicationCache.addEventListener("updateready", function(){
		msg.innerHTML += "updateready<br>";
	}, true);
	applicationCache.addEventListener("cached", function(){
		msg.innerHTML += "cached<br>";
	}, true);
	applicationCache.addEventListener("error", function(){
		msg.innerHTML += "error<br>";
	}, true);
}