import styled from "styled-components";
import { Link } from "react-router-dom";

//메인 컨테이너 스타일
export const Container = styled.div`
  max-width: 1140px;
  min-height: 90vh;
  margin: 0 auto;
  padding: 120px 0;
`;

/**------헤더 스타일------- */
export const HeaerParentBox = styled.div`
  position: fixed;
  z-index: 10;
  width: 100%;
  background-color: #f9f7f7;
  border-bottom: 1px solid #dbe2ef;
`;

export const HeaderBox = styled.header`
  position: relative;
  z-index: 10;
  max-width: 1300px;
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
  padding: 10px;
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
  font-family: "kage";
`;

//링크 스타일
export const LogoLink = styled(Link)`
  cursor: pointer;
  color: #112d4e;
`;

//로그인 된 유저 박스
export const UserLoginBox = styled.div`
  height: 100%;
  display: flex;
  gap: 12px;
  align-items: center;
  div {
    cursor: pointer;
  }
  img {
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
  width: 160px;
  height: 360px;
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  position: absolute;
  z-index: 10;
  top: 80px;
  right: 0;
  background-color: #112d4e;
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
    margin: 4px 0;
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

/**------풋터 스타일------ */
export const FooterBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  align-items: center;
  background-color: #dbe2ef;
  height: 160px;
`;
export const DevelopersBox = styled.div`
  display: flex;
  color: #112d4e;
  gap: 8px;
  h4 {
    font-weight: bold;
  }
`;
export const CorporationBox = styled.div`
  display: flex;
  color: #112d4e;
  gap: 8px;
  cursor: pointer;
  div {
    padding: 0 8px;
  }
  div:not(:last-child) {
    border-right: 1px solid #f9f7f7; //고객센터 박스만 제외하고 오른쪽에 테두리
  }
`;
