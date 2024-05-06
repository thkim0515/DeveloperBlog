import styled from "styled-components";
import { useState, useEffect } from "react";
import { WriteButton } from "../../components/imagegallery/WriteButton";
import { Modal } from "./Modal";
import { LiveChat } from "../../components/LiveChat/LiveChat";
import { decryptData } from "../../js/secure";
const ChatAndWriteBox = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;

const LiveChatButton = styled.button`
  width: 120px;
  height: 40px;
  padding: 10px;
  background-color: #3f72af;
  color: #fff;
  border: none;
  border-radius: 12px;
  cursor: pointer;
`;

export const LiveChatComp = () => {
  // const WEBSOCKET_ADDRESS = "wss://d3kcrktwedekfj.cloudfront.net";
  const [isLiveChatVisible, setIsLiveChatVisible] = useState(false);
  const [unreadMessages, setUnreadMessages] = useState(0);
  const WEBSOCKET_ADDRESS = "ws://localhost:5000";
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const init = async () => {
      const ws = new WebSocket(WEBSOCKET_ADDRESS);
      setWs(ws);

      ws.onmessage = async (event) => {
        if (event.data instanceof Blob) {
          const text = await event.data.text();

          try {
            const data = JSON.parse(text);
            if (data.userId !== "userSession.nickname") {
              setUnreadMessages((prev) => prev + 1);
            }
          } catch (error) {
            console.error("JSON 파싱 에러:", error);
          }
        } else {
          try {
            const data = JSON.parse(event.data);
            if (data.userId !== "userSession.nickname") {
              setUnreadMessages((prev) => prev + 1);
            }
          } catch (error) {
            console.error("JSON 파싱 에러:", error);
          }
        }
      };

      return () => ws.close();
    };
    init();
  }, []);

  const toggleLiveChat = () => {
    setIsLiveChatVisible(!isLiveChatVisible);
    if (isLiveChatVisible) {
      setUnreadMessages(0); // 채팅창을 열면 읽음 처리
    }
  };

  return (
    <div>
      <ChatAndWriteBox>
        <LiveChatButton onClick={toggleLiveChat}>
          실시간 채팅{unreadMessages > 0 ? ` (${unreadMessages})` : ""}
        </LiveChatButton>
      </ChatAndWriteBox>
      {isLiveChatVisible && (
        <Modal onClose={toggleLiveChat}>
          <LiveChat />
        </Modal>
      )}
    </div>
  );
};
