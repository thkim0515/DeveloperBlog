import styled from "styled-components";

export const Modal = styled.div`
  display: ${({ $show }) => ($show ? "block" : "none")};
  position: fixed;
  z-index: 1050;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  padding: 20px;
  width: 70%;
  margin: auto;
  text-align: center;

  p {
    color: black;
    font-size: 3rem;
    opacity: 0;
    transition: opacity 2s ease-in-out;
  }
`;
