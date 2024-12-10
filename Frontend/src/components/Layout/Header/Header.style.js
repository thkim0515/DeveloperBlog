import styled from "styled-components";
import { Link } from "react-router-dom";

//로고
export const Logo = styled.h1`
  color: #112d4e;
  font-size: 2.5rem;
  font-weight: bold;
  font-family: "FjallaOne";
  text-align: center;

  a {
    letter-spacing: 2px;
  }

  p {
    font-size: 0.825rem;
  }
`;

// 헤더
export const Header = styled.header`
  position: relative;
  z-index: 10;
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: ceneter;
  gap: 1.5rem;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: ceneter;
  gap: 0.625rem;
`;

// 메뉴
export const MenuBox = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    align-items: center;
  }

  a {
    padding: 0 8px;
    font-weight: bold;
    font-size: 1rem;
  }
`;

//코드 프로젝트 메뉴 박스
export const CodeProjectMenuBox = styled.div`
  ul {
    height: 40px;
    display: flex;
    align-items: center;
  }

  a {
    padding: 0 8px;
    font-weight: bold;
    font-size: 1rem;
    line-height: 20px;
  }

  a:first-child {
    border-right: 1px solid #dbe2ef;
  }
`;

//로그인 버튼
export const LoginButton = styled.button`
  width: 80px;
  height: 40px;
  padding: 10px;
  background-color: #3f72af;
  color: #fff;
  border: none;
  border-radius: 12px;
  cursor: pointer;
`;

//링크 스타일
export const ListLink = styled(Link)`
  cursor: pointer;
  color: #112d4e;
`;
