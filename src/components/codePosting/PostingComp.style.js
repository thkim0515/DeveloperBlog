import styled from "styled-components";

export const TitleBox = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #112d4e;
  margin-bottom: 1.5rem;
`;

export const CodePostingBox = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 0.375rem;
`;

export const InputBox = styled.div`
  background-color: white;
  margin-bottom: 0.375rem;

  input {
    margin: 0;
  }
`;

export const ViewOptionsBox = styled.table`
  margin: 0.5rem auto;
  background-color: #f5f9ff;

  td {
    padding: 0.5rem;
    border: 1px solid lightgray;
  }
`;

export const LangauageBox = styled.div`
  margin: 0.5rem 0;

  svg:not(:last-child) {
    margin-right: 0.5rem;
  }

  svg {
    font-size: 1.5rem;
  }
`;

export const ExplainAndButtonBox = styled.div`
  padding-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  p {
    color: #112d4e;
    padding: 4px;
  }
  .button_box {
    display: flex;
    gap: 8px;
    button {
      padding: 0.25rem;
      border-radius: 4px;
      background-color: #3f72af;
      color: #ffff;
      width: 80px;
      height: 40px;
    }
  }
`;
