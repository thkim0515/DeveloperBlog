import * as S from "./Layout.style";
import { UserLogin } from "./UserLogin";
//import { useNavigate } from "react-router-dom";
import { useUserLogin } from "../../context/UserLoginContext";

export const Header = () => {
  // 네비게이션 객체 생성
  //const navigate = useNavigate();

  //context 로그인 상태관리
  const { isLogin, setIsLogin, setIsChange } = useUserLogin();

  //임시 user객체
  const user = {
    userid: "admin",
    usernickname: "코딩초보",
    useremail: "admin@gmail.com",
    userimg: "../img/layout/user-profile.jpg",
  };
  // 로그인 버튼 클릭 시 페이지 이동 처리 함수
  const handleLoginButtonClick = () => {
    sessionStorage.setItem("isLogin", true);
    sessionStorage.setItem("user", JSON.stringify(user));
    setIsLogin(true);
    setIsChange(true);
    //navigate(/)
  };

  return (
    <S.HeaerParentBox>
      <S.HeaderBox>
        <S.Logo>
          <S.LogoLink to="/">STARBLOG</S.LogoLink>
        </S.Logo>
        {/* 로그인 여부에 따라 조건부 렌더링 */}
        {isLogin ? (
          <UserLogin></UserLogin>
        ) : (
          <S.LogineButton onClick={handleLoginButtonClick}>
            로그인
          </S.LogineButton>
        )}
      </S.HeaderBox>
    </S.HeaerParentBox>
  );
};
