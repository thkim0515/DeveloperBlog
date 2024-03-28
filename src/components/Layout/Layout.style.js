import styled from 'styled-components';
import { Link } from 'react-router-dom';


//레이아웃 스타일
export const SContainer = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  height: calc(100vh - 100px); /* 100vh에서 헤더 100px를 뺀 값으로 설정 */
`;

//헤더 스타일
export const SHeaderBox = styled.header`
  position: relative;
  max-width: 1400px;
  height: 100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SLogineButton = styled.button`
  width: 80px;
  height: 40px;
  padding: 10px 20px;
  background-color: #3f72af;
  color: #fff;
  border: none;
  border-radius: 12px;
  cursor: pointer;
`;
export const SLogo = styled.h1`
  color: #112d4e;
  font-size: 2.5rem;
  font-weight: bold;
`;

//링크 스타일
export const SLogoLink = styled(Link)`
  cursor: pointer;
  color: #112d4e;
  font-family: "kage";
`;



export const SUserLoginBox = styled.div`
  height: 100%;
  display: flex;
  gap: 24px;
  align-items: center;
  div {
    cursor: pointer;
  }
`;
export const SProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%; /* 둥근 형태로 스타일 적용 */
`;
export const SMenuContainer = styled.div`
  width: 300px;
  height: 70vh;
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(17, 45, 78, 0.9); /* #112d4e; 90% 투명도의 배경색 */
  color: white;
`;

export const SMenuListBox = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  p {
    font-weight: bold;
    cursor: default;
  }
  li {
    list-style: none;
    cursor: pointer;
  }
`;

//링크 스타일
export const SListLink = styled(Link)`
  cursor: pointer;
  color: #fff;
`;