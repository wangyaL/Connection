/**
 * 在多个子线程中进行数据交互示例的主线程代码
 * @param event
 */
onmessage = function(event){
	var worker;
	//创建发送数据的子线程
	worker = new Worker("10.3.2worker1.js");
	worker.postMessage("");
	worker.onmessage = function(event){
		//接收子线程中数据，本示例中为创建好的随机数租
		var data = event.data;
		//创建接收数据子线程
		worker = new Worker("10.3worker2.js");
		worker.postMessage(data);
		worker.onmessage = function(event){
			//获取接收数据的子线程中传回的数据，本示例中为挑选结果
			var data = event.data;
			//把挑选结果发送返回主页面
			postMessage(data);
		};
	};
};