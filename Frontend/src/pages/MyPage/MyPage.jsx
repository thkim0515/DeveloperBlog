import { Link, Outlet, useLocation } from "react-router-dom";
import { useUserLogin } from "../../context/UserLoginContext";
import * as S from "./MyPage.style";

export const MyPage = () => {
  const location = useLocation();
  //유저정보
  const { profileDB } = useUserLogin();

  return (
    <>
      {profileDB && (
        <S.MyPageBox>
          <S.Title>마이페이지</S.Title>
          <S.Content>
            {/* 좌측 메뉴 */}
            <S.Sidebar>
              <ul>
                <S.MenuItem $active={location.pathname === "/mypage/info"}>
                  <Link to="info">내정보</Link>
                </S.MenuItem>
                <S.MenuItem $active={location.pathname === "/mypage/password"}>
                  <Link to="password">비밀번호 변경</Link>
                </S.MenuItem>
                <S.MenuItem $active={location.pathname === "/mypage/notifications"}>
                  <Link to="notifications">프로젝트 알림</Link>
                </S.MenuItem>
              </ul>
            </S.Sidebar>

            {/* 우측 정보 */}
            <S.ProfileSection>
              <Outlet />
            </S.ProfileSection>
          </S.Content>
        </S.MyPageBox>
      )}
    </>
  );
};

export default MyPage;
