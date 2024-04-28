import React from "react";
import styled from "styled-components";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Content = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 50%;
  max-height: 700px;
  overflow-y: auto;

  button {
    float: right;
  }
`;

export const Modal = ({ children, onClose }) => {
  return (
    <Backdrop onClick={onClose}>
      <Content onClick={(e) => e.stopPropagation()}>
        {children}
        <p>전송은 입력 후 엔터</p>
        <button onClick={onClose}>닫기</button>
      </Content>
    </Backdrop>
  );
};
