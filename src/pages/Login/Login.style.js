import styled from "styled-components";

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
  justify-content: center;
  align-items: center;
  text-align: center;
  span {
    font-family: "kage";
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

export const Hr = styled.hr`
  margin: 1rem 0;
`;

// TODO 소셜 로그인 버튼 컴포넌트화 하기
export const SocialButtons = styled.div`
  button:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

// form
export const FormField = styled.div`
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

export const LoginButton = styled.input`
  width: 100%;
  padding: 0.75rem;
  border-style: none;
  border-radius: 20px;
  color: #ffffff;
  background-color: #3f72af;
`;

export const RevertAccount = styled.button`
  font-size: 0.8rem;
  color: #112d4e;
  text-align: right;
`;

export const MoveSignUp = styled.span`
  font-size: 0.8rem;
  color: #112d4e;
  text-align: center;
  margin-top: auto;
`;
