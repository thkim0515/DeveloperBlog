import { ImageItem } from "../../components/imagegallery/ImageGalleryComponents/ImageItem";
import styled from "styled-components";


export const CodeList = ({codeList}) => {

  return (
    <SCodeListBox>
      {codeList && codeList.map((content, idx) => (
        <ImageItem key={idx} content={content} />
      ))}
    </SCodeListBox>
  );
};

const SCodeListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
