import { useGetData } from "../../hooks/useGetData";
import { ImageItem } from "../../components/imagegallery/ImageGalleryComponents/ImageItem";
import styled from "styled-components";

export const CodeList = () => {
  const maxcount = 6;
  const data = useGetData("all", maxcount, null, null);
  return (
    <SCodeListBox>
      {data.currentImages.map((content, idx) => (
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
