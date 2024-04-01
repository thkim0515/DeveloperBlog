import { createContext, useState, useContext, useEffect } from "react";

//TODO 로그인상태, 로그인 유저 모두 하드코딩중, 임시로 세션스토리지쓰고 있으나 로그인 방법 고민 필요
// 새로운 컨텍스트 생성
const UserLoginContext = createContext();

// 컨텍스트 제공자 컴포넌트
export const UserLoginProvider = ({ children }) => {
  // 로그인상태
  const [isLogin, setIsLogin] = useState(
    JSON.parse(sessionStorage.getItem("isLogin"))
  );

  // isLogin 상태가 변경될 때마다 세션 스토리지에 저장(새로고침시 로그인 상태 데이터 유지)
  useEffect(() => {
    sessionStorage.setItem("isLogin", isLogin);
  }, [isLogin]);

  //TODO 로그인 유저 정보 (후에 백엔드에서 데이터 받아오기)
  const [loginUser, setLoginUser] = useState(
    JSON.parse(sessionStorage.getItem("loginUser"))
  );

  //user정보 변경 감지
  const [isChange, setIsChange] = useState(false);

  useEffect(() => {
    if (isChange) {
      setLoginUser(JSON.parse(sessionStorage.getItem("loginUser")));
    }
  }, [isChange]);

  //user객체를 생성해 세션스토리지에 저장(임시로 로그인 유저 생성 하드코딩, 추후 삭제)
  useEffect(() => {
    if (isLogin && !loginUser) {
      const loginUser = {
        userId: "admin",
        userName: "김개발",
        userNickname: "코딩초보",
        userEmail: "admin@gmail.com",
        userImg: "../img/layout/user-profile.jpg",
      };
      sessionStorage.setItem("loginUser", JSON.stringify(loginUser));
      setIsChange(true);
    }
  }, [isLogin, loginUser]);

  return (
    <UserLoginContext.Provider
      value={{ isLogin, setIsLogin, loginUser, setLoginUser, setIsChange }}
    >
      {children}
    </UserLoginContext.Provider>
  );
};

// 컨텍스트 사용을 위한 커스텀 훅
export const useUserLogin = () => {
  const context = useContext(UserLoginContext);
  return {
    isLogin: context.isLogin,
    setIsLogin: context.setIsLogin,
    loginUser: context.loginUser,
    setLoginUser: context.setLoginUser,
    setIsChange: context.setIsChange,
  };
};
