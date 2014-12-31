window.onload = function() {
	draw52("canvas51");
	draw53("canvas521");
	draw54("canvas522");
	draw55("canvas523");
};
/***代码清单5-2 绘制矩形的脚本文件***/
function draw52(id){
	var canvas = document.getElementById(id);
	if(canvas == null){
		return false;
	}
	var context = canvas.getContext('2d');
	context.fillStyle = "#EEEEFF";
	context.fillRect(0, 0, 400, 300);
	context.fillStyle = "red";			//填充颜色
	context.strokeStyle = "blue";		//边框颜色
	context.lineWidth = 1;				//指定线宽
	context.fillRect(50, 50, 100, 100);		//填充矩形
	context.strokeRect(50, 50, 100, 100);	//绘制矩形边框
}
/***代码清单5-3 绘制圆形***/
function draw53(id){
	var canvas = document.getElementById(id);
	if(canvas == null){
		return false;
	}
	var context = canvas.getContext('2d');
	context.fillStyle = "#EEEEFF";
	context.fillRect(0, 0, 400, 400);
	var n = 0;
	for(var i=0; i<10; i++){
		context.beginPath();			//调用该方法，开始路径的创建。
//		context.arc(x, y, radius, startAngle, endAngle, anticlockwise);
//		(起点横坐标，起点纵坐标，半径，开始角度，结束角度，是否按顺时针方向进行绘制)
//		arc方法不禁可以用来绘制圆形，也可以用来绘制圆弧。因此，使用时必须要指定开始角度与结束角度。因为这两个角度决定了弧度。
//		anticlockwise参数为一个布尔值的参数，参数为true时，按顺时针绘制；参数为false时，按逆时针方向绘制。
		context.arc(i*25, i*25, i*10, 0, Math.PI*2, true);
//		context.arc(i*25, i*25, i*10, Math.PI*1.5, Math.PI*2, true);
		context.closePath();			//将路径关闭后，路径的创建工作就完成了，但是请注意，这时只是路径创建完毕而已，还没有真正绘制任何图形。
		context.fillStyle = 'rgba(255, 0, 0, 0.25)';
		context.fill();					//填充图形
		context.strokeStyle = "blue";
		context.stroke();				//绘制图形边框
	}
}
/***代码清单5-4 重叠绘制***/
function draw54(id){
	var canvas = document.getElementById(id);
	if(canvas == null){
		return false;
	}
	var context = canvas.getContext('2d');
	context.fillStyle = "#EEEEFF";
	context.fillRect(0, 0, 400, 400);
	var n = 0;
	for(var i=0; i<10; i++){
//		if(i>6){
//			context.beginPath();
//		}
		context.arc(i*25, i*25, i*10, 0, Math.PI*2, true);
//		if(i>6){
//			context.closePath();
//		}
		context.fillStyle = 'rgba(255, 0, 0, 0.25)';
		context.fill();
	}
}
/***代码清单5-5 绘制复杂图形***/
function draw55(id){
	var canvas = document.getElementById(id);
	if(canvas == null){
		return false;
	}
	var context = canvas.getContext('2d');
	context.fillStyle = "#EEEEFF";
	context.fillRect(0, 0, 400, 300);
	var n = 0;
	var dx = 150;
	var dy = 150;
	var s = 100;
	context.beginPath();
	context.fillStyle = 'rgb(100, 255, 100)';
	context.strokeStyle = 'rgb(0, 0, 100)';
	var x = Math.sin(0);
	var y = Math.cos(0);
	var dig = Math.PI / 15 * 11;
	for(var i=0; i<30; i++){
		var x = Math.sin(i * dig);
		var y = Math.cos(i * dig);
		context.lineTo(dx + x * s, dy + y * s);
	}
	context.closePath();
	context.fill();
	context.stroke();
}