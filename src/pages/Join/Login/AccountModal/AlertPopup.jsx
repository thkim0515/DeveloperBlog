import { useState } from "react";
import styled from "styled-components";

export const AlertPopup = ({ isPassed }) => {
  return (
    <AlertBox>
      <span>아이디 또는 비밀번호가 틀렸습니다.</span>
    </AlertBox>
  );
};

const AlertBox = styled.div`
  position: absolute;
  top: -145px;
  left: -25px;
  width: 280px;
  padding: 0.7rem;
  border-radius: 8px;
  font-size: 1rem;
  background-color: #ffa6a6;
  text-align: center;
  z-index: 99999;
`;
