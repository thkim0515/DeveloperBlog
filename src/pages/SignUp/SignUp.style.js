import styled from 'styled-components';

// 레이아웃
export const Container = styled.div`
  display: flex;
  flex: 1 1 0;
  height: 100vh;
`;

export const LeftBox = styled.div`
  flex-basis: 57%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
    span {
    font-family: 'kage';
    font-size: 1.5rem;
    color: #112d4e;
  }
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

// form
export const FormField = styled.div`
  label {
    display: block;
  }

  input[type='text'],
  input[type='password'],
  input[type='email'] {
    width: 100%;
    margin: 0.5rem 0 0.75rem 0;
    padding: 0.75rem;
    display: inline-block;
    border: 1px solid #d9d9d9;
    background: #ffffff;
  }

  input[type='text']:focus,
  input[type='password']:focus,
  input[type='email']:focus {
    background-color: #dbe2ef;
    outline: none;
  }
`;

export const LoginButton = styled.input`
  width: 100%;
  padding: 0.75rem;
  border-style: none;
  border-radius: 20px;
  color: #ffffff;
  background-color: #3f72af;
`;

export const MoveSignUp = styled.span`
  font-size: 0.8rem;
  color: #112d4e;
  text-align: center;
  margin-top: auto;
`;
