import styled from "styled-components";

export const SContainer = styled.div`
  width: 1140px;
  display: flex;
  flex-wrap: wrap;
`;

export const STitle = styled.div`
  background-color: #3f72af;
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: space-start;
  align-items: center;
  gap: 10px;
  font-size: 1.5rem;
  color: white;
  font-family: Noto Sans Kr;

  img {
    font-size: 3rem;
    width: 3rem;
    height: 3rem;
    margin: 0;
  }

  h3 {
    margin: 0;
  }
`;

export const SSpace = styled.div`
  width: 100%;
  background-color: #dbe2ef;
  height: 50px;
`;

export const SImageContent = styled.div`
  width: 100%;
  display: block;
  font-size: 1rem;
  align-items: center;
  justify-content: space-between;
  img {
    width: 100%;
    overflow: hidden;
  }

  p {
    width: 100%;
    overflow-wrap: break-word;
    white-space: normal;
  }
`;
