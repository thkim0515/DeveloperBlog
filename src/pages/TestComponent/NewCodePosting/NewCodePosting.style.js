import styled from "styled-components";

export const TitleBox = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #112d4e;
`;

export const CodePostingBox = styled.div`
  background-color: white;
  padding: 0.5rem;
`;

export const InputBox = styled.div`
  background-color: white;

  input {
    margin: 0;
  }
`;

export const ViewOptionsBox = styled.div`
  text-align: center;

  button {
    display: inline-block;
    background-color: #b3b0b0;
    padding: 0.25rem;
    margin: 1rem 0.5rem;
    border-radius: 4px;
  }
`;

export const PostButtonBox = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    background-color: #b3b0b0;
    padding: 0.25rem;
    margin: 1rem 0;
    border-radius: 4px;
  }
`;
