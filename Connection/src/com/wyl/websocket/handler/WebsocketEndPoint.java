package com.wyl.websocket.handler;

import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

/**
 *  4.1创建websocket处理类
 * @author wyl
 * @version 2014年12月1日 上午10:12:24
 */
public class WebsocketEndPoint extends TextWebSocketHandler {
	@Override  
    protected void handleTextMessage(WebSocketSession session,  
            TextMessage message) throws Exception {  
        super.handleTextMessage(session, message);  
        TextMessage returnMessage = new TextMessage(message.getPayload()+" received at server");  
        session.sendMessage(returnMessage);  
    }  
}
