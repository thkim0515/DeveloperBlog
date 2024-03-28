import { SHeaderBox, SLogineButton, SLogo, SLogoLink } from "./Layout.style";
import { UserLogin } from "./UserLogin";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  // 네비게이션 객체 생성
  const navigate = useNavigate();

  //로그인 상태(임시로 데이터 하드코딩 중)
  //const [isLogin, setIsLogin] = useState(false);
  const isLogin = true;

  // 로그인 버튼 클릭 시 페이지 이동 처리 함수
  const handleLoginButtonClick = () => {
    // 로그인 페이지로 이동
    navigate("/login");
  };

  return (
    <SHeaderBox>
      <SLogo>
        <SLogoLink to="/">STARBLOG</SLogoLink>
      </SLogo>
      {/* 로그인 여부에 따라 조건부 렌더링 */}
      {isLogin ? (
        <UserLogin></UserLogin>
      ) : (
        <SLogineButton onClick={handleLoginButtonClick}>로그인</SLogineButton>
      )}
    </SHeaderBox>
  );
};
