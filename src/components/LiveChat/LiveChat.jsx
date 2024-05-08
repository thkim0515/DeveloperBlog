import { useState, useEffect, useRef } from "react";
import { useUserLogin } from "../../context/UserLoginContext";
import { decryptData } from "../../js/secure";
import { connectWebSocket, sendMessage } from "./LiveChatFunctions";
import * as S from "./LiveChat.style";

export const LiveChat = (addr) => {
  const address = addr.addr;

  /* 로그인 여부 상태관리 */
  /* 세션에 따른 닉네임 or 비로그인 유저 */
  const [userNickname, setUserNickname] = useState("");
  const { isLogin } = useUserLogin();
  const [messages, setMessages] = useState([]);
  const [ws, setWs] = useState(null); // WebSocket 상태 추가

  /* 웹소켓 연결 및 메시지 관리 */
  useEffect(() => {
    const initializeUserSession = async () => {
      try {
        const userSession = await decryptData("user", sessionStorage);
        if (isLogin && userSession) {
          setUserNickname(userSession.nickname);
        } else {
          let randomSuffix;
          if (sessionStorage.getItem("randomSuffix")) {
            randomSuffix = sessionStorage.getItem("randomSuffix");
          } else {
            randomSuffix = Math.floor(1000 + Math.random() * 9000).toString();
            sessionStorage.setItem("randomSuffix", randomSuffix);
          }
          setUserNickname("비로그인유저" + randomSuffix);
        }
      } catch (error) {
        console.error("사용자 세션 데이터 복호화 중 에러 발생:", error);
        setUserNickname("비로그인유저");
      }
    };

    initializeUserSession();
    const wsNew = connectWebSocket(setMessages, userNickname, address);
    setWs(wsNew);
  }, [isLogin]);

  /* 스크롤 자동화 */
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView();
  };

  /* 채팅 인풋 박스 상태관리 */
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage(ws, inputText, userNickname, setInputText);
    }
  };

  useEffect(() => {
    if (!messages.length) return;

    const lastMessage = messages[messages.length - 1];
    sessionStorage.setItem("timestamp", lastMessage.timestamp);
  }, [messages]);

  return (
    <S.Container>
      <S.MessageList>
        {messages.map((item, idx) => (
          <S.Message
            key={idx}
            isUserMessage={
              item.userId === userNickname && userNickname !== "비로그인유저"
            }
          >
            <span>
              {item.userId}
              {item.text}
            </span>
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
    </S.Container>
  );
};
