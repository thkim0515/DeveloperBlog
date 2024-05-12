import styled from "styled-components";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";
import { LiveChat } from "../../components/LiveChat/LiveChat";

// 리덕스 적용
import { useSelector, useDispatch } from "react-redux";
import { reset, increment } from "../../_slice/unreadMessagesSlice";

const ChatAndWriteBox = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;

const LiveChatButton = styled.button`
  width: 40px;
  height: 40px;
  padding: 10px;
  background-image: url("/img/chat.png");
  background-size: cover;
  color: #fff;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  position: relative;
`;

const Notification = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  width: 20px;
  height: 20px;
  background-color: red;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;

const develop = false;

export const LiveChatComp = () => {
  const [isLiveChatVisible, setIsLiveChatVisible] = useState(false);
  const WEBSOCKET_ADDRESS =
    develop === true
      ? "wss://d3kcrktwedekfj.cloudfront.net"
      : "ws://localhost:5000";

  const unreadMessages = useSelector((state) => state.unreadMessages.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  const toggleLiveChat = () => {
    setIsLiveChatVisible(!isLiveChatVisible);
    if (isLiveChatVisible) {
      handleReset();
    }
  };

  useEffect(() => {
    if (isLiveChatVisible) {
      handleReset();
    }
  }, [isLiveChatVisible, handleReset]);

  useEffect(() => {
    if (!isLiveChatVisible) return;

    const init = async () => {
      const ws = new WebSocket(WEBSOCKET_ADDRESS);
      const timestamp = sessionStorage.getItem("timestamp");

      ws.onmessage = async (event) => {
        if (event.data instanceof Blob) {
          const text = await event.data.text();

          try {
            const data = JSON.parse(text);
            if (data.timestamp > timestamp) {
              handleIncrement();
            }
          } catch (error) {
            console.error("JSON 파싱 에러:", error);
          }
        } else {
          try {
            const data = JSON.parse(event.data);
            if (data.timestamp > timestamp) {
              handleIncrement();
            }
          } catch (error) {
            console.error("JSON 파싱 에러:", error);
          }
        }
      };

      return () => ws.close();
    };
    init();
  }, [isLiveChatVisible, WEBSOCKET_ADDRESS]); //[timestamp]):

  return (
    <div>
      <ChatAndWriteBox>
        <LiveChatButton onClick={toggleLiveChat}>
          {unreadMessages > 0 && <Notification>{unreadMessages}</Notification>}
        </LiveChatButton>
      </ChatAndWriteBox>
      {isLiveChatVisible && (
        <Modal onClose={toggleLiveChat}>
          <LiveChat addr={WEBSOCKET_ADDRESS} />
        </Modal>
      )}
    </div>
  );
};
