import { useState, useEffect, useRef } from "react";
import { useUserLogin } from "../context/UserLoginContext";
import { decryptData } from "../js/secure";
import * as S from "./LiveChat.style";

export const LiveChat = () => {
  /* 로그인 여부 상태관리 */
  /* 세션에 따른 닉네임 or 비로그인 유저 */
  const [userNickname, setUserNickname] = useState("");
  const { isLogin } = useUserLogin();

  useEffect(() => {
    const initializeUserSession = async () => {
      try {
        const userSession = await decryptData("user", sessionStorage);
        if (isLogin && userSession) {
          setUserNickname(userSession.nickname);
        } else {
          setUserNickname("비로그인유저");
        }
      } catch (error) {
        console.error("사용자 세션 데이터 복호화 중 에러 발생:", error);
        setUserNickname("비로그인유저");
      }
    };

    initializeUserSession();

    connectWebSocket();
  }, [isLogin]);

  /* 웹소켓 상태관리 */
  const [ws, setWs] = useState(null);
  const [messages, setMessages] = useState([]);

  /* 웹소켓 연결 변수 관리 */
  // const WEBSOCKET_ADDRESS = "ws://localhost:5000";
  const WEBSOCKET_ADDRESS = "wss://13.125.188.8:5000";
  const disconnectWebsocketTime = 6; // 6 분
  const milliseconds = disconnectWebsocketTime * 100000;

  const connectWebSocket = () => {
    if (ws != null) {
      ws.close();
    }

    const websocket = new WebSocket(WEBSOCKET_ADDRESS);
    websocket.onopen = () => {
      setMessages([]);
    };
    websocket.onmessage = async (event) => {
      if (event.data instanceof Blob) {
        const text = await event.data.text();
        try {
          const data = JSON.parse(text);
          const displayMessage = {
            text: `${data.userId || userNickname}: ${data.message}`,
            timestamp: data.timestamp, // 받은 데이터에서 시간 사용
          };
          setMessages((prev) => [...prev, displayMessage]);
        } catch (e) {
          console.error("JSON 파싱 에러:", e);
        }
      } else {
        try {
          const data = JSON.parse(event.data);
          const displayMessage = {
            text: `${data.userId || userNickname}: ${data.message}`,
            timestamp: data.timestamp, // 받은 데이터에서 시간 사용
          };
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

  /* 맨 밑 스크룰 */
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView(); //({ behavior: "instant" });
  };

  /* 사용자 반응 없을 시 소켓 종료 */
  useEffect(() => {
    let timeoutId;

    const handleActivity = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (ws) {
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

  /* 채팅 인풋 박스 상태관리 */
  const [inputText, setInputText] = useState("");

  const sendMessage = (message) => {
    if (ws && ws.readyState === WebSocket.OPEN) {
      const timestamp = new Date().toLocaleTimeString();
      ws.send(JSON.stringify({ userId: userNickname, message, timestamp }));
      setInputText("");
    } else {
      console.log("실시간 채팅 닫힘, 재연결 시도 중...");
      connectWebSocket();
    }
  };

  /* 입력 상태 관리 */
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage(inputText);
    }
  };

  return (
    <S.Container>
      <S.MessageList>
        {messages.map((item, idx) => (
          <S.Message key={idx}>
            <span>{item.text}</span>
            <S.Timestamp>({item.timestamp})</S.Timestamp>
          </S.Message>
        ))}
        <div ref={messagesEndRef} />
      </S.MessageList>
      <S.Input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      {/* <Button onClick={() => sendMessage(inputText)}>전송</Button> */}
    </S.Container>
  );
};
