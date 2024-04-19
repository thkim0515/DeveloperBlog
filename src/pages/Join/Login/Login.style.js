import styled from "styled-components";

export const LoginText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: #112d4e;
`;

export const SocialButtons = styled.div`
  button:not(:last-child) {
    margin-bottom: 1rem;
  }
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
