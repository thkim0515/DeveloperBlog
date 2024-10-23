import styled from "styled-components";
import { Link } from "react-router-dom";

//메인 컨테이너 스타일
export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2.75rem 0;
`;

//로그인 된 유저 박스
export const UserLoginBox = styled.div`
  height: 40px;
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;

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
  width: 120px;
  height: 120px;
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  position: absolute;
  z-index: 10;
  top: 80px;
  right: 0;
  background-color: #dbe2ef;
  border: 1px solid #fff;
  border-radius: 12px;
`;

//메뉴 리스트 박스
export const MenuListBox = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  li {
    width: 100%;
    flex: 1;
    text-align: center;
    line-height: 40px;
    list-style: none;
  }

  li:hover {
    background-color: #d4dbe9; /* 마우스를 올렸을 때 배경 색상 변경 */
  }

  li:last-child {
    border-top: 1px solid #fff;
  }

  .logout {
    cursor: pointer;
  }
`;

//링크 스타일
export const ListLink = styled(Link)`
  cursor: pointer;
  color: #112d4e;
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
