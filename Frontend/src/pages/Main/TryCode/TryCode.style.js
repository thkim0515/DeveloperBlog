import styled from "styled-components";

export const TryCodeBox = styled.section`
  background-color: #d7cfd2;
  padding: 2.5rem 0;
  text-align: center;

  h2 {
    font-size: 1.5rem;
  }
`;

export const CodeEditorBox = styled.div`
  width: 1100px;
  margin: 0 auto;
  padding: 2rem 0;
`;

export const CodeEditorWrapper = styled.div`
  display: ${({ $isVisible }) => ($isVisible ? "block" : "none")};
`;

export const CodeButton = styled.button`
  background: rgb(255, 227, 132);
  background: linear-gradient(90deg, rgba(255, 227, 132, 1) 0%, rgba(153, 136, 79, 1) 100%);
  padding: 1rem 1.25rem;
  border-radius: 20px;
`;
