import styled from "styled-components";

export const CommentInputBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 100px;
`;

export const CommentTitle = styled.p`
  margin-bottom: 1.5rem;
  font-size: 18px;
  font-weight: 700;
`;

export const TextArea = styled.textarea`
  font-family: inherit;
  padding: 1rem 0;
  outline: none;
  border: 2px solid #e1e1e1;
  border-radius: 6px;
  width: 100%;
  min-height: 100px;
  margin-bottom: 10px;
  resize: none;
`;

export const CommentSubmitBox = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 16px 0 24px;
`;

export const CommentSubmitButton = styled.button`
  padding: 12px 24px;
  height: 40px;
  background: #333;
  border-radius: 50px;
  font-weight: 700;
  color: #fff;
  font-size: 16px;
`;

export const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid #e1e1e1;
`;
