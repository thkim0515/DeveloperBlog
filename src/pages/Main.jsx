import { Metas } from "./../components/common/Metas";
import { ImageGrid } from "../components/imagegallery/ImageGalleryComponents/ImageGrid";
import { WriteButton } from "../components/imagegallery/WriteButton";
import styled from "styled-components";
const ChatAndWriteBox = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;
export const Main = () => {
  const value = "all";

  return (
    <div>
      <Metas main="main" />
      <ChatAndWriteBox>
        <WriteButton />
      </ChatAndWriteBox>
      <ImageGrid value={value} />
    </div>
  );
};
