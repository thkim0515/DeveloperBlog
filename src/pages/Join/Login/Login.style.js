import styled from 'styled-components';

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

  input[type='text'],
  input[type='password'] {
    width: 76%;
    padding: 0.7rem;
    margin-bottom: 0.7rem;
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

export const ValidateMessage = styled.p`
  margin-bottom: 0.8rem;
  text-align: right;
`;

export const ResetAccount = styled.button`
  font-size: 0.8rem;
  color: #112d4e;
  text-align: right;
`;
