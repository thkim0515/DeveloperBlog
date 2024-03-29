import * as S from "./Layout.style";
import React, { useState } from "react";
export const UserLogin = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <S.UserLoginBox>
        <div>user1</div>
        <S.ProfileImage alt="프로필 사진" src="./img/layout/user-profile.jpg" />
        <img
          onMouseEnter={() => setIsMenuOpen(true)}
          onMouseLeave={() => setIsMenuOpen(false)}
          alt="메뉴 아이콘"
          src="./img/layout/menu-icon.png"
        />
      </S.UserLoginBox>
      <S.MenuBox
        $isOpen={isMenuOpen}
        onMouseEnter={() => setIsMenuOpen(true)}
        onMouseLeave={() => setIsMenuOpen(false)}
      >
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
          <li>Logout</li>
        </S.MenuListBox>
      </S.MenuBox>
    </>
  );
};
