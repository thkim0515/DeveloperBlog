import { createContext, useState, useContext } from "react";

// 새로운 컨텍스트 생성
const UserLoginContext = createContext();

// 컨텍스트 제공자 컴포넌트
export const UserLoginProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false); // 로그인 상태 및 설정 함수

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
