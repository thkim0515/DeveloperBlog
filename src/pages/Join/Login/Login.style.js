import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex: 1 1 0;
  height: 100vh;
`;

export const LeftBox = styled.div`
  flex-basis: 57%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const RightBox = styled.div`
  flex-basis: 43%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 60px;
  background-color: #ffffff;

  .login-title {
    margin: 2rem 0;
  }
`;

export const LoginText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
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

  input[type="text"],
  input[type="password"] {
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
