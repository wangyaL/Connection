package utils;

import java.io.FileOutputStream;
import java.sql.Connection;
import java.sql.DatabaseMetaData;
import java.sql.DriverManager;
import java.sql.ResultSet;

import bean.DB;
import bean.DBColumn;
import bean.DBTable;

import com.thoughtworks.xstream.XStream;

public class DBStructure2Xml {

	/**
	 * @param args
	 */
	public static void main(String[] args){
		try{
//		Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
//		Connection conn = DriverManager.getConnection("jdbc:sqlserver://172.18.1.4:1433;databaseName=DSCSYS","sa","Upowersoft0591");
		Class.forName("com.mysql.jdbc.Driver");
		Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/icsp_ssh","root","123456");
		DatabaseMetaData metaData = conn.getMetaData();
//		ResultSet tables = metaData.getTables(null, "%", "ADMMD", new String[]{"TABLE"});
		ResultSet tables = metaData.getTables(null, null, "%", new String[]{"TABLE","VIEW","SYSTEM TABLE"});
		DB db = new DB();
		db.setProductName(metaData.getDatabaseProductName());
		db.setName(conn.getCatalog());
//System.out.println(tables.next());		
		while(tables.next()){
			DBTable table = new DBTable();
			table.setName(tables.getString("TABLE_NAME"));
			table.setRemarks(tables.getString("remarks"));
			
			ResultSet columns = metaData.getColumns(null, "%", table.getName(), "%");
//System.out.println(columns.next());
			while(columns.next()){

				DBColumn column = new DBColumn();
				column.setName(columns.getString("COLUMN_NAME"));
				column.setSqlType(columns.getString("TYPE_NAME"));
				column.setNullable(columns.getInt("NULLABLE") == 1);
				column.setLength(columns.getInt("COLUMN_SIZE"));
//				column.setUnique(columns.getu);primaryKey
//	System.out.println(columns.getString("IS_PRIMARYKEY"));
				column.setDecimalDigits(columns.getInt("DECIMAL_DIGITS"));
				column.setAutoIncrement(!"NO".equals(columns.getString("IS_AUTOINCREMENT")));
//				System.out.println(!"NO".equals(columns.getString("IS_AUTOINCREMENT")));
				column.setRemarks(columns.getString("REMARKS"));
				table.addColumn(column);
			}
			db.addTable(table);
		}
		conn.close();
		XStream xStream = new XStream();
		xStream.alias("database", DB.class);
		xStream.alias("table", DBTable.class);
		xStream.alias("column", DBColumn.class);
		StringBuilder sb = new StringBuilder("<?xml version=\"1.0\" encoding=\"utf-8\"?>\n");
		String xml =xStream.toXML(db);
		sb.append(xml);
//		FileOutputStream output = new FileOutputStream("D:/"+db.getName()+".xml");
//		output.write(sb.toString().getBytes());
//		output.close();
		System.out.println(sb.toString());
		
		}catch(Exception e){
			e.printStackTrace();
		}
	}

}
