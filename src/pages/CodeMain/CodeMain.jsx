import { Metas } from "../../components/common/Metas";
import { ImageGrid } from "../../components/imagegallery/ImageGalleryComponents/ImageGrid";
import { WriteButton } from "../../components/imagegallery/WriteButton";
import styled from "styled-components";
const WriteBox = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;
export const CodeMain = () => {
  const value = "all";

  return (
    <div>
      <Metas main="main" />
      <WriteBox>
        <WriteButton />
      </WriteBox>
      <ImageGrid value={value} />
    </div>
  );
};
