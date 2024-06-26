import styled from "styled-components";

import { useLocation } from "react-router-dom";
import { Login } from "./Login/Login";
import { SignUp } from "./SignUp/SignUp";

// component
import { Logo } from "./../../components/Layout/Logo";

export const Join = () => {
  const location = useLocation();
  let { pathname } = location;

  return (
    <Container>
      <LeftBox>
        <span> web class 2024</span>
        <Logo />
        <span>KOSTA 281</span>
      </LeftBox>
      <RightBox>
        <LogoBox>
          <Logo />
        </LogoBox>
        {pathname === "/login" ? <Login /> : <SignUp />}
      </RightBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex: 1 1 0;
  height: 100vh;
`;

const LeftBox = styled.div`
  flex-basis: 57%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  span {
    font-family: "FjallaOne";
    font-size: 1.5rem;
    color: #112d4e;
    margin: 36px 0;
  }
`;

const RightBox = styled.div`
  position: relative;
  flex-basis: 43%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 60px;
  background-color: #ffffff;
`;

const LogoBox = styled.div`
  position: absolute;
  top: 20px;
  right: 60px;

  a {
    font-size: 2.25rem;
  }
`;
