import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { encryptData, decryptData } from "../js/secure";
// 새로운 컨텍스트 생성
const UserLoginContext = createContext();

// 컨텍스트 제공자 컴포넌트
export const UserLoginProvider = ({ children }) => {
  // 로그인상태
  const [isLogin, setIsLogin] = useState(null);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const loginStatus = await decryptData("isLogin", sessionStorage);
        setIsLogin(loginStatus);
      } catch (error) {
        console.error("로그인 상태 확인 중 에러 발생:", error);
        setIsLogin(false);
      }
    };

    checkLoginStatus();
  }, []);

  //isLogin 상태가 변경될 때마다 세션 스토리지에 저장
  useEffect(() => {
    if (isLogin !== null) {
      const saveIsLogin = async () => {
        try {
          await encryptData(isLogin, "isLogin", sessionStorage);
        } catch (error) {
          console.error("로그인 상태 저장 중 에러 발생:", error);
        }
      };

      saveIsLogin();
    }
  }, [isLogin]);

  //로그인 유저 정보
  const [user, setUser] = useState(null);

  //user정보 변경 감지
  const [isChange, setIsChange] = useState(false);

  const loadUser = async () => {
    try {
      const userData = await decryptData("user", sessionStorage);
      setUser(userData);
    } catch (error) {
      console.error("사용자 데이터 로드 중 에러 발생:", error);
      setUser(null);
    }
  };

  // isLogin 변경 시 사용자 정보 갱신
  useEffect(() => {
    if (isLogin) {
      loadUser();
    }
  }, [isLogin]);

  // 사용자 정보 변경 감지 시 재로드
  useEffect(() => {
    if (isChange) {
      loadUser();
      setIsChange(false);
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
