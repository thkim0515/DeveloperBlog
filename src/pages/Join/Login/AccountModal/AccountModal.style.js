import { styled } from "styled-components";

export const ModalBackgroundBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.85);
  width: 100%;
  height: 100%;
`;

export const ModalBox = styled.div`
  position: relative;
  padding: 4.5rem;
  background-color: #ffffff;
  border-radius: 8px;
`;

export const TabMenu = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Tab = styled.button`
  color: ${({ $active }) => ($active === "findId" ? "#3f72af" : "#888888")};
`;

export const ModalCloseButton = styled.div`
  position: absolute;
  top: 20px;
  right: 30px;
`;

export const TabMenuBar = styled.div`
  position: relative;
  width: 100%;
  height: 8px;
  background-color: #d9d9d9;
  margin: 1rem 0;
`;

export const InnerBar = styled.div`
  position: absolute;
  width: 50%;
  height: 8px;
  background-color: #dbe2ef;
  transition: all 0.3s ease;
  left: ${({ $active }) => ($active === "findId" ? 0 : "50%")};
`;

export const FormField = styled.div`
  label {
    display: block;
    padding: 0.7rem 0;
  }

  input {
    padding: 0.3rem;
    border: 1px solid #000000;
    resize: vertical;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.8rem;
  margin-top: 1rem;
  color: #ffffff;
  background-color: #3f72af;
`;

export const FindBox = styled.div`
  position: relative;
`;
