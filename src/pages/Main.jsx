import { ImageGrid } from "../components/imagegallery/ImageGalleryComponents/ImageGrid";
import { LiveChat } from "../components/LiveChat";
import { useState } from "react";
import { Metas } from "./../components/common/Metas";
import { Modal } from "../components/Modal";
import styled from "styled-components";

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

export const Main = () => {
  const value = "all";
  const [isLiveChatVisible, setIsLiveChatVisible] = useState(false);

  const toggleLiveChat = () => {
    setIsLiveChatVisible(!isLiveChatVisible);
  };

  return (
    <div>
      <Metas main="main" />
      <LiveChatButton onClick={toggleLiveChat}>실시간 채팅</LiveChatButton>
      {isLiveChatVisible && (
        <Modal onClose={toggleLiveChat}>
          <LiveChat />
        </Modal>
      )}
      <ImageGrid value={value} />
    </div>
  );
};
