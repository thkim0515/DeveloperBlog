import styled from "styled-components";

// informatin 줄임말 : info
export const RemainsInfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1.75rem;
  padding-bottom: 2rem;
`;

export const HashTagBox = styled.ul`
  display: flex;
  gap: 1rem;
`;

export const PostingInfoBox = styled.div`
  display: flex;
  align-items: center;

  div::after {
    content: "|";
    padding: 0.5rem;
  }
`;

export const ProjectViews = styled.div`
  img {
    width: 18px;
    height: auto;
    margin-right: 0.5rem;
  }
`;
