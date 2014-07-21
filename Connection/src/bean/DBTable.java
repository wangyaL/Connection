package bean;

import java.util.ArrayList;
import java.util.List;

public class DBTable {
	private String name;
	private String remarks;
	private List<DBColumn> columns = new ArrayList<DBColumn>();
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public List<DBColumn> getColumns() {
		return columns;
	}
	public void setColumns(List<DBColumn> columns) {
		this.columns = columns;
	}
	public void addColumn(DBColumn column){
		columns.add(column);
	}
	public String getRemarks() {
		return remarks;
	}
	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}
}
