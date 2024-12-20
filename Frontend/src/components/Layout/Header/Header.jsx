import * as S from "../Header/Header.style";
import { UserLogin } from "../UserLogin";
import { useNavigate } from "react-router-dom";
import { useUserLogin } from "../../../context/UserLoginContext";
import { Logo } from "./Logo";
import Menu from "./Menu";
import { WriteButton } from "../../common/WriteButton";

export const Header = () => {
  // 네비게이션 객체 생성
  const navigate = useNavigate();

  //context 로그인 상태관리
  const { isLogin } = useUserLogin();

  // 로그인 버튼 클릭 시 페이지 이동 처리 함수
  const handleLoginButtonClick = () => {
    navigate("/login");
  };

  return (
    <S.Header>
      <S.HeaderLeft>
        <Logo />
        <Menu />
      </S.HeaderLeft>

      <S.HeaderRight>
        {isLogin && (
          <>
            <WriteButton />
            <UserLogin />
          </>
        )}
        {!isLogin && <S.LoginButton onClick={handleLoginButtonClick}>로그인</S.LoginButton>}
      </S.HeaderRight>
    </S.Header>
  );
};
