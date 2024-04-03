import * as S from "./Layout.style";
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserLogin } from "../../context/UserLoginContext";

export const UserLogin = () => {

  //로그인 유저정보
  const { setIsLogin, user, setUser, setIsChange } = useUserLogin();

  //메뉴박스 참조
  const dropMenuRef = useRef();

  //메뉴박스 열기/닫기 상태관리
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  useEffect(() => {
    const clickOutside = (e) => {
      if (isMenuOpen && !dropMenuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
        console.log(dropMenuRef.current)
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
    setIsLogin(false);
    setUser(null);
    setIsChange(false);
    sessionStorage.clear();
    navigate("/");
  };

  return (
    <div ref={dropMenuRef}>
      {user && (
        <S.UserLoginBox>
          <div>{user.nickname}</div>
          <S.ProfileImage alt="프로필 사진" src={user.profile} />
          <img
            onClick={()=>{setIsMenuOpen(!isMenuOpen)}}
            alt="메뉴 아이콘"
            src="../img/layout/menu-icon.png"
          />
        </S.UserLoginBox>
      )}
      
      <S.MenuBox $isOpen={isMenuOpen}>
        <S.MenuListBox  >
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
      </div>

  );
};
