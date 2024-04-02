import styled from 'styled-components';

// TODO 소셜 로그인 버튼 컴포넌트화 하기
export const SocialButtons = styled.div`
  button:not(:last-child) {
    margin-bottom: 1rem;
  }
`;

// form
export const LoginButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid transparent;
  border-radius: 20px;
  color: #ffffff;
  background-color: #3f72af;
`;

export const ErrorMessage = styled.p`
  margin-bottom: 0.8rem;
  text-align: right;
`;

export const ResetAccount = styled.button`
  font-size: 0.8rem;
  color: #112d4e;
  text-align: right;
`;
