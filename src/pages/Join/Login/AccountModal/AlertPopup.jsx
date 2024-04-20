import styled from "styled-components";

export const AlertPopup = ({ alertMessage }) => {
  return (
    <AlertBox>
      <span>{alertMessage}</span>
    </AlertBox>
  );
};

const AlertBox = styled.div`
  position: absolute;
  top: -190px;
  left: -25px;
  width: 280px;
  padding: 0.7rem;
  border-radius: 8px;
  font-size: 1rem;
  background-color: #e6d5fb;
  text-align: center;
  z-index: 99999;
`;
