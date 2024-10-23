import styled from "styled-components";

export const PreviewPostBox = styled.section`
  margin: 3rem 0;

  h2 {
    font-size: 1.5rem;
  }
`;

export const PostCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.125rem;
  margin: 2.75rem 0;
`;

export const MoreButton = styled.div`
  text-align: center;

  button {
    background-color: #43b2ff;
    color: #ffffff;
    padding: 0.75rem 2rem;
  }
`;
