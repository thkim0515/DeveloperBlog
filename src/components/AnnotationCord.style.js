import styled from "styled-components";

export const Container = styled.div`
  display: flex;

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
    font-size: 16px;
    border: 2px solid #ccc;
    border-radius: 5px;
    resize: vertical; /* 수직 리사이징 허용 */
    background-color: #f8f8f8; /* 배경색 추가 */
    color: #333; /* 텍스트 색상 변경 */
    margin-bottom: 10px;
  }

  button {
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    transition: background-color 0.2s;
  }

  button:hover {
    background-color: #0056b3;
  }

  p {
    color: red;
    margin-top: 10px;
  }
`;
