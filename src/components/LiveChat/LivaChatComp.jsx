import styled from "styled-components";
import { useState } from "react";
import { WriteButton } from "../../components/imagegallery/WriteButton";
import { Modal } from "./Modal";
import { LiveChat } from "../../components/LiveChat/LiveChat";
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
  const [isLiveChatVisible, setIsLiveChatVisible] = useState(false);

  const toggleLiveChat = () => {
    setIsLiveChatVisible(!isLiveChatVisible);
  };

  return (
    <div>
      <ChatAndWriteBox>
        <LiveChatButton onClick={toggleLiveChat}>실시간 채팅</LiveChatButton>
        <WriteButton />
      </ChatAndWriteBox>
      {isLiveChatVisible && (
        <Modal onClose={toggleLiveChat}>
          <LiveChat />
        </Modal>
      )}
    </div>
  );
};
