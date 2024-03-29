import styled from "styled-components";

export const Container = styled.div`
  width: 1140px;
  display: flex;
  flex-wrap: wrap;

  h1 {
    color: #333;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  textarea {
    width: 100%;
    height: 200px;
    padding: 10px;
    font-size: 3rem;
    border: 2px solid #ccc;
    border-radius: 5px;
    resize: vertical; /* 수직 리사이징 허용 */
    background-color: #f8f8f8; /* 배경색 추가 */
    color: #333; /* 텍스트 색상 변경 */
    margin-bottom: 10px;
  }
`;

export const STitle = styled.div`
  background-color: #3f72af;
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  font-size: 1.5rem;
  color: white;
  margin-bottom: 20px;
  padding-left: 20px;
`;

export const AceEditorContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
