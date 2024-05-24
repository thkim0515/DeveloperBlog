import * as S from "./Layout.style";
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserLogin } from "../../context/UserLoginContext";
import { useSelector } from "react-redux";

export const UserLogin = () => {
  const bucketUrl = useSelector(state => state.bucketUrl);
  const imageUrl = bucketUrl ? bucketUrl.imageUrl : "";

  //로그인 유저정보
  const { setIsLogin, setUser, setIsChange, profileDB } = useUserLogin();

  //메뉴박스 참조
  const dropMenuRef = useRef();

  //메뉴박스 열기/닫기 상태관리
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const clickOutside = e => {
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
            src={`${imageUrl}profileImg/` + profileDB.profileimg}
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          />
        </S.UserLoginBox>
      )}

      <S.MenuBox $isOpen={isMenuOpen}>
        <S.MenuListBox>
          <li>
            <S.ListLink to="/myProfile">My Profile</S.ListLink>
          </li>
          <li>
            <S.ListLink to="/myCodes">My Code</S.ListLink>
          </li>
          <li onClick={handleLogout} className="logout">
            Logout
          </li>
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
