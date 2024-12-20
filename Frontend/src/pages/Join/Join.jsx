import styled from "styled-components";
import { Routes, Route } from "react-router-dom";
import { Login } from "./Login/Login";
import { SignUp } from "./SignUp/SignUp";
import { EmailCheck } from "./SignUp/EmailCheck";

// component
import { Logo } from "../../components/Layout/Header/Logo";

export const Join = () => {
  return (
    <Container>
      <LeftBox>
        <span> web class 2024</span>
        <Logo />
        <span>KOSTA 281</span>
      </LeftBox>
      <RightBox>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="emailcheck" element={<EmailCheck />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
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
