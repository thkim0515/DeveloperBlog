import * as S from "./Layout.style";
import { UserLogin } from "./UserLogin";
import { useNavigate } from "react-router-dom";
import { useUserLogin } from "../../context/UserLoginContext";
import { Logo } from "./Logo";
import { LiveChatComp } from "../LiveChat/LivaChatComp";

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
    <S.HeaerParentBox>
      <S.HeaderBox>
        <div style={{ display: "flex", alignItems: "ceneter", gap: "16px" }}>
          <Logo />
          {/* 로그인 여부에 따라 조건부 렌더링 */}
          <S.SloganBox>
            <p>우리의 지식이 별이 되는 공간</p>
          </S.SloganBox>
        </div>
        <div style={{ display: "flex", alignItems: "ceneter", gap: "8px" }}>
          <S.CodeProjectMenuBox>
            <ul>
              <S.ListLink to="/CodeMain">Code</S.ListLink>
              <S.ListLink to="/teamProject">Project</S.ListLink>
            </ul>
          </S.CodeProjectMenuBox>

          {isLogin ? (
            <UserLogin></UserLogin>
          ) : (
            <S.LogineButton onClick={handleLoginButtonClick}>
              로그인
            </S.LogineButton>
          )}
          <LiveChatComp />
        </div>
      </S.HeaderBox>
    </S.HeaerParentBox>
  );
};
