import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { encryptData, decryptData } from "../js/secure";
// 새로운 컨텍스트 생성
const UserLoginContext = createContext();

// 컨텍스트 제공자 컴포넌트
export const UserLoginProvider = ({ children }) => {
  // 로그인상태
  const [isLogin, setIsLogin] = useState(
    decryptData("isLogin", sessionStorage)
  );

  //isLogin 상태가 변경될 때마다 세션 스토리지에 저장
  useEffect(() => {
    // sessionStorage.setItem("isLogin", isLogin);
    encryptData(isLogin, "isLogin", sessionStorage);
  }, [isLogin]);

  //로그인 유저 정보
  const [user, setUser] = useState(decryptData("user", sessionStorage));

  //user정보 변경 감지
  const [isChange, setIsChange] = useState(false);

  useEffect(() => {
    if (isChange) {
      setUser(decryptData("user", sessionStorage));
    }
  }, [isChange]);

  //프로필 데이터
  const [profileDB, setProfileDB] = useState(null);
  useEffect(() => {
    if (user) {
      axios
        .get(`/users/read/${user.id}`)
        .then((response) => {
          setProfileDB(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data from server:", error);
        });
    } else {
      setProfileDB(null);
    }
  }, [user]);

  return (
    <UserLoginContext.Provider
      value={{ isLogin, setIsLogin, user, setUser, setIsChange, profileDB }}
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
    profileDB: context.profileDB,
  };
};
