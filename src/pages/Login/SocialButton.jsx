import styled from 'styled-components';

export const SocialButton = (prop) => {
  const { social } = prop;
  return <Button>{social}계정으로 로그인</Button>;
};

const Button = styled.button`
  display: block;
  background-color: #dbe2ef;
  color: #112d4e;
  width: 100%;
  padding: 1rem;
  border-radius: 20px;
`;
