import styled from "styled-components";

// informatin 줄임말 : info
export const ProjectInfoBox = styled.div`
  border-bottom: 1px solid #dbe2ef;
  padding: 1rem;
`;

export const ProjectTitle = styled.h2`
  margin-top: 2.5rem;
  font-weight: 800;
  font-size: 2.25rem;
  line-height: 126.5%;
  letter-spacing: -0.005em;
  overflow-wrap: break-word;
  margin-bottom: 2rem;
`;

export const HashTagBox = styled.ul`
  display: flex;
  gap: 1rem;
  color: #f542f4;
  font-weight: bold;
`;

export const PostingInfoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 0;

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
