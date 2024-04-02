import { useLocation } from 'react-router-dom';
import { Login } from './Login/Login';
import { SignUp } from './SignUp/SignUp';
import styled from 'styled-components';

export const Join = () => {
  const location = useLocation();
  let { pathname } = location;

  return (
    <Container>
      <LeftBox>
        <span> web class 2024</span>
        <br />
        <span>STARBLOG</span>
        <br />
        <span>KOSTA 281</span>
      </LeftBox>
      <RightBox>{pathname === '/login' ? <Login /> : <SignUp />}</RightBox>
    </Container>
  );
};

const Container = styled.div`
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
  justify-content: space-evenly;
  padding: 60px;
  background-color: #ffffff;
`;
