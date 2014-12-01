package servlet;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * 
 * @author wyl
 * @version 2014年12月1日 上午10:19:24
 */
@SuppressWarnings("serial")
public class TestServlet extends HttpServlet {

	public void doGet(HttpServletRequest req, HttpServletResponse resp){
		doPost(req, resp);
	}
	public void doPost(HttpServletRequest req, HttpServletResponse resp){
		System.out.println("==========进入后台=========");
	}
}
