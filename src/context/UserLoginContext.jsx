import { createContext, useState, useContext, useEffect } from "react";

//TODO 로그인상태, 로그인 유저 모두 하드코딩중, 임시로 세션스토리지쓰고 있으나 로그인 방법 고민 필요
// 새로운 컨텍스트 생성
const UserLoginContext = createContext();

// 컨텍스트 제공자 컴포넌트
export const UserLoginProvider = ({ children }) => {
  // 로그인상태
  const [isLogin, setIsLogin] = useState(
    sessionStorage.getItem("isLogin") === "true" ? true : false
  );

  // isLogin 상태가 변경될 때마다 세션 스토리지에 저장
  useEffect(() => {
    sessionStorage.setItem("isLogin", isLogin);
  }, [isLogin]);

  //isLogin이면 user객체를 생성해 세션스토리지에 저장(임시로 로그인 유저 하드코딩)
  useEffect(() => {
    if (isLogin) {
      const loginUser = {
        userid: "admin",
        username: "김개발",
        usernickname: "코딩박사",
        useremail: "admin@gmail.com",
        userimg: "./img/layout/user-profile.jpg",
      };
      sessionStorage.setItem("loginUser", JSON.stringify(loginUser));
    } else {
      sessionStorage.removeItem("loginUser");
    }
  }, [isLogin]);

  return (
    <UserLoginContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </UserLoginContext.Provider>
  );
};

// 컨텍스트 사용을 위한 커스텀 훅
export const useUserLogin = () => {
  const context = useContext(UserLoginContext);
  return [context.isLogin, context.setIsLogin];
};
