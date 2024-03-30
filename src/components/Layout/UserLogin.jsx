import * as S from "./Layout.style";
import React, { useState } from "react";
export const UserLogin = ({ setIsLogin }) => {
  //메뉴박스 열기/닫기 상태관리
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //TODO 임시로그아웃 기능
  const handleLogout = () => {
    setIsLogin(false);
  };

  return (
    <>
      <S.UserLoginBox>
        <div>user1</div>
        <S.ProfileImage alt="프로필 사진" src="./img/layout/user-profile.jpg" />
        <img
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          alt="메뉴 아이콘"
          src="./img/layout/menu-icon.png"
        />
      </S.UserLoginBox>
      <S.MenuBox $isOpen={isMenuOpen}>
        <S.MenuListBox>
          <p>CODE</p>
          <li>
            <S.ListLink to="/">Code Gallery</S.ListLink>
          </li>
          <li>
            <S.ListLink to="/codeCreate">Code Annotate</S.ListLink>
          </li>
          <p>MY PAGE</p>
          <li>
            <S.ListLink to="/myCodes">My Gallery</S.ListLink>
          </li>
          <li>
            <S.ListLink to="/profile">Profile</S.ListLink>
          </li>
          <p></p>
          <li onClick={handleLogout}>Logout</li>
        </S.MenuListBox>
      </S.MenuBox>
    </>
  );
};
