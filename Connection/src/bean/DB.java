package bean;

import java.util.ArrayList;
import java.util.List;

public class DB {
	private String name;
	private String productName;
	private List<DBTable> tables = new ArrayList<DBTable>();
	public List<DBTable> getTables() {
		return tables;
	}
	public void setTables(List<DBTable> tables) {
		this.tables = tables;
	}
	public void addTable(DBTable table){
		tables.add(table);
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
}
