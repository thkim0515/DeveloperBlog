import React, { useState } from "react";
import {
  SUserLoginBox,
  SProfileImage,
  SMenuContainer,
  SMenuListBox,
  SListLink,
} from "./Layout.style";

export const UserLogin = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <SUserLoginBox>
        <div>user1</div>
        <SProfileImage alt="프로필 사진" src="./img/layout/user-profile.jpg" />
        <img
          onMouseEnter={() => setIsMenuOpen(true)}
          alt="메뉴 아이콘"
          src="./img/layout/menu-icon.png"
        />
      </SUserLoginBox>
      <SMenuContainer
        $isOpen={isMenuOpen}
        onMouseEnter={() => setIsMenuOpen(true)}
        onMouseLeave={() => setIsMenuOpen(false)}
      >
        <SMenuListBox>
          <p>CODE</p>
          <li>
            <SListLink to="/">Code Gallery</SListLink>
          </li>
          <li>
            <SListLink to="/codeCreate">Code Annotate</SListLink>
          </li>
          <p>MY PAGE</p>
          <li>
            <SListLink to="/myCodes">My Gallery</SListLink>
          </li>
          <li>
            <SListLink to="/profile">Profile</SListLink>
          </li>
          <p></p>
          <li>Logout</li>
        </SMenuListBox>
      </SMenuContainer>
    </>
  );
};
