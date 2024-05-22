import * as S from "./Profile.style.js";
import { useNavigate } from "react-router-dom";
import { useUserLogin } from "../../context/UserLoginContext";
import { Metas } from "../../components/common/Metas.jsx";
import { useSelector } from "react-redux";

export const Profile = () => {
  const imageUrl = useSelector(state => state.butketUrl.imageUrl);
  //유저정보 받아와서 프로필 데이터로 저장
  const { profileDB } = useUserLogin();

  //정보 수정 버튼 클릭시 이동 함수
  const navigate = useNavigate();
  const handleEditButtonClick = () => {
    navigate("/profileEdit");
  };

  return (
    <S.ProfileInfoMainBox>
      <Metas title="프로필" none />
      <S.ProfileTitle>Profile</S.ProfileTitle>
      <S.InfoAndBtnBox>
        {profileDB && (
          <S.ProfileInfoBox>
            <S.ProfileImgBox>
              <S.ProfileImg alt="프로필 이미지" src={`${imageUrl}profileImg/` + profileDB.profileimg} />
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

        <S.ProfileEditButton onClick={handleEditButtonClick}>정보 수정</S.ProfileEditButton>
      </S.InfoAndBtnBox>
    </S.ProfileInfoMainBox>
  );
};
