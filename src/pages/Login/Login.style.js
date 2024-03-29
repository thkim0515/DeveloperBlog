import styled from 'styled-components';

// TODO styled-componets 파일 분리 예정
// 레이아웃
export const Container = styled.div`
  display: flex;
  flex: 1 1 0;
  height: 100vh;
`;

export const LeftBox = styled.div`
  flex-basis: 54%;
`;

export const RightBox = styled.div`
  flex-basis: 46%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  background-color: #ffffff;

  .login-title {
    margin: 2rem 0;
  }
`;

export const Hr = styled.hr`
  margin: 1.8rem 0;
`;

// TODO 소셜 로그인 버튼 컴포넌트화 하기
export const SocialButtons = styled.div`
  button {
    display: block;
    background-color: #dbe2ef;
    color: #112d4e;
    width: 100%;
    padding: 1rem;
    border-radius: 20px;
  }

  button:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

// form
export const FormField = styled.div`
  display: flex;
  justify-content: space-between;

  label {
    padding: 0.75rem 0.75rem 0.75rem 0;
  }

  input[type='text'],
  input[type='password'] {
    width: 80%;
    padding: 0.75rem;
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
