import styled from "styled-components";

// informatin 줄임말 : info
export const ProjectInfoBox = styled.div`
  border-bottom: 1px solid #dbe2ef;
  margin-top: 2rem;
  padding: 1rem;
`;

export const ProjectTitle = styled.h2`
  font-weight: 800;
  font-size: 2.25rem;
  line-height: 126.5%;
  letter-spacing: -0.005em;
  overflow-wrap: break-word;
  padding: 1.5rem 0;
  text-align: center;
`;

export const HashTagBox = styled.ul`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  color: #f542f4;
  font-size: 0.875rem;
  font-weight: bold;
`;

export const PostingInfoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0 2rem 0;

  & > *:not(:last-child)::after {
    content: "|";
    color: #000000;
    margin: 0 0.5rem;
  }
`;

export const ProjectViews = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 1rem;

  img {
    width: 18px;
    height: auto;
    margin-right: 0.5rem;
  }
`;
