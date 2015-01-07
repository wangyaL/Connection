window.onload = function() {
	draw52("canvas52");
	draw53("canvas53");
	draw54("canvas54");
	draw55("canvas55");
	draw56("canvas56");
	draw57("canvas57");
	draw58("canvas58");
	draw59("canvas59");
	draw510("canvas510");
	draw511("canvas511");
	draw512("canvas512");
	draw513("canvas513");
};
/**
 * 代码清单5-2 绘制矩形的脚本文件
 * @param id
 * @returns {Boolean}
 */
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
/**
 * 代码清单5-3 绘制圆形
 * @param id
 * @returns {Boolean}
 */
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
/**
 * 代码清单5-4 重叠绘制
 * @param id
 * @returns {Boolean}
 */
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
/**
 * 代码清单5-5 绘制复杂图形
 */
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
/**
 * 代码清单5-6 绘制贝济埃曲线
 * @param id
 * @returns {Boolean}
 */
function draw56(id){
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
	context.globalCompositeOperation = 'add';
	context.fillStyle = 'rgb(100,255,100)';
	var x = Math.sin(0);
	var y = Math.cos(0);
	var dig = Math.PI / 15 * 11;
	context.moveTo(dx, dy);
	for(var i =0; i< 30; i++){
		var x = Math.sin(i * dig);
		var y = Math.cos(i * dig);
		context.bezierCurveTo(dx + x * s, dy + y * s - 100, dx + x * s +100,
		dy + y *s, dx + x *s, dy + y * s);
//		context.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
//		绘制贝济埃曲线的时候，需要两个控制点，cp1和cp2，和一个终点
	}
	context.closePath();
	context.fill();
	context.stroke();
}
/**
 * 代码清单5-7 绘制线性渐变
 */
function draw57(id){
	var canvas = document.getElementById(id);
	if(canvas == null){
		return false;
	}
	var context = canvas.getContext('2d');
//	绘制线性渐变时，需要使用到LinearGradient对象。使用图形上下文对象的createLinearGradient方法创建该对象
//	context.createLinearGradient(xStart, yStart, xEnd, yEnd);
//	x渐变开始地点，y渐变结束地点
//	使用context.addColorStop(offset, color);方法可以追加渐变的颜色。
//	offset为所设定的颜色离开地点的偏移量，值的范围在0到1之间的浮点值
//	接着把fillStyle设定为LinearGradient对象，然后执行填充的方法，就可以绘制出渐变图形了。
	var g1 = context.createLinearGradient(0,0,0,300);
	g1.addColorStop(0, 'rgb(255, 255, 0)');
	g1.addColorStop(1, 'rgb(0, 255, 255)');
	context.fillStyle = g1;
	context.fillRect(0, 0, 400, 300);
	var n = 0;
	var g2 = context.createLinearGradient(0,0,300,0);
	g2.addColorStop(0, 'rgba(0, 0, 255, 0.5)');
	g2.addColorStop(1, 'rgba(255, 0, 0, 0.5)');
	for(var i=0; i<10; i++){
		context.beginPath();
		context.fillStyle = g2;
		context.arc(i*25, i*25, i*10, 0, Math.PI*2, true);
		context.closePath();
		context.fill();
	}
}
/**
 * 代码清单5-8 绘制径向渐变
 * @param id
 */
function draw58(id){
	var canvas = document.getElementById(id);
	if(canvas == null){
		return false;
	}
	var context = canvas.getContext('2d');
	var g1 = context.createRadialGradient(400, 0, 0, 400, 0, 0, 400);
	g1.addColorStop(0.1, 'rgb(255, 255, 0)');
	g1.addColorStop(0.3, 'rgb(255, 0, 255)');
	g1.addColorStop(1, 'rgb(0, 255, 255)');
	context.fillStyle = g1;
//	context.fillStyle = '#eeeeff';
	context.fillRect(0, 0, 400, 300);
	var n = 0;
//	使用图形上下文对象的createRadialGradient方法绘制径向渐变，
//	context.createRadialGradient(xStart,yStart,radiusStart,xEnd,yEnd,radiusEnd);
//	xStart,yStart为开始园的圆心坐标，radiusStart为开始圆的半径
//	xEnd,yEnd为结束圆的圆心坐标，radiusEnd为结束圆的半径
	var g2 = context.createRadialGradient(250, 250, 0, 250, 0, 250, 300);
	g2.addColorStop(0.1, 'rgba(255, 0, 0, 0.5)');
	g2.addColorStop(0.7, 'rgba(255, 255, 0, 0.5)');
	g2.addColorStop(1, 'rgba(0, 0, 255, 0.5)');
	for(var i=0; i<10; i++){
		context.beginPath();
		context.fillStyle = g2;
		context.arc(i*25, i*25, i*10, 0, Math.PI*2, true);
		context.closePath();
		context.fill();
	}
}
/**
 * 代码清单5-9 坐标变换
 */
function draw59(id){
	var canvas = document.getElementById(id);
	if(canvas == null){
		return false;
	}
	var context = canvas.getContext('2d');
	context.fillStyle = "#eeeeff";
	context.fillRect(0, 0, 400, 300);
	//图形绘制
	context.translate(200, 50);
	context.fillStyle = 'rgba(255, 0, 0, 0.25)';
	for(var i=0; i<50; i++){
		context.translate(25, 25);		//平移
		context.scale(0.95, 0.95);		//扩大
		context.rotate(Math.PI / 10);	//旋转
		context.fillRect(0, 0, 100, 50);
	}
}
/**
 * 代码清单5-10 坐标变换与路径结合使用
 * @param id
 */
function draw510(id){
	var canvas = document.getElementById(id);
	if(canvas == null){
		return false;
	}
	var context = canvas.getContext('2d');
	context.fillStyle = "#eeeeff";
	context.fillRect(0, 0, 400, 300);
	//图形绘制
	context.translate(200, 50);
	for(var i=0; i<50; i++){
		context.translate(25,25);
		context.scale(0.95,0.95);
		context.rotate(Math.PI / 10);
		create5Star(context);
		context.fill();
	}
}
/**
 * 创建一个五角星
 * @param context
 */
function create5Star(context){
	var n = 0;
	var dx = 100;
	var dy = 0;
	var s = 50;
	//创建路径
	context.beginPath();
	context.fillStyle = 'rgba(255,0,0,0.5)';
	var x = Math.sin(0);
	var y = Math.cos(0);
	var dig = Math.PI / 5 * 4;
	for(var i=0; i<5; i++){
		var x = Math.sin(i * dig);
		var y = Math.cos(i * dig);
		context.lineTo(dx+x*s, dy+y*s);
	}
	context.closePath();
}
/**
 * 代码清单5-11 用transform方法实现变形
 * @param id
 */
function draw511(id){
	var canvas = document.getElementById(id);
	if(canvas == null){
		return false;
	}
	var context = canvas.getContext('2d');
	/* 定义颜色 */
	var colors = ["red","orange","yellow","green","blue","navy","purple"];
	/* 定义线宽 */
	context.lineWidth = 10;
	context.transform(1, 0, 0, 1, 100, 0);
	/* 循环绘制圆弧 */
	for(var i=0; i<colors.length; i++){
		/* 定义每次向下移动10个单位的变换矩阵 */
		context.transform(1, 0, 0, 1, 0, 10);
		/* 定义颜色 */
		context.strokeStyle = colors[i];
		/* 绘制圆弧 */
		context.beginPath();
		context.arc(50, 100, 100, 0, Math.PI, true);
		context.stroke();
	}
}
/**
 * 代码清单2-12 使用setTransform方法绘制变形图形
 * @param id
 */
function draw512(id){
	var canvas = document.getElementById(id);
	if(canvas == null){
		return false;
	}
	var context = canvas.getContext('2d');
	/* ----------------------------------------------
	 * 绘制红色长方形
	 * ------------------------------------------- */
	context.strokeStyle = 'red';
	context.strokeRect(30, 10 , 60, 20);
	/* ----------------------------------------------
	 * 绘制顺时针旋转45度后的蓝色长方形
	 * ------------------------------------------- */
	/* 绘制45度 圆弧 */
	var rad = 45*Math.PI/180;
	/* 定义顺时针旋转45度 的变换矩阵 */
	context.setTransform(Math.cos(rad), Math.sin(rad), -Math.sin(rad), Math.cos(rad), 0, 0);
	/* 绘制图形 */
	context.strokeStyle = "blue";
	context.strokeRect(30, 10, 60, 20);
	/* ----------------------------------------------
	 * 绘制放大2.5倍后的绿色长方形
	 * ------------------------------------------- */
	/* 定义放大2.5倍的变换矩阵 */
	context.setTransform(2.5, 0, 0, 2.5, 0, 0);
	/* 绘制图形 */
	context.strokeStyle = "green";
	context.strokeRect(30,10,60,20);
	/* ----------------------------------------------
	 * 将坐标原点向后移动40像素，向下移动80像素后绘制灰色长方形
	 * ------------------------------------------- */
	/* 将坐标原点向后移动40像素，向下移动80像素后绘制灰色长方形 */
	context.setTransform(1, 0, 0, 1, 40, 80);
	/* 绘制图形 */
	context.strokeStyle = "gray";
	context.strokeRect(30,10,60,20);
}
/**
 * 代码清单2-13 图形组合
 */
function draw513(id){
	var canvas = document.getElementById(id);
	if(canvas == null){
		return false;
	}
	var context = canvas.getContext('2d');
	var oprtns = new Array("source-atop","source-in",
			"source-out","source-over",
			"destination-atop","destination-in",
			"destination-out","destination-over",
			"lighter","copy","xor");
	i = 8;
//	//绘制原有图形（蓝色长方形）
//	context.fillStyle = "blue";
//	context.fillRect(10,10,60,60);
//	//设置组合方式，从组合的参数数组中挑选组合方法，此处因为i是8，所以选择oprtns数组中第9个组合方式lighter
//	context.globalCompositeOperation = oprtns[i];
//	//设置新图形（红色圆形）
//	context.beginPath();
//	context.fillStyle = "red";
//	context.arc(60,60,30,0,Math.PI*2, false);
//	context.fill();
	
	var dx = 0;
	var dy = 0;
	var n = 0;
	for(var i=0; i<oprtns.length; i++){
		if(i%1==0){
			dx += 90;
		}else if(i&2==0){
			dx += 2*90;
		}else if(i%3==0){
			dx += 3*90;
		}
		if(i%4==0){
			dy += n*90;
			dx = 0;
			n = 1;
		}
		
		context.beginPath();
		context.fillStyle = "blue";
		context.fillRect(10+dx,10+dy,60,60);
//		context.globalCompositeOperation = oprtns[i];
//		context.fillStyle = "red";
//		context.arc(60+dx,60+dy,30,0,Math.PI*2, false);
		context.fill();
	}
}

