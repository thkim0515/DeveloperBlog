import * as S from "./Profile.style.js";
import { useNavigate } from "react-router-dom";
import { useUserLogin } from "../../context/UserLoginContext";
import { Helmet } from "react-helmet-async";

export const Profile = () => {
  //유저정보 받아와서 프로필 데이터로 저장
  const { profileDB } = useUserLogin();

  //정보 수정 버튼 클릭시 이동 함수
  const navigate = useNavigate();
  const handleEditButtonClick = () => {
    navigate("/profileEdit");
  };

  return (
    <S.ProfileInfoMainBox>
      <Helmet>
        <title>Profile - StarBlog</title>
      </Helmet>
      <S.ProfileTitle>Profile</S.ProfileTitle>
      <S.InfoAndBtnBox>
        {profileDB && (
          <S.ProfileInfoBox>
            <S.ProfileImgBox>
              <S.ProfileImg
                alt="프로필 이미지"
                src={"/img/" + profileDB.profileimg}
              />
            </S.ProfileImgBox>
            <S.ProfileTextBox>
              <S.TextBoxItem>
                <p>아이디</p>
              </S.TextBoxItem>
              <S.TextBoxItem>
                <div>
                  <p>{profileDB.id}</p>
                </div>
              </S.TextBoxItem>
              <S.TextBoxItem>
                <p>닉네임</p>
              </S.TextBoxItem>
              <S.TextBoxItem>
                <div>
                  <p>{profileDB.nickname}</p>
                </div>
              </S.TextBoxItem>
              <S.TextBoxItem>
                <p>이메일</p>
              </S.TextBoxItem>
              <S.TextBoxItem>
                <div className="email_box">
                  <p>{profileDB.email}</p>
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
