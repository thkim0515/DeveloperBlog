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
  font-size: 1.375rem;
  color: #112d4e;
`;

// form
export const LoginField = styled.div`
  display: flex;
  justify-content: space-between;

  label {
    padding: 0.7rem 0;
  }

  input {
    width: 76%;
    padding: 0.7rem;
    margin-bottom: 1.25rem;
    border: 1px solid #000000;
    border-radius: 20px;
    resize: vertical;
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid transparent;
  border-radius: 20px;
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
