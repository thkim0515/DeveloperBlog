import styled from 'styled-components';
import { Link } from 'react-router-dom';


//레이아웃 스타일
export const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding-top: 40px;
  height: calc(100vh - 80px); /* 100vh에서 헤더 80px를 뺀 값으로 설정 */
`;

//헤더 스타일
export const HeaderBox = styled.header`
  position: relative;
  max-width: 1400px;
  height: 80px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

//로그인 버튼
export const LogineButton = styled.button`
  width: 80px;
  height: 40px;
  padding: 10px 20px;
  background-color: #3f72af;
  color: #fff;
  border: none;
  border-radius: 12px;
  cursor: pointer;
`;
//로고
export const Logo = styled.h1`
  color: #112d4e;
  font-size: 2.5rem;
  font-weight: bold;
`;

//링크 스타일
export const LogoLink = styled(Link)`
  cursor: pointer;
  color: #112d4e;
  font-family: "kage";
`;

//로그인 된 유저 박스
export const UserLoginBox = styled.div`
  height: 100%;
  display: flex;
  gap: 24px;
  align-items: center;
  div {
    cursor: pointer;
  }
`;
//프로필 이미지
export const ProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%; /* 둥근 형태로 스타일 적용 */
`;

//메뉴 전체 박스
export const MenuBox = styled.div`
  width: 200px;
  height: 300px;
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  position: absolute;
  top: 70px;
  right: 0;
  background-color: rgba(17, 45, 78, 0.9); /* #112d4e; 90% 투명도의 배경색 */
  color: white;
`;

//메뉴 리스트 박스

export const MenuListBox = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
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
export const ListLink = styled(Link)`
  cursor: pointer;
  color: #fff;
`;