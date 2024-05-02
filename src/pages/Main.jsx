import { ImageGrid } from "../components/imagegallery/ImageGalleryComponents/ImageGrid";
import { useState } from "react";
import { Metas } from "./../components/common/Metas";
import { LiveChat } from "../components/LiveChat/LiveChat";
import { Modal } from "../components/LiveChat/Modal";
import { WriteButton } from "../components/imagegallery/WriteButton";
import styled from "styled-components";
import { S3Uploader } from "../components/codePosting/S3Uploader";

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

export const Main = () => {
  const value = "all";
  const [isLiveChatVisible, setIsLiveChatVisible] = useState(false);

  const toggleLiveChat = () => {
    setIsLiveChatVisible(!isLiveChatVisible);
  };

  return (
    <div>
      <S3Uploader />
      <Metas main="main" />
      <ChatAndWriteBox>
        <LiveChatButton onClick={toggleLiveChat}>실시간 채팅</LiveChatButton>
        <WriteButton />
      </ChatAndWriteBox>
      {isLiveChatVisible && (
        <Modal onClose={toggleLiveChat}>
          <LiveChat />
        </Modal>
      )}
      <ImageGrid value={value} />
    </div>
  );
};
