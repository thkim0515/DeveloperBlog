import * as S from "./Layout.style";
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserLogin } from "../../context/UserLoginContext";

export const UserLogin = () => {
  //로그인 유저정보
  const { setIsLogin, setUser, setIsChange, profileDB } = useUserLogin();

  //메뉴박스 참조
  const dropMenuRef = useRef();

  //메뉴박스 열기/닫기 상태관리
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const clickOutside = (e) => {
      if (isMenuOpen && !dropMenuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", clickOutside);

    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [isMenuOpen]);

  //페이지이동
  const navigate = useNavigate();

  //TODO 임시로그아웃 기능
  const handleLogout = () => {
    logout(setIsLogin, setUser, setIsChange, navigate);
  };

  return (
    <div ref={dropMenuRef}>
      {profileDB && (
        <S.UserLoginBox>
          <div>{profileDB.nickname}</div>
          <S.ProfileImage
            alt="프로필 사진"
            src={
              "https://starblog-bucket.s3.ap-northeast-2.amazonaws.com/profileImg/" +
              profileDB.profileimg
            }
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          />
        </S.UserLoginBox>
      )}

      <S.MenuBox $isOpen={isMenuOpen}>
        <S.MenuListBox>
          <li>
            <S.ListLink to="/profile">Profile</S.ListLink>
          </li>
          <li>
            <S.ListLink to="/myCodes">My Code</S.ListLink>
          </li>
          <li>
            <S.ListLink to="/myProject">My Project</S.ListLink>
          </li>
          <li onClick={handleLogout}>Logout</li>
        </S.MenuListBox>
      </S.MenuBox>
    </div>
  );
};

export const logout = (setIsLogin, setUser, setIsChange, navigate) => {
  setIsLogin(false);
  setUser(null);
  setIsChange(false);
  sessionStorage.clear();
  navigate("/");
};
