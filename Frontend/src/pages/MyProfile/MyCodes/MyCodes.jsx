import styled from "styled-components";
import { ImageGrid } from "../../../components/imagegallery/ImageGalleryComponents/ImageGrid";
import { Metas } from "../../../components/common/Metas";
import { WriteButton } from "../../../components/common/WriteButton";

export const MyCodes = () => {
  const value = "my";

  return (
    <>
      <Metas title="My Codes" none />
      <ButtonBox>
        <WriteButton />
      </ButtonBox>
      <ImageGrid value={value} />
    </>
  );
};

const ButtonBox = styled.div`
  position: relative;

  button {
    position: absolute;
    top: -1.5rem;
    right: -31.25rem;
  }
`;
