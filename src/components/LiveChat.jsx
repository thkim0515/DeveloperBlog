import React, { useState, useEffect } from "react";
import { useUserLogin } from "../context/UserLoginContext";
import { decryptData } from "../js/secure";

export const LiveChat = () => {
  const [ws, setWs] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const [userNickname, setUserNickname] = useState("");
  const { isLogin } = useUserLogin();

  const WEBSOCKET_ADDRESS = process.env.REACT_APP_WEBSOCKET;
  const disconnectWebsocketTime = 6; // 6 분
  const milliseconds = disconnectWebsocketTime * 100000;

  useEffect(() => {
    connectWebSocket();
    const userSession = decryptData("user", sessionStorage);

    if (isLogin && userSession) {
      setUserNickname(userSession?.nickname);
    } else {
      setUserNickname("비로그인유저");
    }
  }, [isLogin]);

  const connectWebSocket = () => {
    if (ws != null) {
      ws.close();
    }

    const websocket = new WebSocket(WEBSOCKET_ADDRESS);
    websocket.onopen = () => {
      console.log("웹소켓 연결됨");
      setMessages([]);
    };
    websocket.onmessage = async (event) => {
      if (event.data instanceof Blob) {
        const text = await event.data.text();
        try {
          const data = JSON.parse(text);
          const displayMessage = `${data.userId || userNickname}: ${
            data.message
          }`;
          setMessages((prev) => [...prev, displayMessage]);
        } catch (e) {
          console.error("JSON 파싱 에러:", e);
        }
      } else {
        try {
          const data = JSON.parse(event.data);
          const displayMessage = `${data.userId || userNickname}: ${
            data.message
          }`;
          setMessages((prev) => [...prev, displayMessage]);
        } catch (e) {
          console.error("JSON 파싱 에러:", e);
        }
      }
    };
    websocket.onclose = () => {
      console.log("웹소켓 연결안됨");
    };
    setWs(websocket);
  };

  useEffect(() => {
    let timeoutId;

    const handleActivity = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (ws) {
          console.log("5분간 반응 X >> 소켓 종료");
          ws.close();
        }
      }, milliseconds);
    };

    window.addEventListener("mousemove", handleActivity);
    window.addEventListener("keypress", handleActivity);

    return () => {
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("keypress", handleActivity);
      clearTimeout(timeoutId);
    };
  }, [ws]);

  const sendMessage = (message) => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({ userId: userNickname, message }));
      setInputText("");
    } else {
      console.log("실시간 채팅 닫힘, 재연결 시도 중...");
      connectWebSocket();
    }
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage(inputText);
    }
  };

  return (
    <div>
      <ul>
        {messages.map((message, idx) => (
          <li key={idx}>{message}</li>
        ))}
      </ul>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={() => sendMessage(inputText)}>전송</button>
    </div>
  );
};
