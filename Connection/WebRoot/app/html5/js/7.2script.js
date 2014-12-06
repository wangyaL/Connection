/***代码清单7-7 Web留言本 start***/
window.onload = function(){
	init77();
};
var datatable = null;
var db = openDatabase('MyData', '', 'My Database', 102400);
function init77(){
	datatable = document.getElementById("datatable77");
	showAllData77();
}
function removeAllData77(){
	for(var i=datatable.childNodes.length-1; i>=0; i--){
		datatable.removeChild(datatable.childNodes[i]);
	}
	var tr = document.createElement("tr");
	var th1 = document.createElement("th");
	var th2 = document.createElement("th");
	var th3 = document.createElement("th");
	th1.innerHTML = "姓名";
	th2.innerHTML = "留言";
	th3.innerHTML = "时间";
	tr.appendChild(th1);
	tr.appendChild(th2);
	tr.appendChild(th3);
	datatable.appendChild(tr);
}
function showData77(row){
	var tr = document.createElement("tr");
	var td1 = document.createElement("td");
	td1.innerHTML = row.name;
	var td2 = document.createElement("td");
	td2.innerHTML = row.message;
	var td3 = document.createElement("td");
	var t = new Date();
	t.setTime(row.time);
	td3.innerHTML = t.toLocaleDateString()+" "+t.toLocaleTimeString();
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	datatable.appendChild(tr);
}
function showAllData77(){
	db.transaction(function(tx){
		var sql1 = "create table if not exists MsgData(name text, message text, time integer)";
		tx.executeSql(sql1, [], function(tx, rs){
			console.log("创建数据库成功！");
		}, function(tx, error){
			alert("创建数据库失功！"+error.source + "::"+error.message);
		});
		var sql2 = "select * from MsgData";
		tx.executeSql(sql2, [], function(tx, rs){
//			console.log(rs);
//			console.log(rs.rows);
//			console.log(rs.rows[0]);
//			console.log(rs.rows.item[0]);
//			console.log(rs.rows.item(0));
			removeAllData77();
			for(var i=0; i<rs.rows.length; i++){
				showData77(rs.rows.item(i));
			}
		});
	});
}
function addData77(name, message, time){
	db.transaction(function(tx){
		var sql = "insert into MsgData values(?, ?, ?)";
		tx.executeSql(sql, [name, message, time], function(tx, rs){
			console.log("成功保存数据！");
		}, function(tx, error){
			alert(error.source + "::"+error.message);
		});
	});
}
function saveData77(){
	var name = document.getElementById("name77").value;
	var memo = document.getElementById("memo77").value;
	var time = new Date().getTime();
	addData77(name, memo, time);
	showAllData77();
}
/***代码清单7-7 Web留言本 end***/