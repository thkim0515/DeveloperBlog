import { createContext, useState, useContext, useEffect } from "react";

// 새로운 컨텍스트 생성
const UserLoginContext = createContext();

// 컨텍스트 제공자 컴포넌트
export const UserLoginProvider = ({ children }) => {
  // 로그인상태
  const [isLogin, setIsLogin] = useState(
    JSON.parse(sessionStorage.getItem("isLogin"))
  );

  //isLogin 상태가 변경될 때마다 세션 스토리지에 저장(새로고침시 로그인 상태 데이터 유지)
  useEffect(() => {
    sessionStorage.setItem("isLogin", isLogin);
  }, [isLogin]);

  //TODO 로그인 유저 정보 (후에 백엔드에서 데이터 받아오기)
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem("user")));

  //user정보 변경 감지
  const [isChange, setIsChange] = useState(false);

  useEffect(() => {
    if (isChange) {
      setUser(JSON.parse(sessionStorage.getItem("user")));
    }
  }, [isChange]);

  return (
    <UserLoginContext.Provider
      value={{ isLogin, setIsLogin, user, setUser, setIsChange }}
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
    user: context.user,
    setUser: context.setUser,
    setIsChange: context.setIsChange,
  };
};
