import { useState, useEffect, useRef } from "react";
import { useUserLogin } from "../context/UserLoginContext";
import { decryptData } from "../js/secure";
import * as S from "./LiveChat.style";

export const LiveChat = () => {
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
  }, [isLogin]);

  const [ws, setWs] = useState(null);
  const [messages, setMessages] = useState([]);
  const WEBSOCKET_ADDRESSES = [
    "wss://13.125.188.8:5000",
    "wss://starblog.com",
    "wss://starblog.com:5000",
    "wss://ec2-13-125-188-8.ap-northeast-2.compute.amazonaws.com",
    "wss://d3kcrktwedekfj.cloudfront.net",
    "ws://localhost:5000",
  ];
  const disconnectWebsocketTime = 5; // 6 분
  const milliseconds = disconnectWebsocketTime * 60000;

  const connectWebSocket = () => {
    if (ws != null) {
      ws.close();
    }

    let connectionIndex = 0;

    const tryConnect = () => {
      if (connectionIndex >= WEBSOCKET_ADDRESSES.length) {
        console.log("모든 주소에 연결 실패");
        return;
      }

      const address = WEBSOCKET_ADDRESSES[connectionIndex];
      const websocket = new WebSocket(address);

      websocket.onopen = () => {
        console.log(`${address}로 연결 성공`);
        setWs(websocket);
        setMessages([]);
      };

      websocket.onerror = () => {
        console.log(`${address} 연결 시도 실패`);
        websocket.close(); // Ensure websocket is properly closed before retrying
        connectionIndex++;
        setTimeout(tryConnect, 500); // 3초 후 재시도
      };

      websocket.onmessage = async (event) => {
        if (event.data instanceof Blob) {
          const text = await event.data.text();
          try {
            const data = JSON.parse(text);
            const displayMessage = {
              text: `${data.userId || userNickname}: ${data.message}`,
              timestamp: data.timestamp,
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
              timestamp: data.timestamp,
            };
            setMessages((prev) => [...prev, displayMessage]);
          } catch (e) {
            console.error("JSON 파싱 에러:", e);
          }
        }
      };

      websocket.onclose = () => {
        console.log("웹소켓 연결안됨");
        setWs(null); // Ensure to clean up the ws state
      };
    };

    tryConnect();
  };

  useEffect(() => {
    connectWebSocket();
  }, []);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage(inputText);
    }
  };

  useEffect(() => {
    let timeoutId;

    const handleActivity = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (ws) {
          console.log("사용자 활동이 없어 웹소켓 연결을 종료합니다.");
          ws.close();
          setWs(null); // Ensure to clean up the ws state as well
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
  }, [ws, milliseconds]);

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
