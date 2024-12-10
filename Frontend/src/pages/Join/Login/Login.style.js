import styled from "styled-components";

export const Input = styled.input`
  font-family: inherit;
  padding: 0.75rem 0;
  width: 100%;
`;

export const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const SocialButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const LoginText = styled.p`
  font-size: 1.5rem;
  text-align: center;
  color: #112d4e;
`;

export const LoginField = styled.div`
  display: flex;
  justify-content: space-between;

  label {
    padding: 0.7rem 0;
  }

  input {
    width: 100%;
    padding: 0.7rem;
    margin-bottom: 1.25rem;
    border: 1px solid #000000;
    border-radius: 8px;
    resize: vertical;
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  margin-top: 20px;
  padding: 0.75rem;
  border: 1px solid transparent;
  border-radius: 8px;
  color: #ffffff;
  background-color: #3f72af;
`;

export const ResetAccount = styled.button`
  font-size: 0.8rem;
  color: #112d4e;
  text-align: right;
`;

export const MoveLink = styled.p`
  font-size: 0.9rem;
  color: #112d4e;
  text-align: center;
`;

export const SingupButton = styled.button`
  width: 100%;
  margin-top: 20px;
  padding: 0.75rem;
  font-size: 1.2rem;
  font-style: bold;
  border: 1px solid transparent;
  border-color: #000;
  border-radius: 8px;
  color: #000;
  background-color: #fff;
`;
