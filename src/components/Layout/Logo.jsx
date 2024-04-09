import styled from "styled-components";
import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <>
      <LogoText>
        <LogoLink to="/">STARBLOG</LogoLink>
      </LogoText>
    </>
  );
};

//로고
const LogoText = styled.h1`
  color: #112d4e;
  font-size: 2.5rem;
  font-weight: bold;
  font-family: "kage";
`;

//링크 스타일
const LogoLink = styled(Link)`
  cursor: pointer;
  color: #112d4e;
`;
