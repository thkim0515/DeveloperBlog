import styled from "styled-components";

export const SocialButton = ({ social, background, color }) => {
  return (
    <Button style={{ backgroundColor: background, color: color }}>
      {social}로 로그인 하기
    </Button>
  );
};

const Button = styled.button`
  display: block;
  width: 100%;
  border: 1px solid gray;
  padding: 1rem;
  border-radius: 20px;
`;
