import styled from "styled-components";
import { forwardRef } from "react";

export const TextArea = forwardRef((props, ref) => {
  return <STextArea ref={ref} {...props}></STextArea>;
});

const STextArea = styled.textarea`
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
