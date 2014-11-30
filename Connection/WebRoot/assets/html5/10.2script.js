/**
 * 与线程进行数据交互示例的后台脚本代码
 * @param event
 */
onmessage = function(event){
	var data = event.data;
	var returnStr="";		//将3的倍数拼接成字符串并返回
	var intArray = data.split(";");		//返回字符串中数字分隔符为；
	for(var i=0; i<intArray.length; i++){
		if(parseInt(intArray[i])%3 ==0){
			if(returnStr != "")		//能否被3整除
				returnStr += ";";
			returnStr += intArray[i];
		}
	}
	postMessage(returnStr);
};