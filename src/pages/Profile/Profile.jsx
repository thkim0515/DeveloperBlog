import * as S from "./Profile.style.js";
import { useNavigate } from "react-router-dom";
import { useUserLogin } from "../../context/UserLoginContext";

export const Profile = () => {
  //TODO 유저정보 받아오기
  const { loginUser } = useUserLogin();
  //정보 수정 버튼 클릭시 이동 함수
  const navigate = useNavigate();
  const handleEditButtonClick = () => {
    navigate("/profileEdit");
  };

  return (
    <S.ProfileInfoMainBox>
      <S.ProfileTitle>Profile</S.ProfileTitle>
      <S.InfoAndBtnBox>
        {loginUser && (
          <S.ProfileInfoBox>
            <S.ProfileImgBox>
              <S.ProfileImg alt="프로필 이미지" src={loginUser.userImg} />
            </S.ProfileImgBox>
            <S.ProfileTextBox>
              <S.TextBoxItem>
                <p>이름</p>
              </S.TextBoxItem>
              <S.TextBoxItem>
                <div>
                  <p>{loginUser.userName}</p>
                </div>
              </S.TextBoxItem>
              <S.TextBoxItem>
                <p>닉네임</p>
              </S.TextBoxItem>
              <S.TextBoxItem>
                <div>
                  <p>{loginUser.userNickname}</p>
                </div>
              </S.TextBoxItem>
              <S.TextBoxItem>
                <p>이메일</p>
              </S.TextBoxItem>
              <S.TextBoxItem>
                <div className="email_box">
                  <p>{loginUser.userEmail}</p>
                </div>
              </S.TextBoxItem>
            </S.ProfileTextBox>
          </S.ProfileInfoBox>
        )}

        <S.ProfileEditButton onClick={handleEditButtonClick}>
          정보 수정
        </S.ProfileEditButton>
      </S.InfoAndBtnBox>
    </S.ProfileInfoMainBox>
  );
};
