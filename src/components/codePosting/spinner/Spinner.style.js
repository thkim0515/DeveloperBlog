import Spinner from "react-bootstrap/Spinner";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

export const CustomSpinner = styled(Spinner)`
  width: 4rem;
  height: 4rem;
  border-width: 0.7rem;
  border-right-color: transparent;
`;

export const Modal = styled.div`
  display: ${({ show }) => (show ? "block" : "none")};
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
  margin: 15% auto;
  padding: 20px;
  width: 50%;
  text-align: center;

  p {
    color: white;
    font-size: 3rem;
    opacity: 0;
    transition: opacity 2s ease-in-out;
  }
`;