/**
 * 在多个子线程中进行数据交互示例的发送数据子线程
 * @param event
 */
onmessage = function(event){
	var intArray = new Array(100);		//随机数组
	for(var i=0; i<100; i++){
		intArray[i] = parseInt(Math.random()*100);
	}
	//发送返回随机数组
	postMessage(JSON.stringify(intArray));
	//关闭子线程
	close();
};